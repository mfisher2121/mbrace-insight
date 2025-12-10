import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, CheckSquare, MapPin, Globe, Code, Search } from "lucide-react";

export default function HyperLocalSEO() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">SEO</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">CONTENT STRATEGY</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">GEO-TARGETING</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          Hyper-Local SEO
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Dominating search results with 5000+ word geo-targeted page buildouts for DMV neighborhoods.
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
                  HVAC businesses are Service Area Businesses (SABs). To rank outside your physical office location, you need <span className="text-white font-bold">Service Area Pages (SAPs)</span>.
                </p>
                <p>
                  <span className="text-white font-bold">Strategy:</span> Build topical authority for specific counties (Fairfax, Montgomery) and high-value neighborhoods (Bethesda, McLean, Georgetown).
                </p>
                <p>
                  <span className="text-white font-bold">Content:</span> Must be unique (500+ words), mentioning local climate (humidity), housing stock (historic vs new), and local landmarks.
                </p>
                <p>
                  <span className="text-white font-bold">Technical:</span> Use 'HVACBusiness' Schema markup to signal local relevance to Google.
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
                    <span className="bg-[#ff4400]/10 px-1 rounded">01</span> Tiered SAP Structure
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      <span className="text-white">Tier 1:</span> County Pages (Fairfax County). <span className="text-white">Tier 2:</span> City/Neighborhood Pages (Reston, Tysons). <span className="text-white">URL structure:</span> /service-area/virginia/fairfax/reston.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">02</span> Hyper-Local Content Injection
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Mention specific local challenges: 'Historic row home cooling in Old Town Alexandria' or 'High-humidity solutions for Potomac riverfront homes'.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">03</span> Schema Markup Implementation
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Wrap every SAP in 'HVACBusiness' JSON-LD schema. Define 'areaServed' explicitly for each page's target location.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">04</span> Localized Trust Signals
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Embed a Google Map of the service area (not office address). Display reviews specifically from customers in that zip code.
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
                  { name: "BrightLocal (Rank Tracking)", url: "#" },
                  { name: "Local Falcon (Grid Tracking)", url: "#" },
                  { name: "Schema.org Generator", url: "#" },
                  { name: "Google Search Console", url: "#" }
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
                  { name: "Service Area Page SEO", url: "#" },
                  { name: "HVAC Schema Markup", url: "#" },
                  { name: "Northern VA County Data", url: "#" }
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
