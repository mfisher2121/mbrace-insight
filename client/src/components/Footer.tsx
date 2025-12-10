import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary flex items-center justify-center font-mono font-bold text-white text-sm rounded-sm">
                M
              </div>
              <span className="font-mono font-bold text-white tracking-tight">MBRACE INSIGHT</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              The operating system for HVAC growth. Turn your ad spend, reviews, and field ops into a predictable EBITDA machine.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-white font-bold mb-6 uppercase text-sm tracking-wider">Systems</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">LSA Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lead Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hyper-Local SEO</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Review Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intel Hub / RAG</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-white font-bold mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">Market Intel Report</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Energy Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ROI Estimator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Playbooks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For PE Firms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} MBRACE INSIGHT. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
