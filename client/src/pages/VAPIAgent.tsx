import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic2, Phone, Bot, Activity, Settings, PlayCircle } from "lucide-react";

export default function VAPIAgent() {
  return (
    <div className="flex min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-[#ff4400] selection:text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3 text-[#ff4400] mb-2">
              <Mic2 className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Voice AI</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">VAPI AGENT</h1>
            <p className="text-slate-400 max-w-2xl">
              Voice AI agents for handling inbound calls, outbound confirmations, and after-hours dispatching.
            </p>
          </div>

          {/* Agent Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">ACTIVE CALLS</div>
                  <div className="text-3xl font-bold text-white">12</div>
                </div>
                <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse">
                  <Activity className="h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">AVG HANDLE TIME</div>
                  <div className="text-3xl font-bold text-white">2:14</div>
                </div>
                <div className="h-10 w-10 bg-[#ff4400]/10 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-[#ff4400]" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">BOOKING RATE</div>
                  <div className="text-3xl font-bold text-white">38%</div>
                </div>
                <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Agent Configuration */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#ff4400]"></div>
                    AGENT WORKFLOWS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm group hover:border-[#ff4400]/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-sm">INBOUND: AFTER HOURS</h3>
                        <span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded font-mono">ACTIVE</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        Handles emergency service requests between 8 PM - 7 AM. Qualifies emergency status, quotes dispatch fee, and books directly into ServiceTitan.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[#ff4400] font-medium">
                        <PlayCircle className="h-3 w-3" />
                        <span>Listen to Sample Call</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm group hover:border-[#ff4400]/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-sm">OUTBOUND: APPOINTMENT CONFIRMATION</h3>
                        <span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded font-mono">ACTIVE</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        Calls customers 24 hours before scheduled maintenance. Confirms availability, updates gate codes/access info, and offers filter upgrades.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[#ff4400] font-medium">
                        <PlayCircle className="h-3 w-3" />
                        <span>Listen to Sample Call</span>
                      </div>
                    </div>

                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm group hover:border-[#ff4400]/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-sm">OUTBOUND: REACTIVATION</h3>
                        <span className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-mono">PAUSED</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        Calls customers with equipment &gt;10 years old who haven't had service in 12+ months. Offers $49 tune-up special.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Settings className="h-3 w-3" />
                        <span>Configure Script</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Configuration */}
            <div className="space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    VOICE SETTINGS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="text-xs font-mono text-slate-500 block mb-2">VOICE MODEL</label>
                    <select className="w-full bg-black border border-slate-800 text-white text-sm p-2 rounded-sm focus:outline-none focus:border-[#ff4400]">
                      <option>Sarah (Professional, Warm)</option>
                      <option>Mike (Authoritative, Clear)</option>
                      <option>Emma (Friendly, Casual)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono text-slate-500 block mb-2">LATENCY OPTIMIZATION</label>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[90%]"></div>
                      </div>
                      <span className="text-xs text-white font-mono">~600ms</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-500 block mb-2">INTERRUPTION SENSITIVITY</label>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#ff4400] w-[40%]"></div>
                      </div>
                      <span className="text-xs text-white font-mono">Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    INTEGRATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-800">
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-sm text-slate-300">ServiceTitan</span>
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-sm text-slate-300">Twilio</span>
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-sm text-slate-300">OpenAI</span>
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
