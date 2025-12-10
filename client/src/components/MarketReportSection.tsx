import { Card, CardContent } from "@/components/ui/card";
import { Target, Map, Eye, Search, Star, Zap } from "lucide-react";

export default function MarketReportSection() {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-[#ff4400]" />,
      title: "LOCAL SERVICES ADS SNAPSHOT",
      description: "Are you eligible for high-intent placement? What's holding back visibility? How do you compare to the top 5 HVAC competitors in your radius?"
    },
    {
      icon: <Map className="h-6 w-6 text-[#ff4400]" />,
      title: "SERVICE AREA COVERAGE MAP",
      description: "Which ZIP codes you dominate, which ones competitors own, and where high-value search demand is clustering across Montgomery County, DC, and Northern Virginia."
    },
    {
      icon: <Eye className="h-6 w-6 text-[#ff4400]" />,
      title: "GOOGLE BUSINESS PROFILE VISIBILITY SCORE (0-100)",
      description: "Category accuracy, review velocity, photo freshness, and profile completeness rolled into one number you can actually act on."
    },
    {
      icon: <Search className="h-6 w-6 text-[#ff4400]" />,
      title: "ORGANIC VISIBILITY SCORE (0-100)",
      description: "Your keyword footprint, topical authority, depth of service pages, and city page coverage — translated into a simple score."
    },
    {
      icon: <Star className="h-6 w-6 text-[#ff4400]" />,
      title: "REVIEW VELOCITY & SENTIMENT ANALYSIS",
      description: "How many reviews you've earned in the last 90 days — and how that compares to brands like GAC, FH Furr, Michael & Son, and other top DMV players."
    },
    {
      icon: <Zap className="h-6 w-6 text-[#ff4400]" />,
      title: "YOUR TOP 5 QUICK WINS (NEXT 14-30 DAYS)",
      description: "Clear, prioritized actions that increase calls and booked jobs — without increasing your ad spend."
    }
  ];

  return (
    <section className="py-20 bg-[#e2e8f0] text-slate-900">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-mono uppercase">
            What Your DMV HVAC Market Intelligence Report Includes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-mono">
            Everything you need to understand your position and identify quick wins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-sm font-mono uppercase tracking-wide text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-mono">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
