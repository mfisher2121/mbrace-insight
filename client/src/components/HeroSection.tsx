import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-border bg-background">
      {/* Background Grid & Overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none"></div>
      
      {/* Hero Content */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-primary tracking-widest">SYSTEM ONLINE // V.2.4.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            The Operating System for <span className="text-primary">HVAC Growth</span> in the DMV.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
            Turn your ad spend, reviews, and field ops into a predictable EBITDA machine. Built on market intelligence, not guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-none tech-border border-none shadow-[0_0_20px_rgba(234,88,12,0.3)]">
              Run Free Market Intel Report <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-none">
              See the 5-System Playbook
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 font-mono pt-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span>LIVE DATA FEED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>202/240/703 ACTIVE</span>
            </div>
          </div>
        </motion.div>
        
        {/* Mission Control Panel Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900/80">
              <div className="text-xs font-mono text-slate-400">MISSION CONTROL // DASHBOARD</div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              </div>
            </div>
            
            {/* Main Visual */}
            <div className="relative aspect-video w-full overflow-hidden group">
              <img 
                src="/images/hero-mission-control.jpg" 
                alt="Mission Control Dashboard" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-2 rounded-sm">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">LSA Status</div>
                  <div className="text-primary font-mono font-bold">OPTIMIZED</div>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-slate-700 p-2 rounded-sm">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Lead Flow</div>
                  <div className="text-green-400 font-mono font-bold">ACTIVE</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-md border-t border-primary/50 p-3 flex justify-between items-center">
                  <div className="font-mono text-xs text-primary">SYSTEM DIAGNOSTICS RUNNING...</div>
                  <div className="font-mono text-xs text-white">98% EFFICIENCY</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements behind */}
          <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
