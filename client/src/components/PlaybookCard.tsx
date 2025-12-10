import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

interface PlaybookCardProps {
  title: string;
  category: string;
  readTime: string;
  link: string;
}

export default function PlaybookCard({ title, category, readTime, link }: PlaybookCardProps) {
  return (
    <Link href={link}>
      <Card className="group cursor-pointer border-l-4 border-l-primary border-y-0 border-r-0 rounded-none bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-[10px] uppercase">
              {category}
            </Badge>
            <div className="flex items-center text-[10px] text-slate-500 font-mono">
              <Clock className="h-3 w-3 mr-1" /> {readTime}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-4 font-mono leading-snug">
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-slate-400 group-hover:text-white transition-colors font-mono">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>READ PLAYBOOK</span>
            <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
