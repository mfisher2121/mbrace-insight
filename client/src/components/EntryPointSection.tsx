import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Box, Scan } from "lucide-react";

export default function EntryPointSection() {
  return (
    <section className="py-24 bg-[#0f1115] text-white border-t border-slate-800">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <div className="text-[#ff4400] font-mono text-xs uppercase tracking-widest font-bold">
            READY TO SEE WHERE YOU STAND?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
            Choose Your Entry Point
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Free Market Intel Report (Green) */}
          <div className="relative rounded-2xl border border-green-500/30 bg-[#0f1115] p-1 overflow-hidden group hover:border-green-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
            <div className="bg-[#14171c] rounded-xl p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
              
              <div className="text-center mb-8 space-y-3">
                <h3 className="text-xl font-bold text-white font-mono">Free Market Intel Report</h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed max-w-sm mx-auto">
                  See your LSA visibility, GBP score, review velocity, and competitor positioning across the DMV. No obligation.
                </p>
              </div>

              <form className="space-y-4 mt-auto">
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs font-mono text-slate-500 uppercase">Company Name</Label>
                  <Input id="company" placeholder="Acme HVAC" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 focus:border-green-500 focus:ring-green-500/20" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="website" className="text-xs font-mono text-slate-500 uppercase">Website</Label>
                  <Input id="website" placeholder="https://acmehvac.com" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 focus:border-green-500 focus:ring-green-500/20" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="zip" className="text-xs font-mono text-slate-500 uppercase">Primary ZIP Code</Label>
                  <Input id="zip" placeholder="20814" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 focus:border-green-500 focus:ring-green-500/20" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-mono text-slate-500 uppercase">Work Email</Label>
                  <div className="relative">
                    <Input id="email" placeholder="john@acmehvac.com" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 pr-10 focus:border-green-500 focus:ring-green-500/20" />
                    <Scan className="absolute right-3 top-2.5 h-5 w-5 text-slate-600" />
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold font-mono h-11 mt-2">
                  Generate My Report
                </Button>
                
                <p className="text-[10px] text-slate-600 text-center font-mono pt-2">
                  No spam. No shared leads. Just your data-backed position in the DMV market.
                </p>
              </form>
            </div>
          </div>

          {/* Right Card: Portfolio Review (Orange) */}
          <div className="relative rounded-2xl border border-[#ff4400]/30 bg-[#0f1115] p-1 overflow-hidden group hover:border-[#ff4400]/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4400] to-orange-400"></div>
            <div className="bg-[#14171c] rounded-xl p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ff4400]/10 flex items-center justify-center text-[#ff4400] border border-[#ff4400]/20">
                  <Box className="h-6 w-6" />
                </div>
              </div>
              
              <div className="text-center mb-8 space-y-3">
                <h3 className="text-xl font-bold text-white font-mono">Portfolio Review (PE Only)</h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed max-w-sm mx-auto">
                  Multi-location platforms get a deeper analysis: brand-by-brand visibility, portfolio-level leakage, and EBITDA expansion map.
                </p>
              </div>

              <form className="space-y-4 mt-auto">
                <div className="space-y-1.5">
                  <Label htmlFor="platform" className="text-xs font-mono text-slate-500 uppercase">Platform / Firm Name</Label>
                  <Input id="platform" placeholder="Horizon HVAC Holdings" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 focus:border-[#ff4400] focus:ring-[#ff4400]/20" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="locations" className="text-xs font-mono text-slate-500 uppercase">Number of Locations</Label>
                  <Input id="locations" placeholder="12" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 focus:border-[#ff4400] focus:ring-[#ff4400]/20" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="pe-email" className="text-xs font-mono text-slate-500 uppercase">Work Email</Label>
                  <div className="relative">
                    <Input id="pe-email" placeholder="ops@horizonhvac.com" className="bg-[#0f1115] border-slate-700 text-white font-mono h-10 pr-10 focus:border-[#ff4400] focus:ring-[#ff4400]/20" />
                    <Scan className="absolute right-3 top-2.5 h-5 w-5 text-slate-600" />
                  </div>
                </div>

                <Button className="w-full bg-[#ff4400] hover:bg-[#ff4400]/90 text-white font-bold font-mono h-11 mt-2">
                  Request Portfolio Review
                </Button>
                
                <p className="text-[10px] text-slate-600 text-center font-mono pt-2">
                  We only work with platforms serious about systems-driven growth. Expect a response within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
