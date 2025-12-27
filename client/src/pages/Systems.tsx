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
  Clock,
  MessageSquare,
  Search,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Systems() {
  const systems = [
    {
      id: "lsa-optimization",
      number: "01",
      title: "LSA Optimization",
      tag: "MAXIMIZE EMERGENCY DEMAND",
      icon: <Zap className="h-6 w-6" />,
      description: "Aggressive Max-Per-Lead bidding tuned to high-ticket installs, not tire-kicker maintenance calls. Budget flows to $8K+ jobs.",
      details: [
        "Max-per-lead bidding for emergency calls",
        "Tuned to high-ticket installs ($8K+)",
        "Filters out tire-kicker maintenance calls",
        "DMV-specific demand patterns",
        "Real-time budget allocation"
      ],
      results: "Average -42% cost per lead after optimization"
    },
    {
      id: "lead-automation",
      number: "02",
      title: "Lead Automation",
      tag: "SPEED-TO-LEAD",
      icon: <PhoneCall className="h-6 w-6" />,
      description: "24/7 VAPI + SMS response so no LSA lead waits more than 30 seconds. After-hours emergencies don't die in voicemail.",
      details: [
        "VAPI (Voice API) automated response",
        "SMS follow-up within 30 seconds",
        "24/7 coverage for after-hours calls",
        "No leads die in voicemail",
        "Qualification and routing automation"
      ],
      results: "27% of HVAC calls come after hours - now captured"
    },
    {
      id: "hyper-local-seo",
      number: "03",
      title: "Hyper-Local SEO",
      tag: "MAP PACK DOMINATION",
      icon: <MapPin className="h-6 w-6" />,
      description: "Service-area pages built with DMV neighborhood data, AI-Overview ready. Your content ranks because it's actually useful.",
      details: [
        "Neighborhood-specific service pages",
        "DMV market intelligence integration",
        "AI-Overview optimized content",
        "Competes with 2-3 contractors, not 100+",
        "Local entity clustering"
      ],
      results: "Neighborhood pages rank faster than generic city pages"
    },
    {
      id: "review-systems",
      number: "04",
      title: "Review Systems",
      tag: "TRUST FLYWHEEL",
      icon: <Star className="h-6 w-6" />,
      description: "Tech-specific QR codes + SMS flows that turn every satisfied homeowner into a review. Velocity → rankings → more calls.",
      details: [
        "Tech-specific QR code generation",
        "Automated SMS review requests",
        "Post-service follow-up sequences",
        "Review velocity optimization",
        "GBP ranking improvement"
      ],
      results: "25→4 reviews per month after implementation"
    },
    {
      id: "intel-hub",
      number: "05",
      title: "Intel Hub / RAG",
      tag: "DATA-FIRST DECISIONS",
      icon: <Database className="h-6 w-6" />,
      description: "Every call, quote, and campaign flows into one intelligence layer you can query in plain English. See what's actually working.",
      details: [
        "RAG (Retrieval-Augmented Generation) system",
        "Query all data in plain English",
        "Call, quote, and campaign analytics",
        "DMV market intelligence integration",
        "Predictive insights and recommendations"
      ],
      results: "Data-driven decisions replace guesswork"
    }
  ];

  return (
    <>
      <SEO
        title="5-System Playbook - MBRACE Insight | HVAC Growth Systems for DMV Contractors"
        description="Five core systems for HVAC growth in the DMV: LSA Optimization, Lead Automation, Hyper-Local SEO, Review Systems, and Intel Hub. Field-tested playbooks for Washington DC, Maryland, and Northern Virginia contractors."
        keywords="HVAC growth systems, LSA optimization HVAC, HVAC lead automation, hyper-local HVAC SEO, HVAC review systems, HVAC data analytics, HVAC marketing playbook, DMV HVAC systems, HVAC contractor systems"
        canonical="https://mbraceinsight.com/systems"
      />
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans">
        {/* Hero Section - H1 */}
        <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden border-b border-slate-800">
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-[#22c55e]/30 text-[#22c55e] font-mono text-xs mb-4">
                THE 5-SYSTEM PLAYBOOK
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
                Each System Targets a Specific <span className="text-[#22c55e]">Growth Lever</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Together they compound into a defensible market position for HVAC contractors in Washington DC, Maryland, and Northern Virginia. Not theory. Not templates. Systems we've deployed with real contractors in the DMV.
              </p>
            </div>
          </div>
        </section>

        {/* Systems Detail Section - H2 */}
        <section className="py-24 bg-[#0f1115]">
          <div className="container">
            <div className="space-y-24">
              {systems.map((system, idx) => (
                <motion.div
                  key={system.id}
                  id={system.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="scroll-mt-20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - System Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="text-6xl font-bold text-slate-800 font-mono">
                          {system.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-3 bg-slate-900 rounded text-[#22c55e]">
                              {system.icon}
                            </div>
                            <div>
                              <Badge variant="outline" className="border-[#22c55e]/30 text-[#22c55e] font-mono text-xs mb-2">
                                {system.tag}
                              </Badge>
                              <h2 className="text-3xl font-bold text-white">
                                {system.title}
                              </h2>
                            </div>
                          </div>
                          <p className="text-lg text-slate-400 leading-relaxed mb-6">
                            {system.description}
                          </p>

                          {/* Details List */}
                          <div className="space-y-3 mb-6">
                            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide font-mono">
                              System Components
                            </h3>
                            <ul className="space-y-2">
                              {system.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="h-5 w-5 text-[#22c55e] shrink-0 mt-0.5" />
                                  <span className="text-slate-400">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Results */}
                          <Card className="bg-[#14171c] border-slate-800">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <TrendingUp className="h-5 w-5 text-[#22c55e] shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-sm font-semibold text-white mb-1">Field Results</div>
                                  <p className="text-sm text-slate-400">{system.results}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Related Resources */}
                    <div className="space-y-6">
                      <Card className="bg-[#14171c] border-slate-800 sticky top-20">
                        <CardHeader>
                          <CardTitle className="text-sm font-mono text-slate-400 uppercase tracking-wide">
                            Related Resources
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Link href="/for-contractors">
                            <div className="p-3 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors cursor-pointer">
                              <div className="text-sm font-semibold text-white mb-1">For Contractors</div>
                              <div className="text-xs text-slate-500">See how independent contractors use this system</div>
                            </div>
                          </Link>
                          <Link href="/for-platforms">
                            <div className="p-3 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors cursor-pointer">
                              <div className="text-sm font-semibold text-white mb-1">For PE Platforms</div>
                              <div className="text-xs text-slate-500">Scale this system across multiple locations</div>
                            </div>
                          </Link>
                          <a 
                            href="https://calc.mbraceinsight.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-3 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors"
                          >
                            <div className="text-sm font-semibold text-white mb-1">Heat Pump Calculator</div>
                            <div className="text-xs text-slate-500">Check DMV heat pump incentives</div>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - H2 */}
        <section className="py-24 bg-[#0f1115] border-t border-slate-800">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Deploy These <span className="text-[#22c55e]">Systems</span>?
              </h2>
              <p className="text-xl text-slate-400">
                Get your free Market Intel Report to see where you stand in the DMV HVAC market, or request a portfolio review for multi-location platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/for-contractors">
                  <Button size="lg" className="h-14 px-8 text-lg bg-[#22c55e] hover:bg-[#22c55e]/90 text-black font-bold rounded-none">
                    For Contractors <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/for-platforms">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-none">
                    For PE Platforms <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

