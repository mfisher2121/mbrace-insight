import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Folder, FileText, Download, Search, MoreVertical, File, Image, Video } from "lucide-react";

export default function FileStorage() {
  return (
    <div className="flex min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-[#ff4400] selection:text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3 text-[#ff4400] mb-2">
              <HardDrive className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Resource Vault</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">FILE STORAGE</h1>
            <p className="text-slate-400 max-w-2xl">
              Centralized repository for operational documents, marketing assets, training videos, and technical manuals.
            </p>
          </div>

          {/* Storage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">TOTAL STORAGE</span>
                  <HardDrive className="h-4 w-4 text-[#ff4400]" />
                </div>
                <div className="text-3xl font-bold text-white">124 GB</div>
                <div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-[#ff4400] h-full w-[45%]"></div>
                </div>
                <div className="text-xs text-slate-500 mt-2">45% Used</div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">DOCUMENTS</span>
                  <FileText className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-white">1,240</div>
                <div className="text-xs text-slate-500 mt-2">PDFs, DOCs, XLS</div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">MEDIA ASSETS</span>
                  <Image className="h-4 w-4 text-purple-500" />
                </div>
                <div className="text-3xl font-bold text-white">856</div>
                <div className="text-xs text-slate-500 mt-2">Images, Logos</div>
              </CardContent>
            </Card>
            <Card className="bg-[#161920] border-slate-800 rounded-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500">TRAINING</span>
                  <Video className="h-4 w-4 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-white">42</div>
                <div className="text-xs text-slate-500 mt-2">Video Modules</div>
              </CardContent>
            </Card>
          </div>

          {/* File Browser */}
          <Card className="bg-[#161920] border-slate-800 rounded-sm min-h-[500px]">
            <CardHeader className="border-b border-slate-800 pb-4 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <div className="w-1 h-5 bg-[#ff4400]"></div>
                BROWSE FILES
              </CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search files..." 
                  className="w-full bg-black border border-slate-800 rounded-sm py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#ff4400]"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Breadcrumbs */}
              <div className="px-6 py-3 border-b border-slate-800 flex items-center gap-2 text-sm text-slate-400">
                <span className="hover:text-white cursor-pointer">Home</span>
                <span>/</span>
                <span className="text-white font-medium">Operations</span>
              </div>

              {/* File List */}
              <div className="divide-y divide-slate-800">
                {/* Folder Item */}
                <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <Folder className="h-10 w-10 text-yellow-500 fill-yellow-500/20" />
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-[#ff4400]">SOPs & Protocols</h4>
                      <p className="text-xs text-slate-500">Updated 2 days ago • 14 items</p>
                    </div>
                  </div>
                  <MoreVertical className="h-4 w-4 text-slate-600 hover:text-white" />
                </div>

                {/* Folder Item */}
                <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <Folder className="h-10 w-10 text-yellow-500 fill-yellow-500/20" />
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-[#ff4400]">Technician Training</h4>
                      <p className="text-xs text-slate-500">Updated 1 week ago • 8 items</p>
                    </div>
                  </div>
                  <MoreVertical className="h-4 w-4 text-slate-600 hover:text-white" />
                </div>

                {/* Folder Item */}
                <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <Folder className="h-10 w-10 text-yellow-500 fill-yellow-500/20" />
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-[#ff4400]">Marketing Assets</h4>
                      <p className="text-xs text-slate-500">Updated 3 days ago • 45 items</p>
                    </div>
                  </div>
                  <MoreVertical className="h-4 w-4 text-slate-600 hover:text-white" />
                </div>

                {/* File Item */}
                <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-red-500/10 flex items-center justify-center rounded-sm">
                      <FileText className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-[#ff4400]">Q1_2025_Budget_Forecast.pdf</h4>
                      <p className="text-xs text-slate-500">2.4 MB • Uploaded by Admin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Download className="h-4 w-4 text-slate-400 hover:text-white" />
                    </button>
                    <MoreVertical className="h-4 w-4 text-slate-600 hover:text-white" />
                  </div>
                </div>

                {/* File Item */}
                <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-500/10 flex items-center justify-center rounded-sm">
                      <File className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-[#ff4400]">Dispatch_Script_v2.docx</h4>
                      <p className="text-xs text-slate-500">145 KB • Uploaded by Sarah J.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Download className="h-4 w-4 text-slate-400 hover:text-white" />
                    </button>
                    <MoreVertical className="h-4 w-4 text-slate-600 hover:text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
