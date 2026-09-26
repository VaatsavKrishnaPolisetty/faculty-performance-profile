import React from "react";
import { GraduationCap, BarChart3, UserCheck, Building2, ShieldCheck } from "lucide-react";

interface HeaderProps {
  activeTab: "hod" | "faculty" | "aggregate_report";
  setActiveTab: (tab: "hod" | "faculty" | "aggregate_report") => void;
  selectedFacultyName: string;
  isDatabaseConnected?: boolean;
  isSyncing?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedFacultyName,
  isDatabaseConnected = true,
  isSyncing = false,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-6">
          
          {/* Institution & Agent Title */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="size-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-xs">
              <GraduationCap className="size-5 text-indigo-600" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight truncate">
                  Faculty Performance Agent
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">
                  Max 999
                </span>
                {/* Supabase Live Status Badge */}
                <span className={`hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${
                  isSyncing
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : isDatabaseConnected
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-slate-50 text-slate-600 border-slate-200"
                }`}>
                  <span className={`size-1.5 rounded-full ${
                    isSyncing ? "bg-amber-500 animate-ping" : isDatabaseConnected ? "bg-emerald-500" : "bg-slate-400"
                  }`} />
                  {isSyncing ? "Syncing..." : isDatabaseConnected ? "Supabase Live" : "Offline"}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate">
                VFSTR • Department of CSE • HOD: Dr. S V Phani Kumar
              </p>
            </div>
          </div>

          {/* Minimal & Spacious Navigation Switcher */}
          <nav className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab("hod")}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "hod"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200/60 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <BarChart3 className="size-3.5" />
              <span>HOD Suite</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                activeTab === "hod" 
                  ? "bg-indigo-50 text-indigo-600 font-bold" 
                  : "bg-slate-200 text-slate-600"
              }`}>
                42
              </span>
            </button>

            <button
              onClick={() => setActiveTab("faculty")}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "faculty"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200/60 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <UserCheck className="size-3.5" />
              <span>Faculty Portal</span>
              <span className={`hidden md:inline px-1.5 py-0.2 rounded text-[10px] font-mono truncate max-w-[80px] ${
                activeTab === "faculty"
                  ? "bg-indigo-50 text-indigo-600 font-bold"
                  : "bg-slate-200 text-slate-600"
              }`}>
                {selectedFacultyName ? selectedFacultyName.split(" ")[0] : "Faculty"}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("aggregate_report")}
              className={`flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "aggregate_report"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200/60 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <Building2 className="size-3.5" />
              <span>Report</span>
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};
