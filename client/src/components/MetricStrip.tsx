import { motion } from "framer-motion";
import { Database, Zap, Home, TrendingUp } from "lucide-react";

export default function MetricStrip() {
  const metrics = [
    {
      label: "Avg SEER Upgrade Savings",
      value: "$480/yr",
      subtext: "Montgomery County Data",
      icon: <Zap className="h-4 w-4 text-yellow-400" />
    },
    {
      label: "Rebate Eligibility",
      value: "87%",
      subtext: "Pepco / BGE / SMECO",
      icon: <Home className="h-4 w-4 text-green-400" />
    },
    {
      label: "Prime Replacement Age",
      value: "12-15 yrs",
      subtext: "Median Home Age Data",
      icon: <TrendingUp className="h-4 w-4 text-primary" />
    }
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950/50 backdrop-blur-sm py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 border-r border-slate-800 pr-8 mr-4">
            <div className="p-2 bg-primary/10 rounded-full border border-primary/20">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">DMV Market Intel</h3>
              <p className="text-xs text-slate-500">Live Data Feed</p>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1">{metric.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">{metric.label}</div>
                  <div className="text-[10px] text-slate-600 font-mono mt-0.5">{metric.subtext}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden lg:block text-right text-[10px] text-slate-600 font-mono max-w-[150px]">
            SOURCES: DSIRE, CENSUS BUREAU, MLS DATA, LOCAL UTILITY API
          </div>
        </div>
      </div>
    </section>
  );
}
