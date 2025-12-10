import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Zap, 
  MapPin, 
  Star, 
  Database, 
  Activity,
  BarChart3,
  TrendingUp,
  Clock,
  BookOpen
} from "lucide-react";
import MarketReportSection from "@/components/MarketReportSection";
import CompetitiveAnalysisSection from "@/components/CompetitiveAnalysisSection";
import EntryPointSection from "@/components/EntryPointSection";
import { motion } from "framer-motion";

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
      tag: "MAXIMIZE DEMAND",
      description: "Aggressive Max-Per-Lead bidding tuned to high-ticket installs.",
      icon: <Zap className="h-5 w-5" />,
      status: "ACTIVE"
    },
    {
      title: "Lead Automation",
      tag: "SPEED-TO-LEAD",
      description: "24/7 VAPI + SMS response. <30s response time.",
      icon: <PhoneCall className="h-5 w-5" />,
      status: "ONLINE"
    },
    {
      title: "Hyper-Local SEO",
      tag: "MAP DOMINATION",
      description: "Service-area pages built with DMV neighborhood data.",
      icon: <MapPin className="h-5 w-5" />,
      status: "INDEXING"
    },
    {
      title: "Review Systems",
      tag: "TRUST FLYWHEEL",
      description: "Automated QR + SMS flows for 5-star reviews.",
      icon: <Star className="h-5 w-5" />,
      status: "MONITORING"
    },
    {
      title: "Intel Hub / RAG",
      tag: "DATA DECISIONS",
      description: "Query all calls, quotes, and campaigns in plain English.",
      icon: <Database className="h-5 w-5" />,
      status: "PROCESSING"
    }
  ];

  const calculators = [
    {
      title: "Energy Savings",
      inputs: ["ZIP Code", "Sq Footage", "SEER"],
      output: "Est. Yearly Savings"
    },
    {
      title: "Replacement Cost",
      inputs: ["System Type", "Home Size", "Ductwork"],
      output: "Price Range Estimate"
    },
    {
      title: "Heat Pump ROI",
      inputs: ["Fuel Type", "kWh Cost", "Usage"],
      output: "10-Year Cost Comparison"
    },
    {
      title: "System Sizing",
      inputs: ["Sq Footage", "Ceiling Height"],
      output: "Recommended BTU Range"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern">
        
        {/* Header / Top Bar */}
        <header className="border-b border-slate-800 bg-[#0f1115]/90 backdrop-blur sticky top-0 z-10">
          <div className="container py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-mono font-bold text-white tracking-tight">DASHBOARD</h2>
              <div className="h-4 w-px bg-slate-800"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                SYSTEM ONLINE
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 font-mono text-xs h-8">
                <Activity className="mr-2 h-3 w-3" /> RUN AUDIT
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white font-mono text-xs h-8">
                DEPLOY SYSTEM
              </Button>
            </div>
          </div>
        </header>

        <div className="container py-8 space-y-8">
          
          {/* Hero / Mission Control */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  The Operating System for <span className="text-primary">HVAC Growth</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl font-light">
                  Turn your ad spend, reviews, and field ops into a predictable EBITDA machine. Built on DMV market intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-[#14171c] border-slate-800">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded text-primary">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold text-white">$480/yr</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Avg SEER Savings</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#14171c] border-slate-800">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 bg-green-500/10 rounded text-green-500">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold text-white">87%</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Rebate Eligibility</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#14171c] border-slate-800">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 bg-blue-500/10 rounded text-blue-500">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold text-white">12-15yr</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Prime Replacement</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-[#14171c] border-slate-800 h-full">
              <CardHeader className="pb-2 border-b border-slate-800">
                <CardTitle className="text-sm font-mono text-slate-400 uppercase tracking-wider">System Status</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-800">
                  {systems.slice(0, 4).map((sys, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-slate-500">{sys.icon}</div>
                        <span className="text-sm font-medium text-slate-300">{sys.title}</span>
                      </div>
                      <Badge variant="outline" className="border-slate-700 text-primary font-mono text-[10px]">
                        {sys.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Systems Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
                <Database className="h-4 w-4 text-primary" /> Core Systems
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systems.map((sys, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="bg-[#14171c] border-slate-800 hover:border-primary/50 transition-colors cursor-pointer group h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-900 rounded text-slate-400 group-hover:text-primary transition-colors">
                          {sys.icon}
                        </div>
                        <div className="text-[10px] font-mono text-slate-600 uppercase">SYS-0{idx + 1}</div>
                      </div>
                      <CardTitle className="text-base text-white mt-3 font-mono group-hover:text-primary transition-colors">
                        {sys.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="mb-3 bg-slate-900 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                        {sys.tag}
                      </Badge>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {sys.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tools & Calculators */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" /> Interactive Tools
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {calculators.map((calc, idx) => (
                <Card 
                  key={idx} 
                  className="bg-[#14171c] border-slate-800 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  onClick={() => openCalculator(calc.title)}
                >
                  <CardContent className="p-5 space-y-3">
                    <h4 className="text-sm font-bold text-white font-mono">{calc.title}</h4>
                    <div className="space-y-1">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Inputs</div>
                      <div className="flex flex-wrap gap-1">
                        {calc.inputs.map((inp, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 bg-slate-900 rounded text-slate-400 border border-slate-800">
                            {inp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-primary text-xs font-mono font-medium">
                      LAUNCH <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Playbooks */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" /> Strategic Playbooks
              </h3>
              <Button variant="link" className="text-xs text-slate-400 hover:text-primary font-mono h-auto p-0">
                VIEW ALL
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[#14171c] border-slate-800 hover:border-slate-700 transition-colors group cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-[10px]">SALES PROCESS</Badge>
                    <div className="flex items-center text-[10px] text-slate-600 font-mono">
                      <Clock className="h-3 w-3 mr-1" /> 8 MIN
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors mb-2">
                    Why You're Losing $40,000 in Quotes You Already Gave
                  </h4>
                  <p className="text-sm text-slate-500">
                    The 7-day automated follow-up sequence that recovers lost revenue without adding headcount.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#14171c] border-slate-800 hover:border-slate-700 transition-colors group cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-[10px]">INTELLIGENCE</Badge>
                    <div className="flex items-center text-[10px] text-slate-600 font-mono">
                      <Clock className="h-3 w-3 mr-1" /> 6 MIN
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors mb-2">
                    The 5 Marketing Metrics That Actually Matter
                  </h4>
                  <p className="text-sm text-slate-500">
                    Stop tracking vanity metrics. Focus on the KPIs that drive EBITDA and exit multiples.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
        
        {/* New Sections from User Request */}
        <MarketReportSection />
        <CompetitiveAnalysisSection />
        <EntryPointSection />

        {/* Calculator Modal */}
        <Dialog open={calculatorOpen} onOpenChange={setCalculatorOpen}>
          <DialogContent className="bg-[#14171c] border-slate-800 text-white sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle className="font-mono text-lg text-primary flex items-center gap-2">
                <Activity className="h-4 w-4" /> {activeCalculator}
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-xs">
                Enter details for DMV-specific estimate.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-3 py-2">
              <div className="space-y-1">
                <Label className="text-[10px] font-mono uppercase text-slate-500">ZIP Code</Label>
                <Input placeholder="20850" className="bg-[#0f1115] border-slate-800 text-white font-mono h-8 text-sm" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-mono uppercase text-slate-500">Sq Footage</Label>
                <Input placeholder="2500" className="bg-[#0f1115] border-slate-800 text-white font-mono h-8 text-sm" />
              </div>
              
              <div className="bg-slate-900/50 p-3 rounded border border-slate-800 mt-2 flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                <div className="text-xs text-slate-400">
                  Checking Pepco/BGE rebates...
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-mono h-9 text-sm" onClick={() => setCalculatorOpen(false)}>
              CALCULATE
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
