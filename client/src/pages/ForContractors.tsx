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
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function ForContractors() {
  const problems = [
    {
      title: "After-Hours Emergencies Die in Voicemail",
      description: "27% of HVAC calls come after hours. While you sleep, competitors answer and close the deal.",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "40-70% of Quotes Ghost You",
      description: "Most quotes die because nobody follows up. That's $40k-$120k in lost revenue per year.",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Big Guys Dominate Map Pack",
      description: "Generic 'HVAC Bethesda' pages compete with 100+ contractors. You're invisible.",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  const solutions = [
    {
      title: "24/7 Lead Automation",
      description: "VAPI + SMS response so no LSA lead waits more than 30 seconds. After-hours emergencies don't die in voicemail.",
      metric: "<30s",
      metricLabel: "Response Time"
    },
    {
      title: "Quote Recovery System",
      description: "The 7-day automated sequence that quietly recovers 38% of 'think about it' leads without adding headcount.",
      metric: "38%",
      metricLabel: "Recovery Rate"
    },
    {
      title: "Hyper-Local SEO",
      description: "Neighborhood-specific pages compete with 2-3 contractors, not 100+. Your content ranks because it's actually useful.",
      metric: "2-3",
      metricLabel: "Competitors"
    }
  ];

  const results = [
    { metric: "+61%", label: "Close Rate", description: "Average across 7 companies using the Comfort Advisor Playbook" },
    { metric: "-42%", label: "Cost Per Lead", description: "After LSA bidding optimization + service routing" },
    { metric: "+$54k", label: "Monthly Recovered", description: "Lost quotes converted via 7-day nurture sequence" },
    { metric: "25→4", label: "Reviews/Month", description: "After implementing tech-specific QR + SMS flows" }
  ];

  return (
    <>
      <SEO
        title="For HVAC Contractors - MBRACE Insight | DMV HVAC Growth Systems"
        description="Built for independent HVAC contractors in the DMV: 1-5 trucks, $1-5M revenue. Stop losing after-hours emergencies. Recover lost quotes. Rank for neighborhood searches."
        keywords="HVAC contractors DMV, independent HVAC contractors, HVAC lead generation, HVAC quote recovery, after-hours HVAC leads, local HVAC SEO, HVAC marketing systems, Washington DC HVAC contractors, Maryland HVAC contractors"
        canonical="https://mbraceinsight.com/for-contractors"
      />
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans">
      {/* Hero Section - H1 */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-slate-800">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-[#22c55e]/30 text-[#22c55e] font-mono text-xs mb-4">
              FOR INDEPENDENT CONTRACTORS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Stop Losing Revenue While You <span className="text-[#22c55e]">Sleep</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Built for independent HVAC contractors in the DMV: 1-5 trucks, $1-5M revenue, fighting back against roll-ups. Systems that work without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#22c55e] hover:bg-[#22c55e]/90 text-black font-bold rounded-none">
                Run Free Market Intel Report <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-none">
                See the 5-System Playbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="text-[#22c55e]">$100k+</span> You're Losing Every Year
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Independent HVAC contractors in Washington DC, Maryland, and Northern Virginia face these three revenue leaks daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#14171c] border-slate-800 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-[#ff4400]">{problem.icon}</div>
                    <h3 className="text-xl font-bold text-white">
                      {problem.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Systems That <span className="text-[#22c55e]">Recover Revenue</span> Automatically
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Field-tested systems deployed with real HVAC contractors in the DMV. No theory. No templates. Just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#14171c] border-slate-800 hover:border-[#22c55e]/50 transition-all h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-3xl font-bold text-[#22c55e] font-mono">
                        {solution.metric}
                      </div>
                      <Badge variant="outline" className="border-[#22c55e]/30 text-[#22c55e] font-mono text-xs">
                        {solution.metricLabel}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real results from independent HVAC contractors using these systems in the DMV market.
            </p>
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

      {/* CTA Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              See Your Position in the <span className="text-[#22c55e]">DMV Market</span>
            </h2>
            <p className="text-xl text-slate-400">
              Get your free Market Intel Report: LSA visibility, GBP score, review velocity, and competitor positioning across Washington DC, Maryland, and Northern Virginia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#22c55e] hover:bg-[#22c55e]/90 text-black font-bold rounded-none">
                Generate My Free Report <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-slate-600 font-mono">
              No spam. No shared leads. Just your data-backed position in the DMV HVAC market.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources - Entity Clustering */}
      <section className="py-24 bg-[#0f1115]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related <span className="text-[#22c55e]">Resources</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-[#14171c] border-slate-800 hover:border-[#22c55e]/50 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Heat Pump Incentive Calculator
                </h3>
                <p className="text-slate-400 mb-4">
                  Check Maryland heat pump rebates and incentives. Get eligibility summary by email.
                </p>
                <a 
                  href="https://calc.mbraceinsight.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#22c55e] font-mono text-sm font-medium hover:underline"
                >
                  Try Calculator <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="bg-[#14171c] border-slate-800 hover:border-[#22c55e]/50 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  DMV Heat Pumps Education
                </h3>
                <p className="text-slate-400 mb-4">
                  Heat pump installation guides, rebates, and training resources for homeowners and contractors.
                </p>
                <a 
                  href="https://dmvheatpumps.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#22c55e] font-mono text-sm font-medium hover:underline"
                >
                  Visit Resource <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

