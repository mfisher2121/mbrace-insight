import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, Cpu, FileText, Zap, Server } from "lucide-react";

export default function RAGSystem() {
  return (
    <div className="flex min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-[#ff4400] selection:text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3 text-[#ff4400] mb-2">
              <Database className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Knowledge Engine</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">RAG SYSTEM</h1>
            <p className="text-slate-400 max-w-2xl">
              Retrieval-Augmented Generation (RAG) architecture for HVAC technical support, sales scripts, and operational knowledge retrieval.
            </p>
          </div>

          {/* System Architecture Diagram Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#161920] border-slate-800 rounded-sm md:col-span-3">
              <CardHeader className="border-b border-slate-800 pb-4">
                <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#ff4400]"></div>
                  SYSTEM ARCHITECTURE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                  {/* Step 1: Ingestion */}
                  <div className="flex flex-col items-center text-center space-y-3 z-10">
                    <div className="w-16 h-16 bg-black border border-slate-700 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">1. INGESTION</h3>
                      <p className="text-xs text-slate-500 mt-1">Manuals, SOPs, Pricebooks</p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-800 -z-0"></div>

                  {/* Step 2: Vectorization */}
                  <div className="flex flex-col items-center text-center space-y-3 z-10">
                    <div className="w-16 h-16 bg-black border border-slate-700 rounded-full flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-[#ff4400]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">2. VECTORIZATION</h3>
                      <p className="text-xs text-slate-500 mt-1">OpenAI Embeddings</p>
                    </div>
                  </div>

                  {/* Step 3: Retrieval */}
                  <div className="flex flex-col items-center text-center space-y-3 z-10">
                    <div className="w-16 h-16 bg-black border border-slate-700 rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">3. RETRIEVAL</h3>
                      <p className="text-xs text-slate-500 mt-1">Semantic Search</p>
                    </div>
                  </div>

                  {/* Step 4: Generation */}
                  <div className="flex flex-col items-center text-center space-y-3 z-10">
                    <div className="w-16 h-16 bg-black border border-slate-700 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-[#ff4400]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">4. GENERATION</h3>
                      <p className="text-xs text-slate-500 mt-1">Context-Aware Answer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Implementation */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#ff4400]"></div>
                    KNOWLEDGE BASE SOURCES
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Server className="h-5 w-5 text-[#ff4400]" />
                        <h3 className="text-white font-bold text-sm">TECHNICAL MANUALS</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Ingest PDF installation guides, wiring diagrams, and error code sheets for all major brands (Carrier, Trane, Lennox).
                      </p>
                    </div>
                    
                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <MessageSquare className="h-5 w-5 text-[#ff4400]" />
                        <h3 className="text-white font-bold text-sm">SALES SCRIPTS</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Objection handling scripts, pricing presentation frameworks, and membership pitch decks.
                      </p>
                    </div>

                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="h-5 w-5 text-[#ff4400]" />
                        <h3 className="text-white font-bold text-sm">COMPANY SOPs</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Operational procedures for dispatch, CSR call flows, and technician arrival protocols.
                      </p>
                    </div>

                    <div className="p-4 bg-black/40 border border-slate-800 rounded-sm hover:border-[#ff4400]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="h-5 w-5 text-[#ff4400]" />
                        <h3 className="text-white font-bold text-sm">HISTORICAL JOBS</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Past job notes and solutions from ServiceTitan to suggest fixes for recurring issues.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Tools & Status */}
            <div className="space-y-6">
              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    VECTOR DATABASE STATUS
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Index Size</span>
                    <span className="text-sm font-mono text-white">1.2 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Documents</span>
                    <span className="text-sm font-mono text-white">1,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Last Sync</span>
                    <span className="text-sm font-mono text-[#ff4400]">2 mins ago</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-[#ff4400] w-[85%]"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    System operating at 85% capacity
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#161920] border-slate-800 rounded-sm">
                <CardHeader className="border-b border-slate-800 pb-4">
                  <CardTitle className="text-sm font-bold text-white uppercase tracking-wider">
                    RECOMMENDED STACK
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-800">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-white">Pinecone</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Vector DB</span>
                      </div>
                      <p className="text-xs text-slate-500">High-performance vector storage</p>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-white">LangChain</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Framework</span>
                      </div>
                      <p className="text-xs text-slate-500">Orchestration layer</p>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-white">OpenAI GPT-4</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">LLM</span>
                      </div>
                      <p className="text-xs text-slate-500">Inference engine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MessageSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
