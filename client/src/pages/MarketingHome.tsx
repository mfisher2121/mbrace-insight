import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Zap, 
  MapPin, 
  Star, 
  Database,
  TrendingUp,
  BarChart3,
  Activity,
  Building2,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import EntryPointSection from "@/components/EntryPointSection";
import SEO from "@/components/SEO";

export default function MarketingHome() {
  const systems = [
    {
      title: "LSA Optimization",
      tag: "MAXIMIZE DEMAND",
      description: "Aggressive Max-Per-Lead bidding tuned to high-ticket installs, not tire-kicker maintenance calls. Budget flows to $8K+ jobs.",
      icon: <Zap className="h-5 w-5" />,
      href: "/systems#lsa-optimization"
    },
    {
      title: "Lead Automation",
      tag: "SPEED-TO-LEAD",
      description: "24/7 VAPI + SMS response so no LSA lead waits more than 30 seconds. After-hours emergencies don't die in voicemail.",
      icon: <PhoneCall className="h-5 w-5" />,
      href: "/systems#lead-automation"
    },
    {
      title: "Hyper-Local SEO",
      tag: "MAP PACK DOMINATION",
      description: "Service-area pages built with DMV neighborhood data, AI-Overview ready. Your content ranks because it's actually useful.",
      icon: <MapPin className="h-5 w-5" />,
      href: "/systems#hyper-local-seo"
    },
    {
      title: "Review Systems",
      tag: "TRUST FLYWHEEL",
      description: "Tech-specific QR codes + SMS flows that turn every satisfied homeowner into a review. Velocity → rankings → more calls.",
      icon: <Star className="h-5 w-5" />,
      href: "/systems#review-systems"
    },
    {
      title: "Intel Hub / RAG",
      tag: "DATA-FIRST DECISIONS",
      description: "Every call, quote, and campaign flows into one intelligence layer you can query in plain English. See what's actually working.",
      icon: <Database className="h-5 w-5" />,
      href: "/systems#intel-hub"
    }
  ];

  const results = [
    {
      metric: "+61%",
      label: "Close Rate",
      description: "Average across 7 companies using the Comfort Advisor Playbook"
    },
    {
      metric: "-42%",
      label: "Cost Per Lead",
      description: "After LSA bidding optimization + service routing"
    },
    {
      metric: "+$54k",
      label: "Monthly Recovered",
      description: "Lost quotes converted via 7-day nurture sequence"
    },
    {
      metric: "25→4",
      label: "Reviews/Month",
      description: "After implementing tech-specific QR + SMS flows"
    }
  ];

  return (
    <>
      <SEO
        title="MBRACE Insight - The Operating System for HVAC Growth in the DMV"
        description="Turn your ad spend, reviews, and field ops into a predictable EBITDA machine. Built specifically for HVAC contractors in Washington DC, Maryland, and Northern Virginia."
        keywords="HVAC marketing DMV, HVAC contractors Washington DC, HVAC lead generation Maryland, local HVAC SEO Northern Virginia, HVAC growth systems, heat pump incentives DMV, HVAC automation, HVAC private equity platforms"
        canonical="https://mbraceinsight.com/"
      />
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans">
      {/* Hero Section with Dual-Track Paths */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#0f1115]/50 to-[#0f1115] pointer-events-none"></div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* H1 - Primary SEO Target */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              The Operating System for <span className="text-[#22c55e]">HVAC Growth</span> in the DMV
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Turn your ad spend, reviews, and field ops into a predictable EBITDA machine. Built specifically for Washington DC, Maryland, and Northern Virginia HVAC contractors.
            </p>

            {/* Dual-Track Path Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/for-contractors">
                  <Card className="bg-[#14171c] border-slate-800 hover:border-[#22c55e]/50 transition-all cursor-pointer group h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] border border-[#22c55e]/20 group-hover:bg-[#22c55e]/20 transition-colors">
                          <Users className="h-8 w-8" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-[#22c55e] transition-colors">
                        I'm a Contractor
                      </h2>
                      <p className="text-slate-400 text-sm">
                        1-5 trucks, $1-5M revenue. Stop losing after-hours emergencies. Recover lost quotes. Rank for neighborhood searches.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[#22c55e] font-mono text-sm font-medium">
                        Get Started <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/for-platforms">
                  <Card className="bg-[#14171c] border-slate-800 hover:border-[#ff4400]/50 transition-all cursor-pointer group h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#ff4400]/10 flex items-center justify-center text-[#ff4400] border border-[#ff4400]/20 group-hover:bg-[#ff4400]/20 transition-colors">
                          <Building2 className="h-8 w-8" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-[#ff4400] transition-colors">
                        I'm a PE Platform
                      </h2>
                      <p className="text-slate-400 text-sm">
                        3-20 locations seeking operating leverage. Standardize systems. Unify strategy. Scale EBITDA across the portfolio.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[#ff4400] font-mono text-sm font-medium">
                        Get Started <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                <span>DMV-Specific Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                <span>No Retainers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                <span>ROI or It's Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-[#22c55e]/30 text-[#22c55e] font-mono text-xs mb-4">
              RESULTS FROM THE FIELD
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Happens When the <span className="text-[#22c55e]">Systems Are Live</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#14171c] border-slate-800 h-full">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-4xl font-bold text-[#22c55e] font-mono">
                      {result.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {result.label}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Overview - H2 with Entity Clustering */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800" id="systems">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-xs mb-4">
              CORE SYSTEMS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Each System Targets a Specific <span className="text-[#22c55e]">Growth Lever</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Together they compound into a defensible market position for HVAC contractors in Washington DC, Maryland, and Northern Virginia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((sys, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={sys.href}>
                  <Card className="bg-[#14171c] border-slate-800 hover:border-[#22c55e]/50 transition-all cursor-pointer group h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-2 bg-slate-900 rounded text-slate-400 group-hover:text-[#22c55e] transition-colors">
                          {sys.icon}
                        </div>
                        <div className="text-[10px] font-mono text-slate-600 uppercase">0{idx + 1}</div>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-[#22c55e] transition-colors">
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
                      <div className="mt-4 flex items-center gap-2 text-[#22c55e] text-sm font-mono">
                        View Playbook <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DMV Market Intelligence - Entity Clustering */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-xs mb-4">
              BUILT ON DMV MARKET INTELLIGENCE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Data-Driven HVAC Growth for <span className="text-[#22c55e]">DMV Contractors</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-[#14171c] border-slate-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#22c55e] font-mono mb-2">$1,487</div>
                  <h3 className="text-sm font-semibold text-white mb-1">Avg Annual Savings</h3>
                  <p className="text-xs text-slate-500">In Montgomery County</p>
                </CardContent>
              </Card>
              <Card className="bg-[#14171c] border-slate-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#22c55e] font-mono mb-2">73%</div>
                  <h3 className="text-sm font-semibold text-white mb-1">Homes Eligible</h3>
                  <p className="text-xs text-slate-500">For Pepco/BGE Rebates</p>
                </CardContent>
              </Card>
              <Card className="bg-[#14171c] border-slate-800">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#22c55e] font-mono mb-2">15 yrs</div>
                  <h3 className="text-sm font-semibold text-white mb-1">Median HVAC Age</h3>
                  <p className="text-xs text-slate-500">In Bethesda 20814</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-slate-500 text-center font-mono">
              Data: DSIRE, Pepco, BGE, Census
            </p>
          </div>
        </div>
      </section>

      {/* Entry Point Section - Dual CTAs */}
      <EntryPointSection />

      {/* Cross-Domain Links Footer */}
      <footer className="py-12 bg-[#0a0d11] border-t border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4 font-mono">MBRACE INSIGHT</h3>
              <p className="text-sm text-slate-500">
                The Operating System for HVAC Growth in the DMV
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 font-mono text-sm uppercase">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="https://calc.mbraceinsight.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">
                    Heat Pump Incentive Calculator →
                  </a>
                </li>
                <li>
                  <a href="https://dmvheatpumps.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">
                    DMV Heat Pumps Education →
                  </a>
                </li>
                <li>
                  <Link href="/systems" className="hover:text-[#22c55e] transition-colors">
                    5-System Playbook →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 font-mono text-sm uppercase">Systems</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="/systems#lsa-optimization" className="hover:text-[#22c55e] transition-colors">LSA Optimization</Link></li>
                <li><Link href="/systems#lead-automation" className="hover:text-[#22c55e] transition-colors">Lead Automation</Link></li>
                <li><Link href="/systems#hyper-local-seo" className="hover:text-[#22c55e] transition-colors">Hyper-Local SEO</Link></li>
                <li><Link href="/systems#review-systems" className="hover:text-[#22c55e] transition-colors">Review Systems</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
            <p>© {new Date().getFullYear()} MBRACE Insight. Built for HVAC contractors in Washington DC, Maryland, and Northern Virginia.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

