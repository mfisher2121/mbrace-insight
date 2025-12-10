import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface SystemCardProps {
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
  index: number;
}

export default function SystemCard({ title, tag, description, icon, link, image, index }: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={link}>
        <Card className="h-full overflow-hidden border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer hover:border-primary/50">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute top-3 right-3 z-20">
              <Badge variant="outline" className="bg-black/70 backdrop-blur-sm border-primary/30 text-primary font-mono text-xs uppercase tracking-wider">
                {tag}
              </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-md bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {icon}
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">SYSTEM 0{index + 1}</div>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-primary transition-colors font-mono">
              {title}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            <div className="flex items-center text-primary text-sm font-medium font-mono group-hover:translate-x-1 transition-transform">
              ACCESS MODULE <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
