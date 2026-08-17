import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "./contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import History from "./pages/History";
import Family from "./pages/Family";
import Traditions from "./pages/Traditions";
import Heraldry from "./pages/Heraldry";
import Properties from "./pages/Properties";
import World from "./pages/World";
import Constitution from "./pages/Constitution";
import Books from "./pages/Books";
import Press from "./pages/Press";
import Transparency from "./pages/Transparency";
import { SocialShareBar } from "./components/SocialShareBar";
import DynamicMeta from "./components/DynamicMeta";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/history"} component={History} />
      <Route path={"/family"} component={Family} />
      <Route path={"/traditions"} component={Traditions} />
      <Route path={"/heraldry"} component={Heraldry} />
      <Route path={"/properties"} component={Properties} />
      <Route path={"/world"} component={World} />
      <Route path={"/constitution"} component={Constitution} />
      <Route path={"/books"} component={Books} />
      <Route path={"/press"} component={Press} />
      <Route path={"/transparency"} component={Transparency} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <FadeWrapper><Router /></FadeWrapper>
      <DynamicMeta />
            <SocialShareBar />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

function FadeWrapper({ children }: { children: React.ReactNode }) {
  const { switching } = useLanguage();
  return <div className={`lang-fade ${switching ? "switching" : ""}`}>{children}</div>;
}

export default App;
