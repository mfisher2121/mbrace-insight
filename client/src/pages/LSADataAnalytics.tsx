import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, DollarSign, Target, AlertCircle } from "lucide-react";

export default function LSADataAnalytics() {
  return (
    <div className="flex min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-[#ff4400] selection:text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3 text-[#ff4400] mb-2">
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Intelligence Module</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">LSA DATA & ANALYTICS</h1>
            <p className="text-slate-400 max-w-2xl">
              Local Services Ads (LSA) performance metrics, budget allocation strategies, and competitive impression share analysis for the DMV market.
            </p>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">AVG CPL</span>
                  <DollarSign className="h-4 w-4 text-[#ff4400]" />
                </div>
                <div className="text-3xl font-bold text-white">$45-65</div>
                <div className="text-xs text-green-500 mt-2 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>-12% vs Standard PPC</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">BOOKING RATE</span>
                  <Target className="h-4 w-4 text-[#ff4400]" />
                </div>
                <div className="text-3xl font-bold text-white">42%</div>
                <div className="text-xs text-slate-500 mt-2">Target: &gt;40%</div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">DISPUTE RATE</span>
                  <AlertCircle className="h-4 w-4 text-[#ff4400]" />
                </div>
                <div className="text-3xl font-bold text-white">15%</div>
                <div className="text-xs text-slate-500 mt-2">Max Allowable</div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">WEEKLY BUDGET</span>
                  <DollarSign className="h-4 w-4 text-[#ff4400]" />
                </div>
                <div className="text-3xl font-bold text-white">$2.5k</div>
                <div className="text-xs text-slate-500 mt-2">Recommended Min.</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Strategy */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#ff4400]"></div>
                    LSA RANKING FACTORS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm">
                      <h3 className="text-[#ff4400] font-bold mb-2 text-sm">1. RESPONSIVENESS (CRITICAL)</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Speed to answer is the #1 ranking factor. Missed calls directly impact impression share for 7-14 days.
                        <br/><br/>
                        <span className="text-white font-medium">Protocol:</span> All LSA calls must be answered within 3 rings or routed to a dedicated overflow team.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm">
                      <h3 className="text-[#ff4400] font-bold mb-2 text-sm">2. REVIEW VELOCITY</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Google prioritizes recent reviews over total volume. A steady stream of 3-5 new reviews weekly outperforms a stagnant profile with 500 reviews.
                      </p>
                    </div>

                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm">
                      <h3 className="text-[#ff4400] font-bold mb-2 text-sm">3. PROXIMITY & SERVICE AREA</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        LSA ads trigger based on the user's precise location. Verify your GMB service areas match your LSA profile settings exactly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#ff4400]"></div>
                    BUDGET OPTIMIZATION
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-400">
                      <thead className="text-xs text-slate-500 uppercase bg-black/40 border-b border-slate-800">
                        <tr>
                          <th className="px-6 py-3">Market Tier</th>
                          <th className="px-6 py-3">Weekly Budget</th>
                          <th className="px-6 py-3">Target CPL</th>
                          <th className="px-6 py-3">Exp. Leads</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-800 hover:bg-white/5">
                          <td className="px-6 py-4 font-medium text-white">Tier 1 (Aggressive)</td>
                          <td className="px-6 py-4">$5,000+</td>
                          <td className="px-6 py-4">$55</td>
                          <td className="px-6 py-4">90+</td>
                        </tr>
                        <tr className="border-b border-slate-800 hover:bg-white/5">
                          <td className="px-6 py-4 font-medium text-white">Tier 2 (Growth)</td>
                          <td className="px-6 py-4">$2,500</td>
                          <td className="px-6 py-4">$48</td>
                          <td className="px-6 py-4">52</td>
                        </tr>
                        <tr className="border-b border-slate-800 hover:bg-white/5">
                          <td className="px-6 py-4 font-medium text-white">Tier 3 (Maintenance)</td>
                          <td className="px-6 py-4">$1,000</td>
                          <td className="px-6 py-4">$45</td>
                          <td className="px-6 py-4">22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Tools & Actions */}
            <div className="space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    REQUIRED TOOLS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-800">
                    <a href="#" className="block p-4 hover:bg-white/5 transition-colors group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300 group-hover:text-[#ff4400]">Google LSA Dashboard</span>
                        <TrendingUp className="h-4 w-4 text-slate-600 group-hover:text-[#ff4400]" />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Direct management portal</p>
                    </a>
                    <a href="#" className="block p-4 hover:bg-white/5 transition-colors group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300 group-hover:text-[#ff4400]">ServiceTitan Integration</span>
                        <Target className="h-4 w-4 text-slate-600 group-hover:text-[#ff4400]" />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">ROI tracking & attribution</p>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    DISPUTE PROTOCOL
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="text-sm text-slate-400">
                    <p className="mb-3">Valid reasons for disputing LSA leads:</p>
                    <ul className="list-disc pl-4 space-y-2 marker:text-[#ff4400]">
                      <li>Job type not served</li>
                      <li>Location outside service area</li>
                      <li>Solicitation / Spam</li>
                      <li>Wrong number</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-[#ff4400]/10 border border-[#ff4400]/20 rounded-sm">
                    <p className="text-xs text-[#ff4400] font-medium">
                      ⚠️ Dispute within 30 days. Credits are applied to future spend.
                    </p>
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
