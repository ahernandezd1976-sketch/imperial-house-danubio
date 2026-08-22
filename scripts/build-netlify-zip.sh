#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/home/ubuntu/imperial-house-danubio"
STAGE_DIR="/home/ubuntu/self-contained-site"
PUBLIC_DIR="$STAGE_DIR/public"
ZIP_PATH="/home/ubuntu/imperial-house-website.zip"
ASSET_LIST="/tmp/imperial-house-manus-assets.txt"
REFERENCE_LIST="/tmp/imperial-house-local-assets.txt"

cd "$PROJECT_DIR"
pnpm run build

rm -rf "$STAGE_DIR"
mkdir -p "$PUBLIC_DIR/assets"
cp -a "$PROJECT_DIR/dist/public/." "$PUBLIC_DIR/"

grep -rhoE '/manus-storage/[A-Za-z0-9_.,-]+\.(png|jpg|jpeg|webp|gif|mp4|mp3|wav)' \
  "$PUBLIC_DIR" --include='*.js' --include='*.html' --include='*.css' \
  | sort -u > "$ASSET_LIST" || true

while IFS= read -r asset_path; do
  [[ -z "$asset_path" ]] && continue
  filename="${asset_path##*/}"
  curl -fsSL "http://127.0.0.1:3000${asset_path}" -o "$PUBLIC_DIR/assets/$filename"
  test -s "$PUBLIC_DIR/assets/$filename"
done < "$ASSET_LIST"

while IFS= read -r source_file; do
  sed -i 's#/manus-storage/#/assets/#g' "$source_file"
done < <(find "$PUBLIC_DIR" -type f \( -name '*.js' -o -name '*.html' -o -name '*.css' \))

printf '/* /index.html 200\n' > "$PUBLIC_DIR/_redirects"

if grep -Rqs '/manus-storage/' "$PUBLIC_DIR" --include='*.js' --include='*.html' --include='*.css'; then
  echo "Packaging failed: unreplaced /manus-storage/ reference remains." >&2
  exit 1
fi

grep -rhoE '/assets/[A-Za-z0-9_.,-]+\.(png|jpg|jpeg|webp|gif|mp4|mp3|wav|css|js)' \
  "$PUBLIC_DIR" --include='*.js' --include='*.html' --include='*.css' \
  | sort -u > "$REFERENCE_LIST" || true

while IFS= read -r asset_path; do
  [[ -z "$asset_path" ]] && continue
  test -s "$PUBLIC_DIR${asset_path}" || {
    echo "Packaging failed: missing referenced file $asset_path" >&2
    exit 1
  }
done < "$REFERENCE_LIST"

rm -f "$ZIP_PATH"
cd "$STAGE_DIR"
zip -qr "$ZIP_PATH" public -x 'public/__manus__/*'

unzip -tq "$ZIP_PATH" >/dev/null
unzip -l "$ZIP_PATH" | grep -q 'public/index.html'
unzip -l "$ZIP_PATH" | grep -q 'public/_redirects'
unzip -l "$ZIP_PATH" | grep -q 'intelligence_briefing_english_54220df6.png'
unzip -l "$ZIP_PATH" | grep -q 'family_tree_english_d3bd15e8.png'

echo "Created $ZIP_PATH"
du -h "$ZIP_PATH"
echo "Downloaded media assets: $(wc -l < "$ASSET_LIST")"
echo "Validated local references: $(wc -l < "$REFERENCE_LIST")"
