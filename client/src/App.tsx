import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ZodiacFinder from "@/pages/zodiac-finder";
import Horoscope from "@/pages/horoscope";
import Compatibility from "@/pages/compatibility";
import Stickers from "@/pages/stickers";
import NftVault from "@/pages/nft-vault";
import Memes from "@/pages/memes";
import CosmicNav from "@/components/cosmic-nav";
import CosmicFooter from "@/components/cosmic-footer";

function Router() {
  return (
    <div className="min-h-screen cosmic-gradient star-field">
      <CosmicNav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/zodiac" component={ZodiacFinder} />
        <Route path="/horoscope" component={Horoscope} />
        <Route path="/compatibility" component={Compatibility} />
        <Route path="/stickers" component={Stickers} />
        <Route path="/nft-vault" component={NftVault} />
        <Route path="/memes" component={Memes} />
        <Route component={NotFound} />
      </Switch>
      <CosmicFooter />
    </div>
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
