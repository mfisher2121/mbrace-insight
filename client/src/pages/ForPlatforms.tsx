import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Database
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function ForPlatforms() {
  const challenges = [
    {
      title: "Inconsistent Processes Across Brands",
      description: "Each location runs different systems. No standardization means no operating leverage.",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      title: "Quote Nurture Leakage",
      description: "40-70% of quotes die without follow-up. Multiply that across 12 locations = massive revenue loss.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Fragmented LSA/GBP Strategy",
      description: "Each brand competes independently. No unified approach to local search dominance.",
      icon: <BarChart3 className="h-5 w-5" />
    }
  ];

  const solutions = [
    {
      title: "Standardize Comfort Advisor Process",
      description: "Install the same proven playbook across all brands. Consistent close rates, predictable revenue.",
      metric: "+61%",
      metricLabel: "Close Rate"
    },
    {
      title: "Portfolio-Wide Quote Nurture",
      description: "Automated 7-day sequences at every location. Recover lost quotes without adding headcount.",
      metric: "+$54k",
      metricLabel: "Monthly Per Location"
    },
    {
      title: "Unified LSA/GBP Strategy",
      description: "Coordinate bidding and optimization across the portfolio. Maximize visibility, minimize waste.",
      metric: "-42%",
      metricLabel: "Cost Per Lead"
    }
  ];

  const features = [
    {
      title: "Multi-Location Dashboard",
      description: "See performance across all brands in one intelligence layer."
    },
    {
      title: "Bulk Implementation",
      description: "Deploy systems to all locations simultaneously. Standardize in weeks, not months."
    },
    {
      title: "Portfolio-Level Analytics",
      description: "Track EBITDA expansion, market share, and competitive positioning across the DMV."
    }
  ];

  return (
    <>
      <SEO
        title="For PE Platforms - MBRACE Insight | Multi-Location HVAC Operating Leverage"
        description="Built for PE-backed HVAC platforms with 3-20 locations in the DMV. Standardize systems, unify strategy, scale EBITDA across the portfolio."
        keywords="HVAC private equity, multi-location HVAC platforms, HVAC operating leverage, HVAC portfolio management, HVAC platform growth, PE-backed HVAC, HVAC standardization, HVAC EBITDA expansion"
        canonical="https://mbraceinsight.com/for-platforms"
      />
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans">
      {/* Hero Section - H1 */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-slate-800">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-[#ff4400]/30 text-[#ff4400] font-mono text-xs mb-4">
              FOR PRIVATE EQUITY & PLATFORMS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Operating Leverage for <span className="text-[#ff4400]">Multi-Location HVAC Platforms</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Built for PE-backed HVAC platforms with 3-20 locations in the DMV. Standardize systems, unify strategy, scale EBITDA across the portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#ff4400] hover:bg-[#ff4400]/90 text-white font-bold rounded-none">
                Request Portfolio Review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-none">
                See the 5-System Playbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="text-[#ff4400]">Operating Leverage</span> Problem
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Multi-location HVAC platforms in Washington DC, Maryland, and Northern Virginia face these three scaling challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#14171c] border-slate-800 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-[#ff4400]">{challenge.icon}</div>
                    <h3 className="text-xl font-bold text-white">
                      {challenge.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {challenge.description}
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
              Systems That <span className="text-[#ff4400]">Scale Across Locations</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Field-tested systems deployed with real HVAC platforms in the DMV. Same infrastructure, different levers.
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
                <Card className="bg-[#14171c] border-slate-800 hover:border-[#ff4400]/50 transition-all h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-3xl font-bold text-[#ff4400] font-mono">
                        {solution.metric}
                      </div>
                      <Badge variant="outline" className="border-[#ff4400]/30 text-[#ff4400] font-mono text-xs">
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

      {/* Features Section - H2 */}
      <section className="py-24 bg-[#0f1115] border-b border-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform-Specific <span className="text-[#ff4400]">Features</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built for multi-location HVAC platforms seeking operating leverage in the DMV market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#14171c] border-slate-800 h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-[#ff4400]" />
                      <h3 className="text-lg font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
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
              Get Your <span className="text-[#ff4400]">Portfolio Review</span>
            </h2>
            <p className="text-xl text-slate-400">
              Multi-location platforms get a deeper analysis: brand-by-brand visibility, portfolio-level leakage, and EBITDA expansion map across the DMV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#ff4400] hover:bg-[#ff4400]/90 text-white font-bold rounded-none">
                Request Portfolio Review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-slate-600 font-mono">
              We only work with platforms serious about systems-driven growth. Expect a response within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources - Entity Clustering */}
      <section className="py-24 bg-[#0f1115]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related <span className="text-[#ff4400]">Resources</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-[#14171c] border-slate-800 hover:border-[#ff4400]/50 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Heat Pump Incentive Calculator
                </h3>
                <p className="text-slate-400 mb-4">
                  Check Maryland heat pump rebates and incentives. Useful for portfolio-wide electrification planning.
                </p>
                <a 
                  href="https://calc.mbraceinsight.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff4400] font-mono text-sm font-medium hover:underline"
                >
                  Try Calculator <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="bg-[#14171c] border-slate-800 hover:border-[#ff4400]/50 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  DMV Heat Pumps Education
                </h3>
                <p className="text-slate-400 mb-4">
                  Heat pump installation guides, rebates, and training resources for contractor network development.
                </p>
                <a 
                  href="https://dmvheatpumps.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff4400] font-mono text-sm font-medium hover:underline"
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

