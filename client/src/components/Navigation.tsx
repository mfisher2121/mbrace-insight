import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Systems", href: "#systems" },
    { name: "Market Intel", href: "#intel" },
    { name: "Tools", href: "#tools" },
    { name: "Playbooks", href: "#playbooks" },
    { name: "For PE", href: "/pe" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/90 backdrop-blur-md border-border py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-mono font-bold text-white text-lg rounded-sm group-hover:bg-white group-hover:text-primary transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-white tracking-tight leading-none group-hover:text-primary transition-colors">MBRACE</span>
              <span className="font-mono text-[10px] text-slate-400 tracking-widest leading-none">INSIGHT</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono text-slate-400 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 font-mono text-xs">
            LOGIN
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-mono text-xs rounded-sm">
            RUN AUDIT
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-border w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center font-mono font-bold text-white text-lg rounded-sm">
                    M
                  </div>
                  <span className="font-mono font-bold text-white tracking-tight">MBRACE INSIGHT</span>
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="flex items-center justify-between py-3 text-slate-300 hover:text-primary border-b border-slate-800 transition-colors font-mono text-sm uppercase"
                    >
                      {link.name}
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 mt-auto space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-mono rounded-sm">
                  RUN AUDIT
                </Button>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 font-mono rounded-sm">
                  CLIENT LOGIN
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
