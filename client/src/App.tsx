import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const HowItWorks = lazy(() => import("@/pages/HowItWorks"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const WhyGrowithCP = lazy(() => import("@/pages/WhyGrowithCP"));
const Contact = lazy(() => import("@/pages/Contact"));
const Chat = lazy(() => import("@/pages/Chat"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen bg-background text-primary">Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/why-growithcp" component={WhyGrowithCP} />
        <Route path="/contact" component={Contact} />
        <Route path="/chat" component={Chat} />
        <Route path="*" component={Home} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
