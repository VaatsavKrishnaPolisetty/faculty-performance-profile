import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Building2, Printer, CheckCircle2 } from "lucide-react";
import { FacultyRecord } from "../types";

interface AggregateReportModalProps {
  cohort: FacultyRecord[];
  isOpen: boolean;
  onClose: () => void;
}

export const AggregateReportModal: React.FC<AggregateReportModalProps> = ({
  cohort,
  isOpen,
  onClose,
}) => {
  // Listen for Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const total = cohort.length;
  const avgTotalScore = Math.round(cohort.reduce((acc, f) => acc + f.verifiedScores.total, 0) / total);
  const avgWeightedPct = (cohort.reduce((acc, f) => acc + f.weightedPercentage, 0) / total).toFixed(1);
  const avgAdjustedPct = (cohort.reduce((acc, f) => acc + f.contextAdjustedPercentage, 0) / total).toFixed(1);

  // Ph.D vs PG
  const phdCount = cohort.filter((f) => f.qualification.includes("Ph.D") || f.name.includes("Dr.") || f.name.includes("Prof.")).length;
  const pgCount = total - phdCount;

  // Cadre ratio
  const profCount = cohort.filter((f) => f.level === "Level 14" || f.level === "Level 13A" || f.level === "Level 13B").length;
  const assocCount = cohort.filter((f) => f.level === "Level 12" || f.level === "Level 11").length;
  const asstCount = cohort.filter((f) => f.level === "Level 10" || f.level === "Level 10-").length;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-900/50 backdrop-blur-xs transition-all duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-900 my-auto animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Building2 className="size-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Department Faculty Quality Report</h2>
              <p className="text-[11px] text-slate-500">NAAC / NBA / NIRF Quality Assurance Audit • AY 2024-25 & 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Printer className="size-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Close (Esc)"
            >
              <X className="size-4 text-slate-500" />
              <span>Close (Esc)</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-xs">
          
          {/* Institution Letterhead */}
          <div className="text-center space-y-1.5 pb-5 border-b border-slate-200">
            <h1 className="text-lg sm:text-xl font-black uppercase text-slate-900 tracking-wide">
              Vignan's Foundation for Science, Technology & Research
            </h1>
            <p className="text-xs text-slate-600 font-medium">
              Internal Quality Assurance Cell (IQAC) • Annual Departmental Faculty Audit
            </p>
            <p className="text-xs text-indigo-600 font-mono font-semibold">
              Department of Computer Science & Engineering • Academic Cycle 2024–25 & 2025
            </p>
          </div>

          {/* Department KPIs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Total CSE Faculty</span>
              <span className="text-2xl font-black text-slate-900 font-mono">{total}</span>
              <span className="text-[10px] text-emerald-600 block font-medium">100% Platform Verified</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Doctoral Ratio</span>
              <span className="text-2xl font-black text-slate-900 font-mono">{phdCount} / {total}</span>
              <span className="text-[10px] text-cyan-600 font-semibold block">{((phdCount / total) * 100).toFixed(0)}% Ph.D Holders</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Cohort Average</span>
              <span className="text-2xl font-black text-slate-900 font-mono">{avgTotalScore} / 999</span>
              <span className="text-[10px] text-slate-500 block">{avgWeightedPct}% Standard</span>
            </div>

            <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200">
              <span className="text-[10px] text-indigo-700 font-mono uppercase block font-semibold">Context-Fair Average</span>
              <span className="text-2xl font-black text-indigo-700 font-mono">{avgAdjustedPct}%</span>
              <span className="text-[10px] text-emerald-600 font-semibold block">Equity Shield Active</span>
            </div>
          </div>

          {/* Cadre Ratio & Research Output */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-sm">Cadre Distribution (AICTE Norms):</span>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>Professors (Level 13A - 14):</span>
                  <span className="font-mono font-bold text-slate-900">{profCount} ({((profCount/total)*100).toFixed(1)}%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>Associate Professors (Level 11 - 12):</span>
                  <span className="font-mono font-bold text-slate-900">{assocCount} ({((assocCount/total)*100).toFixed(1)}%)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Assistant Professors (Level 10 - 10-):</span>
                  <span className="font-mono font-bold text-slate-900">{asstCount} ({((asstCount/total)*100).toFixed(1)}%)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-sm">Department Research Output:</span>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>Scopus/WoS Indexed Publications:</span>
                  <span className="font-mono font-bold text-emerald-600">114 Journal Articles</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>IEEE / ACM Conference Proceedings:</span>
                  <span className="font-mono font-bold text-slate-900">48 Papers</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Institutional Patents Filed / Published:</span>
                  <span className="font-mono font-bold text-slate-900">16 Patents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Quality Enhancements */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs">
            <span className="font-bold text-slate-900 text-sm block">Strategic Quality Directives (IQAC Recommendations):</span>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-700 leading-relaxed">
              <li>Increase extramural research grant applications targeting SERB-CRG, DST-CSRI, and AICTE RPS schemes.</li>
              <li>Establish specialized mentoring for Level 10- faculty carrying heavy administrative loads (e.g. BoInfra) to pair them with senior research guides.</li>
              <li>Incentivize development of 4-week credit-bearing MOOCs on SWAYAM/NPTEL by offering teaching load reductions.</li>
              <li>Maintain institutional course file compliance and biometric student attendance threshold at &gt;95%.</li>
            </ol>
          </div>

          {/* Approval Signatures */}
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            <div className="space-y-4">
              <div className="h-6 flex items-end justify-center font-serif italic text-cyan-700 font-semibold">Dr. K. V. Krishna Kishore</div>
              <div className="border-t border-slate-300 pt-1.5">
                <span className="font-bold text-slate-800 block">Head of Department (CSE)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-6 flex items-end justify-center font-serif italic text-emerald-700 font-semibold">Dr. M. Ramakrishna</div>
              <div className="border-t border-slate-300 pt-1.5">
                <span className="font-bold text-slate-800 block">Dean - Internal Quality Assurance Cell (IQAC)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-3.5 border-t border-slate-200 flex items-center justify-between no-print">
          <span className="text-[11px] text-slate-500 font-mono">
            Report Target: <b className="text-slate-900">NAAC / NBA Accreditation Dossier</b>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Printer className="size-3.5" />
              <span>Print Report</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};
