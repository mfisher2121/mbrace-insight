import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MetricStrip from "@/components/MetricStrip";
import SystemCard from "@/components/SystemCard";
import CalculatorCard from "@/components/CalculatorCard";
import PlaybookCard from "@/components/PlaybookCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, PhoneCall, Zap, MapPin, MessageSquare, Star, Database } from "lucide-react";

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState("");

  const openCalculator = (title: string) => {
    setActiveCalculator(title);
    setCalculatorOpen(true);
  };

  const systems = [
    {
      title: "LSA Optimization",
      tag: "Maximize Demand",
      description: "Aggressive Max-Per-Lead bidding tuned to high-ticket installs, not tire-kicker maintenance calls.",
      icon: <Zap className="h-5 w-5" />,
      link: "#",
      image: "/images/system-lsa.jpg"
    },
    {
      title: "Lead Automation",
      tag: "Speed-to-Lead",
      description: "24/7 VAPI + SMS response so no LSA lead waits more than 30 seconds. Turn missed calls into booked jobs.",
      icon: <PhoneCall className="h-5 w-5" />,
      link: "#",
      image: "/images/system-automation.jpg"
    },
    {
      title: "Hyper-Local SEO",
      tag: "Map Domination",
      description: "Service-area pages built with DMV neighborhood data, AI-Overview ready. Own your backyard.",
      icon: <MapPin className="h-5 w-5" />,
      link: "#",
      image: "/images/system-seo.jpg"
    },
    {
      title: "Review Systems",
      tag: "Trust Flywheel",
      description: "Tech-specific QR codes + SMS flows that turn every satisfied homeowner into a 5-star review.",
      icon: <Star className="h-5 w-5" />,
      link: "#",
      image: "/images/system-reviews.jpg"
    },
    {
      title: "Intel Hub / RAG",
      tag: "Data Decisions",
      description: "Every call, quote, and campaign flows into one intelligence layer you can query in plain English.",
      icon: <Database className="h-5 w-5" />,
      link: "#",
      image: "/images/hero-mission-control.jpg"
    }
  ];

  const calculators = [
    {
      title: "Energy Savings Calculator",
      description: "Calculate potential savings based on MD-specific utility rates and weather data.",
      inputs: ["ZIP Code", "Sq Footage", "Current SEER"],
      output: "Est. Yearly Savings"
    },
    {
      title: "Replacement Cost Range",
      description: "Get a realistic price range for system replacement based on home specs.",
      inputs: ["System Type", "Home Size", "Ductwork"],
      output: "Price Range Estimate"
    },
    {
      title: "Heat Pump vs Furnace ROI",
      description: "Compare 10-year costs of different heating systems with current fuel prices.",
      inputs: ["Fuel Type", "kWh Cost", "Usage"],
      output: "10-Year Cost Comparison"
    },
    {
      title: "BTU / System Size Helper",
      description: "Quick load calculation estimate to determine appropriate system sizing.",
      inputs: ["Sq Footage", "Ceiling Height", "Insulation"],
      output: "Recommended BTU Range"
    }
  ];

  const playbooks = [
    {
      title: "Why You're Losing $40,000 in Quotes You Already Gave",
      category: "Sales Process",
      readTime: "8 min read"
    },
    {
      title: "Stop Flying Blind: The 5 Marketing Metrics That Actually Matter",
      category: "Intelligence",
      readTime: "6 min read"
    },
    {
      title: "RAG System Architecture: The Intelligence Layer",
      category: "Technology",
      readTime: "12 min read"
    },
    {
      title: "How to 3x Review Velocity in 90 Days",
      category: "Reputation",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <MetricStrip />
        
        {/* Systems Section */}
        <section id="systems" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-4 bg-primary"></div>
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">Core Architecture</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
                  Five Systems. <br/><span className="text-slate-500">One Growth Engine.</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed font-mono border-l border-slate-800 pl-4">
                A complete operating system designed to replace fragmented tools with a unified, data-driven platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((system, idx) => (
                <SystemCard 
                  key={idx}
                  {...system}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Calculators Section */}
        <section id="tools" className="py-24 bg-slate-950 relative">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tools Homeowners Actually Use
              </h2>
              <p className="text-xl text-slate-400 font-light">
                And PE Partners Love.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calc, idx) => (
                <CalculatorCard 
                  key={idx}
                  {...calc}
                  onClick={() => openCalculator(calc.title)}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Playbooks Section */}
        <section id="playbooks" className="py-24 bg-background border-t border-slate-800">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Playbooks Built From the Field
              </h2>
              <Button variant="outline" className="mt-4 md:mt-0 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 font-mono text-xs">
                VIEW ALL PLAYBOOKS
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {playbooks.map((playbook, idx) => (
                <PlaybookCard 
                  key={idx}
                  {...playbook}
                  link="#"
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Install the OS?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
              Stop guessing. Start operating with precision. Run the audit to see exactly where you stand in the DMV market.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white rounded-none shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                Run Free Market Intel Report
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 text-xl border-slate-600 text-white hover:bg-slate-800 rounded-none bg-background/50 backdrop-blur-sm">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Calculator Modal */}
      <Dialog open={calculatorOpen} onOpenChange={setCalculatorOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-mono text-xl text-primary flex items-center gap-2">
              <Zap className="h-5 w-5" /> {activeCalculator}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Enter your details below to generate a precise estimate based on local DMV data.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-xs font-mono uppercase text-slate-500">ZIP Code</Label>
                <Input id="zip" placeholder="20850" className="bg-slate-950 border-slate-800 text-white font-mono" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sqft" className="text-xs font-mono uppercase text-slate-500">Sq Footage</Label>
                <Input id="sqft" placeholder="2500" className="bg-slate-950 border-slate-800 text-white font-mono" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-mono uppercase text-slate-500">Email Report To</Label>
              <Input id="email" type="email" placeholder="owner@hvac-company.com" className="bg-slate-950 border-slate-800 text-white font-mono" />
            </div>
            
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800 mt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="text-sm text-slate-400">
                  <span className="text-white font-bold">Includes Rebate Check:</span> We'll automatically check Pepco, BGE, and SMECO databases for eligible rebates.
                </div>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-mono h-12 text-lg" onClick={() => setCalculatorOpen(false)}>
            CALCULATE SAVINGS
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
