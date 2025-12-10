import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckSquare, Zap, MessageSquare, Phone, Clock, ArrowDown } from "lucide-react";

export default function LeadAutomation() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0f1115] text-foreground font-sans selection:bg-primary selection:text-white grid-pattern p-8">
        
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <Badge variant="outline" className="border-blue-500 text-blue-500 font-mono text-[10px] uppercase rounded-sm px-2 py-1">SPEED-TO-LEAD</Badge>
          <Badge variant="outline" className="border-blue-500 text-blue-500 font-mono text-[10px] uppercase rounded-sm px-2 py-1">AI AGENTS</Badge>
          <Badge variant="outline" className="border-blue-500 text-blue-500 font-mono text-[10px] uppercase rounded-sm px-2 py-1">24/7 COVERAGE</Badge>
        </div>

        <h1 className="text-3xl font-bold text-white font-mono uppercase tracking-tight mb-2">
          Lead Automation
        </h1>
        <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12">
          Eliminate the "void" between lead submission and first contact. 24/7 VAPI + SMS response so no LSA lead waits more than 30 seconds.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (2/3) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* The Problem */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-l-2 border-blue-500 pl-3">
                <h2 className="text-sm font-bold text-blue-500 font-mono uppercase tracking-wider">The 5-Minute Cliff</h2>
              </div>
              
              <div className="bg-[#14171c] border border-slate-800 p-6 rounded-sm mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">The "Void" Kills ROI</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Leads contacted within 5 minutes are <span className="text-white font-bold">21x more likely</span> to qualify than those contacted after 30 minutes. After 5 minutes, the odds of qualifying a lead drop by 80%.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* The Workflow Visualization */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-l-2 border-blue-500 pl-3">
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">The 30-Second Workflow</h2>
              </div>

              <div className="relative space-y-4">
                {/* Step 1 */}
                <Card className="bg-[#14171c] border-slate-800 relative z-10">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-900/20 flex items-center justify-center border border-blue-500/30">
                      <Zap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">T+0 SECONDS</div>
                      <div className="text-white font-bold text-sm">Lead Enters System</div>
                      <div className="text-slate-400 text-xs">LSA, GMB, or Website Form submission triggers webhook.</div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center -my-2 relative z-0">
                  <ArrowDown className="h-6 w-6 text-slate-700" />
                </div>

                {/* Step 2 */}
                <Card className="bg-[#14171c] border-slate-800 relative z-10">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-900/20 flex items-center justify-center border border-purple-500/30">
                      <Phone className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">T+10 SECONDS</div>
                      <div className="text-white font-bold text-sm">AI Voice Agent Call</div>
                      <div className="text-slate-400 text-xs">VAPI agent calls lead immediately. "Hi, this is Sarah with Acme HVAC, I saw your request..."</div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center -my-2 relative z-0">
                  <ArrowDown className="h-6 w-6 text-slate-700" />
                </div>

                {/* Step 3 */}
                <Card className="bg-[#14171c] border-slate-800 relative z-10">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-900/20 flex items-center justify-center border border-green-500/30">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">T+30 SECONDS</div>
                      <div className="text-white font-bold text-sm">SMS Confirmation</div>
                      <div className="text-slate-400 text-xs">If no answer, immediate SMS: "Hey, just tried calling about your AC. Text me back here?"</div>
                    </div>
                  </CardContent>
                </Card>
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
                  { name: "VAPI.ai (Voice AI)", url: "#" },
                  { name: "Twilio (Telephony)", url: "#" },
                  { name: "GoHighLevel (Workflow Engine)", url: "#" },
                  { name: "Zapier (Webhooks)", url: "#" }
                ].map((tool, i) => (
                  <li key={i}>
                    <a href={tool.url} className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-blue-500 transition-colors group">
                      <CheckSquare className="h-4 w-4 text-blue-500" />
                      <span className="border-b border-transparent group-hover:border-blue-500">{tool.name}</span>
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
                  { name: "HBR: The Short Life of Leads", url: "#" },
                  { name: "LeadResponseManagement.org Study", url: "#" },
                  { name: "VAPI Documentation", url: "#" }
                ].map((source, i) => (
                  <li key={i}>
                    <a href={source.url} className="flex items-center gap-2 text-sm font-mono text-blue-500 hover:text-white transition-colors group">
                      <ExternalLink className="h-3 w-3" />
                      <span className="border-b border-blue-500/30 group-hover:border-white">{source.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Note */}
            <div className="mt-8 p-4 border border-blue-900/50 bg-blue-950/10 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-blue-500 font-mono text-xs font-bold uppercase">
                <Zap className="h-4 w-4" /> Pro Tip
              </div>
              <p className="text-xs font-mono text-blue-400/80 leading-relaxed">
                Don't automate the booking itself yet. Automate the *connection*. Get a human on the line as soon as the AI qualifies the intent.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
