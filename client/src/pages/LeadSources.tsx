import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, Mail, MessageSquare, Users, Search, ArrowUpRight, Filter } from "lucide-react";

export default function LeadSources() {
  return (
    <div className="flex min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-[#ff4400] selection:text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3 text-[#ff4400] mb-2">
              <Filter className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Attribution Model</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">LEAD SOURCES</h1>
            <p className="text-slate-400 max-w-2xl">
              Comprehensive tracking of all inbound lead channels, cost-per-lead analysis, and conversion rate optimization by source.
            </p>
          </div>

          {/* Source Performance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Organic Search */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <Search className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+12%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">ORGANIC SEARCH</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$0.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">42%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LSA */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <Globe className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-red-500 text-xs font-bold">
                    <ArrowUpRight className="h-3 w-3 rotate-90" />
                    <span>-5%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">GOOGLE LSA</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$45.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">38%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PPC */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <Globe className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+8%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">GOOGLE PPC</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$85.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">22%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Marketing */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <Mail className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+15%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">EMAIL CAMPAIGNS</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$2.50</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">18%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referrals */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <Users className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-bold">
                    <span>0%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">REFERRALS</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$50.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">65%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Mail */}
            <Card className="bg-[#161920] border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-black border border-slate-800 rounded-sm group-hover:border-[#ff4400] transition-colors">
                    <MessageSquare className="h-5 w-5 text-slate-400 group-hover:text-[#ff4400]" />
                  </div>
                  <div className="flex items-center gap-1 text-red-500 text-xs font-bold">
                    <ArrowUpRight className="h-3 w-3 rotate-90" />
                    <span>-2%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">DIRECT MAIL</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CPL</div>
                    <div className="text-xl font-mono text-white">$120.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Conv. Rate</div>
                    <div className="text-xl font-mono text-[#ff4400]">12%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analysis Table */}
          <Card className="bg-[#161920] border-slate-800 rounded-sm">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <div className="w-1 h-5 bg-[#ff4400]"></div>
                CHANNEL PERFORMANCE BREAKDOWN
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                  <thead className="text-xs text-slate-500 uppercase bg-black/40 border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-3">Channel</th>
                      <th className="px-6 py-3">Leads (MTD)</th>
                      <th className="px-6 py-3">Revenue</th>
                      <th className="px-6 py-3">ROI</th>
                      <th className="px-6 py-3">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">Organic Search</td>
                      <td className="px-6 py-4">145</td>
                      <td className="px-6 py-4">$124,500</td>
                      <td className="px-6 py-4 text-green-500">∞</td>
                      <td className="px-6 py-4">
                        <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[80%]"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">Google LSA</td>
                      <td className="px-6 py-4">82</td>
                      <td className="px-6 py-4">$68,200</td>
                      <td className="px-6 py-4 text-green-500">8.5x</td>
                      <td className="px-6 py-4">
                        <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[65%]"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">Google PPC</td>
                      <td className="px-6 py-4">56</td>
                      <td className="px-6 py-4">$42,100</td>
                      <td className="px-6 py-4 text-yellow-500">4.2x</td>
                      <td className="px-6 py-4">
                        <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 w-[45%]"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">Email Marketing</td>
                      <td className="px-6 py-4">34</td>
                      <td className="px-6 py-4">$18,500</td>
                      <td className="px-6 py-4 text-green-500">12.4x</td>
                      <td className="px-6 py-4">
                        <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[90%]"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
