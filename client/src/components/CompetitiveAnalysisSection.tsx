import { CheckCircle2 } from "lucide-react";

export default function CompetitiveAnalysisSection() {
  return (
    <section className="py-24 bg-[#0f1115] text-white border-t border-slate-800">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono uppercase text-white">
            The DMV is one of the most competitive HVAC markets in the country
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: The Problem */}
          <div className="space-y-6 p-8 rounded-xl border border-slate-800/50 bg-slate-900/20">
            <h3 className="text-lg font-mono font-bold text-slate-300">
              PE-backed brands and high-budget operators are flooding the DMV with:
            </h3>
            <ul className="space-y-3 font-mono text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-red-500">•</span> Furnace replacement campaigns
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">•</span> Heat pump installation offers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">•</span> 24/7 emergency AC repair
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">•</span> Ductless mini split pushes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">•</span> Indoor air quality systems and upsells
              </li>
            </ul>
          </div>

          {/* Right Column: The Solution */}
          <div className="relative p-8 rounded-xl border border-slate-700 bg-slate-800/50 shadow-2xl">
            <div className="space-y-4 mb-8">
              <p className="font-mono text-sm leading-relaxed">
                <span className="text-slate-300">They're not winning because they're better at the trade.</span><br/>
                <span className="text-[#ff4400] font-bold">They're winning because they've built systems:</span>
              </p>
            </div>

            <ul className="space-y-4 font-mono text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Faster, structured follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Smarter lead qualification</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Review velocity that never stalls</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Service-area targeting down to the ZIP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-slate-400 leading-relaxed">
            If your HVAC company isn't growing as fast as it should, it's usually not your pricing, your team, or your ads. <br/>
            <span className="text-white font-bold border-b border-slate-600 pb-0.5">You're just under-equipped.</span>
          </p>
          <p className="font-mono text-xs text-[#ff4400] mt-4 uppercase tracking-wide">
            This report shows exactly where you're behind — and how to close the gap before the next season hits.
          </p>
        </div>
      </div>
    </section>
  );
}
