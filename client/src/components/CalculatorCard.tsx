import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CalculatorCardProps {
  title: string;
  description: string;
  inputs: string[];
  output: string;
  onClick: () => void;
}

export default function CalculatorCard({ title, description, inputs, output, onClick }: CalculatorCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 transition-colors">
        <CardHeader>
          <div className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center mb-4 text-primary border border-slate-700">
            <Calculator className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg text-white font-mono">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-400">{description}</p>
          
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Inputs</div>
            <div className="flex flex-wrap gap-2">
              {inputs.map((input, i) => (
                <span key={i} className="px-2 py-1 rounded bg-slate-800/50 border border-slate-700 text-[10px] text-slate-300 font-mono">
                  {input}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-2 border-t border-slate-800/50">
            <div className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1">Output</div>
            <div className="text-sm text-white font-medium">{output}</div>
          </div>
          
          <Button onClick={onClick} className="w-full mt-2 bg-slate-800 hover:bg-primary hover:text-white text-slate-300 border border-slate-700 transition-all font-mono text-xs h-9">
            LAUNCH TOOL <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
