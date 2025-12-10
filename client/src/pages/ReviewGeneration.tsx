import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, CheckSquare, QrCode, MessageSquare, Star, DollarSign } from "lucide-react";

export default function ReviewGeneration() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">REVIEWS</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">REPUTATION MANAGEMENT</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">AUTOMATION</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          Review Generation Systems
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Automating the collection of 5-star reviews to build trust and improve LSA rankings.
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
                  Reviews are the currency of trust.
                </p>
                <p>
                  <span className="text-white font-bold">The Friction Problem:</span> Customers are happy but lazy. If it takes &gt;30 seconds, they won't review.
                </p>
                <p>
                  <span className="text-white font-bold">The Solution:</span> Frictionless, instant review requests via QR codes and SMS.
                </p>
                <p>
                  <span className="text-white font-bold">Platform Focus:</span> Google is King. Yelp is secondary (and often filters legitimate reviews).
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
                    <span className="bg-[#ff4400]/10 px-1 rounded">01</span> Tech-Enabled QR Codes
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Print unique QR codes for each technician on business cards/lanyards. 'Scan to review [Tech Name]'.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">02</span> The 'Parking Lot' Text
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Tech sends a templated SMS *before* leaving the driveway: 'Thanks for choosing us! A quick review helps me feed my family: [Link]'.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">03</span> Review Gating (Soft)
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Ask 'Rate your experience 1-5'. If 5 → Redirect to Google. If &lt;4 → Redirect to internal feedback form to catch complaints early.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">04</span> Incentivize Technicians
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Pay techs $20 per 5-star review that mentions their name. It's the cheapest marketing you'll ever buy.
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
                  { name: "Podium", url: "#" },
                  { name: "NiceJob", url: "#" },
                  { name: "Birdeye", url: "#" },
                  { name: "Flowcode (QR Generation)", url: "#" }
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
                  { name: "Review Generation Strategy", url: "#" },
                  { name: "Google Review Guidelines", url: "#" }
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
