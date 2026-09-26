import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Printer, FileText, CheckCircle2 } from "lucide-react";
import { FacultyRecord } from "../types";

interface AppraisalBriefModalProps {
  faculty: FacultyRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AppraisalBriefModal: React.FC<AppraisalBriefModalProps> = ({
  faculty,
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
    document.body.classList.add("has-modal-open");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("has-modal-open");
    };
  }, [isOpen, onClose]);

  if (!isOpen || !faculty) return null;

  const handlePrint = () => {
    window.print();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-900/50 backdrop-blur-xs transition-all duration-200 printable-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-900 my-auto animate-in fade-in zoom-in-95 duration-150 printable-modal-card"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <FileText className="size-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Executive Appraisal Brief & Outcome Record</h2>
              <p className="text-[11px] text-slate-500">Official Institutional Evaluation Document • Capped Max 999</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
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

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-xs printable-modal-body">
          
          {/* Official Letterhead */}
          <div className="text-center space-y-1.5 pb-5 border-b border-slate-200 print-break-inside-avoid">
            <h1 className="text-lg sm:text-xl font-black tracking-wide text-slate-900 uppercase">
              Vignan's Foundation for Science, Technology & Research
            </h1>
            <p className="text-xs text-slate-600 font-medium">
              (Deemed to be University Estd. u/s 3 of UGC Act 1956) • NAAC 'A+' Grade • NIRF Top 70 Rank
            </p>
            <p className="text-xs text-indigo-600 font-mono font-semibold">
              Internal Quality Assurance Cell (IQAC) • Faculty Performance Appraisal Outcome AY 2024-25 & 2025
            </p>
          </div>

          {/* Candidate Profile Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs print-break-inside-avoid">
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Faculty Name</span>
              <span className="font-bold text-slate-900 text-sm">{faculty.name}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Employee ID</span>
              <span className="font-bold text-slate-900 font-mono">{faculty.empId}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Designation & Level</span>
              <span className="font-bold text-slate-900">{faculty.designation} ({faculty.level})</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Department</span>
              <span className="font-bold text-slate-900">{faculty.department}</span>
            </div>
          </div>

          {/* Dimension Scorecard Table */}
          <div className="space-y-3 print-break-inside-avoid">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase text-slate-700 font-bold">
                I. Quantitative Dimension Scorecard & Rubric Audit (Max 999 Marks)
              </h3>
              <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="size-3.5" />
                Verified from Platform Feeds
              </span>
            </div>

            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-mono text-[11px]">
                  <th className="p-3 border border-slate-200">Appraisal Dimension</th>
                  <th className="p-3 border border-slate-200 text-center">Max Cap</th>
                  <th className="p-3 border border-slate-200 text-center">Verified Score</th>
                  <th className="p-3 border border-slate-200 text-center">Level Weight</th>
                  <th className="p-3 border border-slate-200 text-center">Effective Contribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">
                    Part A: Teaching–Learning Process (TL)
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-500">333</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-cyan-600">
                    {faculty.verifiedScores.teaching}
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-600">60%</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-slate-800">
                    {((faculty.verifiedScores.teaching / 333) * 60).toFixed(2)}%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">
                    Part B: Research & Development (R&D)
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-500">333</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-indigo-600">
                    {faculty.verifiedScores.research}
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-600">30%</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-slate-800">
                    {((faculty.verifiedScores.research / 333) * 30).toFixed(2)}%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">
                    Part C: Institutional Governance (Gov)
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-500">333</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-purple-600">
                    {faculty.verifiedScores.governance}
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-600">10%</td>
                  <td className="p-3 border border-slate-200 text-center font-mono font-bold text-slate-800">
                    {((faculty.verifiedScores.governance / 333) * 10).toFixed(2)}%
                  </td>
                </tr>
                <tr className="bg-slate-50 font-bold">
                  <td className="p-3 border border-slate-200 text-slate-900 font-bold">
                    Aggregated Total Score (Capped Max 999)
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-900">999</td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-sm text-emerald-600 font-black">
                    {faculty.verifiedScores.total}
                  </td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-slate-900">100%</td>
                  <td className="p-3 border border-slate-200 text-center font-mono text-sm text-emerald-600 font-black">
                    {faculty.weightedPercentage}% (Grade {faculty.grade})
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contextual Disclosures & Fair Adjustment */}
          <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3 print-break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-slate-900 uppercase text-[11px] font-mono tracking-wide">
                II. Contextual Equity Evaluation & Research Safeguard
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                Fair Score: {faculty.contextAdjustedScore}/999 ({faculty.contextAdjustedPercentage}%) &rarr; Grade {faculty.contextAdjustedGrade}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed text-xs">
              {faculty.context.contextualImpactNarrative}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2.5 border-t border-indigo-200/80 text-[11px] font-mono text-slate-700">
              <div>Teaching Load: <b className="text-slate-900">{faculty.context.teachingHoursPerWeek} hrs/wk</b></div>
              <div>Admin Burden: <b className="text-purple-700 font-bold">{faculty.context.administrativeBurdenHours} hrs/wk</b></div>
              <div>Course Difficulty: <b className="text-slate-900">{faculty.context.courseDifficultyIndex}/5.0</b></div>
              <div>Remedial Cohort: <b className="text-slate-900">{faculty.context.remedialStudentPercent}%</b></div>
            </div>
          </div>

          {/* Multi-cycle trend comparison */}
          <div className="space-y-2.5 print-break-inside-avoid">
            <span className="font-bold text-slate-700 uppercase text-[11px] font-mono block">
              III. 3-Year Historical Performance Trajectory (2023–2025)
            </span>
            <div className="grid grid-cols-3 gap-4 text-center">
              {faculty.trends.map((t) => (
                <div key={t.year} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 block">{t.year} Cycle</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">{t.rawScore} / 999</span>
                  <span className="text-xs text-emerald-600 block font-semibold mt-0.5">
                    {t.weightedPercentage}% (Grade {t.grade})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HOD Assessment Remarks */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 print-break-inside-avoid">
            <span className="font-bold text-slate-900 block">IV. HOD Official Assessment & Action Recommendation</span>
            <p className="text-slate-700 italic text-xs leading-relaxed">
              "{faculty.hodRemarks || "Faculty exhibits consistent dedication across curriculum delivery and infrastructure management. Recommend focusing on external research funding in next appraisal cycle."}"
            </p>
          </div>

          {/* Formal Signature Block */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 print-break-inside-avoid">
            <div className="space-y-4">
              <div className="h-7 flex items-end justify-center font-serif italic text-indigo-600 text-sm">
                {faculty.name}
              </div>
              <div className="border-t border-slate-300 pt-1.5">
                <span className="font-bold text-slate-800 block">Candidate Signature</span>
                <span className="text-[10px] font-mono">Date: 2025-06-30</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-7 flex items-end justify-center font-serif italic text-cyan-700 text-sm">
                Dr. S V Phani Kumar
              </div>
              <div className="border-t border-slate-300 pt-1.5">
                <span className="font-bold text-slate-800 block">Head of Department (HOD)</span>
                <span className="text-[10px] font-mono">Department of CSE</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-7 flex items-end justify-center font-serif italic text-emerald-700 text-sm">
                Dr. M. Ramakrishna
              </div>
              <div className="border-t border-slate-300 pt-1.5">
                <span className="font-bold text-slate-800 block">Dean - IQAC</span>
                <span className="text-[10px] font-mono">VFSTR Deemed University</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-3.5 border-t border-slate-200 flex items-center justify-between no-print">
          <span className="text-[11px] text-slate-500 font-mono">
            Candidate: <b className="text-slate-900">{faculty.name}</b> (EMP {faculty.empId})
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Printer className="size-3.5" />
              <span>Print Document</span>
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
