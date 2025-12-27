import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MarketingHome from "./pages/MarketingHome";
import ForContractors from "./pages/ForContractors";
import ForPlatforms from "./pages/ForPlatforms";
import Systems from "./pages/Systems";
import BiddingStrategy from "./pages/BiddingStrategy";
import LeadAutomation from "./pages/LeadAutomation";
import FollowUpAutomation from "./pages/FollowUpAutomation";
import HyperLocalSEO from "./pages/HyperLocalSEO";
import GMPOptimization from "./pages/GMPOptimization";
import ReviewGeneration from "./pages/ReviewGeneration";
import ReviewRecency from "./pages/ReviewRecency";
import DMVMarketIntelligence from "./pages/DMVMarketIntelligence";


function Router() {
  // Detect which domain we're on
  const isIntelligenceDomain = typeof window !== 'undefined' && 
    (window.location.hostname === 'mbraceintelligence.com' || 
     window.location.hostname.includes('mbraceintelligence'));
  
  // Default homepage based on domain
  const HomePage = isIntelligenceDomain ? Home : MarketingHome;

  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/for-contractors"} component={ForContractors} />
      <Route path={"/for-platforms"} component={ForPlatforms} />
      <Route path={"/systems"} component={Systems} />
      <Route path={"/dashboard"} component={Home} />
      <Route path={"/bidding"} component={BiddingStrategy} />
      <Route path={"/lead-automation"} component={LeadAutomation} />
      <Route path={"/follow-up"} component={FollowUpAutomation} />
      <Route path={"/hyper-local-seo"} component={HyperLocalSEO} />
      <Route path={"/gmp-optimization"} component={GMPOptimization} />
      <Route path={"/review-generation"} component={ReviewGeneration} />
      <Route path={"/review-recency"} component={ReviewRecency} />
      <Route path={"/market-intelligence"} component={DMVMarketIntelligence} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
