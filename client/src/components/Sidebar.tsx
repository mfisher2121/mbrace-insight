import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Bot, 
  Mic2, 
  MessageSquare, 
  MapPin, 
  Globe, 
  Star, 
  MessageCircle, 
  Phone, 
  PieChart, 
  HardDrive 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { name: "DASHBOARD", icon: LayoutDashboard, href: "/" },
    { name: "MARKET INTEL REPORT", icon: FileText, href: "/report" },
    { name: "LSA DATA & ANALYTICS", icon: BarChart3, href: "/lsa" },
    { name: "BIDDING STRATEGY", icon: TrendingUp, href: "/bidding" },
    { name: "RAG SYSTEM", icon: Database, href: "/rag" },
    { name: "LEAD AUTOMATION", icon: Bot, href: "/lead-automation" },
    { name: "VAPI AGENT", icon: Mic2, href: "/vapi" },
    { name: "FOLLOW-UP AUTOMATION", icon: MessageSquare, href: "/follow-up" },
    { name: "HYPER-LOCAL SEO", icon: MapPin, href: "/hyper-local-seo" },
    { name: "GMP OPTIMIZATION", icon: Globe, href: "/gmp-optimization" },
    { name: "REVIEW SYSTEMS", icon: Star, href: "/review-generation" },
    { name: "REVIEW STRATEGY", icon: MessageCircle, href: "/review-recency" },
    { name: "LEAD SOURCES", icon: Phone, href: "/sources" },
    { name: "MARKET INTEL", icon: PieChart, href: "/market-intelligence" },
    { name: "FILE STORAGE", icon: HardDrive, href: "/files" },
  ];

  return (
    <aside className="w-64 bg-[#0f1115] border-r border-slate-800 flex-shrink-0 h-screen sticky top-0 overflow-y-auto font-mono">
      <div className="p-6 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#ff4400] flex items-center justify-center text-white font-bold rounded-sm shrink-0">
            M
          </div>
          <div className="leading-tight">
            <h1 className="text-white font-bold text-sm tracking-wider">HVAC.STRAT</h1>
            <div className="text-[#ff4400] font-bold text-xs tracking-wide mt-0.5">DMV MARKET GUIDE</div>
            <div className="text-[#ff4400] text-[10px] mt-0.5">v1.0</div>
          </div>
        </div>
      </div>

      <nav className="px-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div 
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-[11px] font-medium tracking-wide transition-colors cursor-pointer rounded-sm",
                  isActive 
                    ? "bg-[#ff4400]/10 text-[#ff4400]" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-[#ff4400]" : "text-slate-500")} />
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 px-6 pb-6">
        <div className="text-[10px] text-slate-600 border-t border-slate-800 pt-4">
          SYSTEM STATUS: <span className="text-green-500">ONLINE</span>
        </div>
      </div>
    </aside>
  );
}
