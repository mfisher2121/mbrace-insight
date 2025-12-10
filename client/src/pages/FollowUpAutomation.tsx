import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, CheckSquare, Mail, MessageSquare, Calendar, RefreshCw } from "lucide-react";

export default function FollowUpAutomation() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">EMAIL MARKETING</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">SMS</Badge>
          <Badge variant="outline" className="border-[#ff4400] text-[#ff4400] font-mono text-[10px] uppercase rounded-sm px-2 py-1">NURTURING</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          Follow-Up Automation
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Nurturing leads post-estimate to increase conversion rates and customer lifetime value.
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
                  <span className="text-white font-bold">70% of HVAC sales are lost</span> due to lack of follow-up.
                </p>
                <p>
                  The <span className="text-white font-bold">'Speed to Lead' Myth:</span> It's not just about the first call. It's about the 5th, 6th, and 7th touchpoint.
                </p>
                <p>
                  The <span className="text-white font-bold">'Open Estimate' Black Hole:</span> Thousands of dollars in open estimates sit in CRMs untouched.
                </p>
                <p>
                  <span className="text-white font-bold">Strategy:</span> Automate the "nudge" sequence to stay top-of-mind without manual effort.
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
                    <span className="bg-[#ff4400]/10 px-1 rounded">01</span> The 'Open Estimate' Sequence
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      <span className="text-white">Day 1:</span> 'Quote Ready' SMS. <span className="text-white">Day 3:</span> 'Did you have questions?' Email. <span className="text-white">Day 7:</span> 'Financing Options' Email. <span className="text-white">Day 14:</span> 'Schedule Check-in' SMS.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">02</span> Seasonal Re-Engagement
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      <span className="text-white">April:</span> 'AC Tune-up' blast to all past customers. <span className="text-white">October:</span> 'Furnace Safety Check' blast. Segment by equipment age.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">03</span> Post-Service Nurture
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      <span className="text-white">24 hours after job:</span> 'How did we do?' (Review Request). <span className="text-white">6 months later:</span> 'Filter Change Reminder'.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="text-[#ff4400] font-mono text-xs font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#ff4400]/10 px-1 rounded">04</span> Cross-Sell Automation
                  </div>
                  <div className="bg-[#14171c] border border-slate-800 p-4 rounded-sm">
                    <p className="font-mono text-sm text-slate-300">
                      If customer bought a new system, wait 30 days and send 'Join our Maintenance Club' offer for extended warranty.
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
                  { name: "Mailchimp / ActiveCampaign", url: "#" },
                  { name: "ServiceTitan Marketing Pro", url: "#" },
                  { name: "Twilio (SMS)", url: "#" },
                  { name: "Podium", url: "#" }
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
                  { name: "HVAC Email Marketing", url: "#" },
                  { name: "Follow-up Statistics", url: "#" }
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
