import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, CheckSquare, BarChart2, Map, DollarSign, TrendingUp } from "lucide-react";

export default function DMVMarketIntelligence() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">MARKET ANALYSIS</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">COMPETITORS</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">PRICING</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          DMV Market Intelligence
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Competitive landscape, seasonal patterns, and pricing dynamics in DC, Maryland, and Virginia.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (2/3) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intelligence Brief */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-l-2 border-[#ff4400] pl-3">
                <h2 className="text-sm font-bold text-[#ff4400] font-mono uppercase tracking-wider">Intelligence Brief</h2>
              </div>
              
              <div className="space-y-6 font-mono text-sm text-slate-300 leading-relaxed">
                <p>
                  The <span className="text-white font-bold">DMV is a unique tri-state market</span> with distinct sub-markets.
                </p>
                <p>
                  <span className="text-white font-bold">DC:</span> High-density, historic homes (radiators, high-velocity AC). High income, high expectation of white-glove service.
                </p>
                <p>
                  <span className="text-white font-bold">NoVA (Fairfax/Loudoun):</span> Affluent suburbs, larger homes, high demand for IAQ and high-efficiency systems.
                </p>
                <p>
                  <span className="text-white font-bold">MD (Montgomery/PG):</span> Mix of urban/suburban. Strong demand for heat pumps due to incentives.
                </p>
                <p>
                  <span className="text-white font-bold">Competition:</span> Saturated with large PE-backed aggregators (F.H. Furr, Michael & Son). You must compete on <span className="text-white font-bold">*niche expertise*</span> and <span className="text-white font-bold">*personal touch*</span>, not just price.
                </p>
              </div>
            </section>

            {/* Tactical Implementation */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-l-2 border-[#ff4400] pl-3">
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Tactical Implementation</h2>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">01</span> Niche Specialization
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Don't just be 'HVAC'. Be 'The Historic Home Expert' in DC or 'The Heat Pump Pro' in Maryland.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">02</span> Pricing Power
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      In affluent areas (Great Falls, Potomac), price is less sensitive than <span className="text-white">*speed*</span> and <span className="text-white">*trust*</span>. Charge a premium for same-day guarantees.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">03</span> Incentive Leveraging
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Master the local rebates (Dominion Energy, Pepco, Montgomery County Energy Tax). Promoting these makes you a consultant, not just a mechanic.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">04</span> Weather-Triggered Marketing
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      The DMV has humid summers. Run 'Dehumidification' campaigns in July. Run 'Heat Pump' campaigns in shoulder seasons.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column (1/3) */}
          <div className="space-y-8">
            
            {/* Required Tools */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-500 font-mono uppercase tracking-widest">REQUIRED TOOLS</h3>
              <ul className="space-y-3">
                {[
                  { name: "Google Trends (Local)", url: "#" },
                  { name: "Census Bureau Data (Income)", url: "#" },
                  { name: "DSIRE (Rebate Database)", url: "#" }
                ].map((tool, i) => (
                  <li key={i}>
                    <a href={tool.url} className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-[#ff4400] transition-colors group">
                      <CheckSquare className="h-4 w-4 text-[#ff4400]" />
                      <span className="border-b border-transparent group-hover:border-[#ff4400]">{tool.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Sources */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-500 font-mono uppercase tracking-widest">DATA SOURCES</h3>
              <ul className="space-y-3">
                {[
                  { name: "DMV Housing Data", url: "#" },
                  { name: "Local Energy Rebates", url: "#" }
                ].map((source, i) => (
                  <li key={i}>
                    <a href={source.url} className="flex items-center gap-2 text-sm font-mono text-[#ff4400] hover:text-white transition-colors group">
                      <ExternalLink className="h-3 w-3" />
                      <span className="border-b border-[#ff4400]/30 group-hover:border-white">{source.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Critical Advisory */}
            <div className="mt-8 p-4 border border-red-900/50 bg-red-950/10 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-red-500 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="h-4 w-4" /> Critical Advisory
              </div>
              <p className="text-xs font-mono text-red-400/80 leading-relaxed">
                Always verify local regulations in DC, MD, and VA as they can vary significantly for HVAC compliance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
