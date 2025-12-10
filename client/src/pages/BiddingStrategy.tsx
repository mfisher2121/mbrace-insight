import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, AlertTriangle, CheckSquare } from "lucide-react";

export default function BiddingStrategy() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">BIDDING</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">BUDGETING</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">SEASONALITY</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          LSA Bidding Strategy
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Optimizing bid settings and budget allocation for the high-cost, high-competition DMV HVAC market.
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
                  In the DMV, default "Maximize Leads" is insufficient. You must use <span className="text-white font-bold">Max Per Lead bidding</span> based on profitability.
                </p>
                <p>
                  <span className="text-white font-bold">CPL Reality:</span> $85-$100 average, up to $400 for high-intent leads.
                </p>
                
                <div className="space-y-2">
                  <div className="text-white font-bold">Prioritization:</div>
                  <ul className="space-y-1 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ff4400] rounded-sm"></span>
                      <span><span className="text-white">High Bid:</span> Installation/Replacement & Emergency Repair.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ff4400] rounded-sm"></span>
                      <span><span className="text-white">Low Bid:</span> Maintenance (Low immediate ROI).</span>
                    </li>
                  </ul>
                </div>

                <p>
                  <span className="text-white font-bold">Seasonality:</span> Two major peaks (Summer AC, Winter Heat). Budgets must double during transition months (May/June, Oct/Nov).
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
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2">01 Max Per Lead Formula</div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Calculate: <span className="text-white">Max Bid = (Avg Job Value * Close Rate * Profit Margin)</span>. Set this as your hard cap to ensure profitability.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2">02 Service Category Segmentation</div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Aggressively bid on 'Installation' and 'Emergency'. Lower bids for 'Maintenance' or move those to email marketing/SEO.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2">03 Dynamic Seasonal Budgeting</div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Increase daily budget by 50-100% during peak transition months. Scale back during shoulder seasons (Spring/Fall).
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2">04 Non-Bidding Optimization</div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Ranking is holistic. Speed to Lead (&lt;5 mins) and Review Velocity (4.8+ rating) can outweigh higher bids from competitors.
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
                  { name: "LSA Dashboard (Manual Bidding)", url: "#" },
                  { name: "Google Keyword Planner", url: "#" },
                  { name: "Call Tracking Metrics", url: "#" },
                  { name: "CRM (for Close Rate data)", url: "#" }
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
                  { name: "HVAC Google Ads Guide", url: "#" },
                  { name: "Mastering LSA Bidding", url: "#" },
                  { name: "HVAC Marketing Costs", url: "#" }
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
