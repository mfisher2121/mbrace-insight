import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, CheckSquare, MapPin, Image, MessageSquare, Search } from "lucide-react";

export default function GMPOptimization() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">LOCAL SEO</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">GOOGLE MAPS</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">REPUTATION</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          Google Business Profile (GMP) Optimization
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Maximizing visibility in the Local Map Pack through profile activity and optimization.
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
                  Your <span className="text-white font-bold">Google Business Profile (formerly GMB)</span> is your most valuable digital asset.
                </p>
                
                <div className="space-y-2">
                  <div className="text-white font-bold">Ranking Factors:</div>
                  <ol className="space-y-1 pl-4 list-decimal list-inside">
                    <li><span className="text-white">Relevance:</span> Category match (HVAC Contractor) + Keywords.</li>
                    <li><span className="text-white">Distance:</span> Proximity to searcher (Service Area definition).</li>
                    <li><span className="text-white">Prominence:</span> Reviews, Photos, and Activity.</li>
                  </ol>
                </div>

                <p>
                  The <span className="text-white font-bold">'Activity' Signal:</span> Google rewards profiles that are alive. Stale profiles drop in rankings.
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
                    <span className="bg-[#ff4400]/10 px-1 rounded">01</span> Weekly Google Posts
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Treat GMP like social media. Post weekly: 'Summer AC Tips', 'New Truck Fleet', 'Employee Spotlight'. Include a 'Call Now' button.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">02</span> Photo Geotagging
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Upload photos of completed jobs. Ensure metadata includes GPS coordinates of the job site (e.g., Bethesda, MD) to prove local service.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">03</span> Q&A Seeding
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Don't wait for questions. Post your own FAQs: 'Do you offer emergency service in DC?' and answer them with keywords.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">04</span> Service Area Refinement
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      Explicitly list every city and county you serve in the backend. Don't just say 'DMV' - list 'Arlington', 'Alexandria', 'Fairfax', etc.
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
                  { name: "Google Business Profile Manager", url: "#" },
                  { name: "GeoImgr (Photo Geotagging)", url: "#" },
                  { name: "Canva (Post Design)", url: "#" },
                  { name: "BrightLocal", url: "#" }
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
                  { name: "Google Business Profile Guide", url: "#" },
                  { name: "Local Ranking Factors", url: "#" }
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
