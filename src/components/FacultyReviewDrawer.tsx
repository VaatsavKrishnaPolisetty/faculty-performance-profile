import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  X, CheckCircle, AlertTriangle, ShieldCheck, FileText, 
  Upload, ExternalLink, Award, Sparkles, Scale, TrendingUp,
  MessageSquare, User, Save, RefreshCw
} from "lucide-react";
import { FacultyRecord, ClaimedItem } from "../types";
import { calculateDimensionScores, computeWeightedPercentage, getScoringBand } from "../utils/scoreCalculator";
import { evaluateContextualEquity } from "../utils/contextualEngine";
import confetti from "canvas-confetti";
import { EvidenceViewerModal } from "./EvidenceViewerModal";

interface FacultyReviewDrawerProps {
  faculty: FacultyRecord;
  isOpen: boolean;
  onClose: () => void;
  onUpdateFaculty: (updated: FacultyRecord) => void;
  onOpenAppraisalBrief: (faculty: FacultyRecord) => void;
}

export const FacultyReviewDrawer: React.FC<FacultyReviewDrawerProps> = ({
  faculty,
  isOpen,
  onClose,
  onUpdateFaculty,
  onOpenAppraisalBrief,
}) => {
  // Unconditionally call all hooks before any early return
  const [activeTab, setActiveTab] = useState<"items" | "context" | "trends" | "hod_review">("items");
  const [items, setItems] = useState<ClaimedItem[]>(faculty?.items || []);
  const [hodRemarks, setHodRemarks] = useState(
    faculty?.hodRemarks || "Candidate displays strong academic commitment. Research outputs should be expanded with extramural project grants."
  );
  const [isSaved, setIsSaved] = useState(false);
  const [viewingEvidenceItem, setViewingEvidenceItem] = useState<ClaimedItem | null>(null);
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);

  // Synchronize state when faculty changes
  useEffect(() => {
    if (faculty) {
      setItems(faculty.items);
      setHodRemarks(
        faculty.hodRemarks || "Candidate displays strong academic commitment. Research outputs should be expanded with extramural project grants."
      );
    }
  }, [faculty]);

  // Listen for Escape key and lock background scroll
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

  if (!isOpen || !faculty) return null;

  // Compute live scores
  const dimScores = calculateDimensionScores(items);
  const weightedPct = computeWeightedPercentage(dimScores, faculty.level);
  const band = getScoringBand(weightedPct);

  // Contextual calculation
  const contextAdj = evaluateContextualEquity(dimScores.total, weightedPct, faculty.context);

  const handleApproveItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, status: "approved" as const, verifiedPoints: it.claimedPoints } : it))
    );
  };

  const handleRejectItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, status: "rejected" as const, verifiedPoints: 0 } : it))
    );
  };

  const handleSaveHODReview = () => {
    const updatedRecord: FacultyRecord = {
      ...faculty,
      items,
      verifiedScores: dimScores,
      weightedPercentage: weightedPct,
      grade: band.grade,
      contextAdjustedScore: contextAdj.adjustedScore,
      contextAdjustedPercentage: contextAdj.adjustedPercentage,
      contextAdjustedGrade: contextAdj.adjustedGrade,
      verificationStatus: "hod_approved",
      hodRemarks,
      appraisalBriefGeneratedAt: new Date().toISOString(),
    };

    onUpdateFaculty(updatedRecord);
    setIsSaved(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
    });
    setTimeout(() => setIsSaved(false), 3000);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="w-full max-w-3xl bg-white border-l border-slate-200 h-full overflow-y-auto flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold font-mono">
              {faculty.empId}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">{faculty.name}</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {faculty.level}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {faculty.designation} • {faculty.department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenAppraisalBrief(faculty)}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <FileText className="size-3.5 text-indigo-600" />
              <span>Appraisal Brief</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Live Score Overview Banner */}
        <div className="p-6 bg-slate-50/70 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Teaching (TL)</span>
            <span className="text-lg font-black text-slate-900 font-mono">{dimScores.teaching}</span>
            <span className="text-[10px] text-slate-400 block">/ 333 pts</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Research (R&D)</span>
            <span className="text-lg font-black text-slate-900 font-mono">{dimScores.research}</span>
            <span className="text-[10px] text-slate-400 block">/ 333 pts</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Governance</span>
            <span className="text-lg font-black text-slate-900 font-mono">{dimScores.governance}</span>
            <span className="text-[10px] text-slate-400 block">/ 333 pts</span>
          </div>

          <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-200 shadow-2xs">
            <span className="text-[10px] text-indigo-700 font-mono uppercase block font-semibold">Raw Total (Cap 999)</span>
            <span className="text-xl font-black text-indigo-700 font-mono">{dimScores.total}</span>
            <span className="text-[10px] text-emerald-700 font-bold block">
              Grade {band.grade} ({weightedPct}%)
            </span>
          </div>
        </div>

        {/* Drawer Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-6">
          <button
            onClick={() => setActiveTab("items")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
              activeTab === "items"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Verified Platform Data ({items.length})
          </button>
          <button
            onClick={() => setActiveTab("context")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
              activeTab === "context"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Contextual Equity & Safeguards
          </button>
          <button
            onClick={() => setActiveTab("trends")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
              activeTab === "trends"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Multi-Cycle Trends (2023-25)
          </button>
          <button
            onClick={() => setActiveTab("hod_review")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 cursor-pointer transition-colors ${
              activeTab === "hod_review"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            HOD Sign-Off & Remarks
          </button>
        </div>

        {/* Tab 1: Verified Items & Submissions */}
        {activeTab === "items" && (
          <div className="p-6 space-y-4 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">
                Institutional Metric Line Items (Capped at 999 max)
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-mono font-medium">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                Verified from Platform Feeds
              </span>
            </div>

            <div className="space-y-3">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 shadow-2xs hover:border-slate-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                          it.dimension === "teaching" ? "bg-cyan-50 text-cyan-700 border border-cyan-200" :
                          it.dimension === "research" ? "bg-indigo-50 text-indigo-700 border border-indigo-200" :
                          "bg-purple-50 text-purple-700 border border-purple-200"
                        }`}>
                          {it.dimension}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{it.metricName}</span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Institutional Source: <span className="text-slate-700 font-mono font-medium">{it.source === "platform" ? "Verified Enterprise Feed" : "Self-Submitted Claim"}</span>
                      </p>
                    </div>

                    <div className="text-right whitespace-nowrap">
                      <span className="text-sm font-black text-slate-900 font-mono">{it.verifiedPoints}</span>
                      <span className="text-slate-400 text-xs font-mono"> / {it.maxPoints} pts</span>
                    </div>
                  </div>

                  {/* Supporting Evidence Link if present */}
                  {it.evidenceName ? (
                    <div 
                      onClick={() => {
                        setViewingEvidenceItem(it);
                        setIsEvidenceModalOpen(true);
                      }}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs transition-all cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center gap-2 text-slate-700 truncate">
                        <FileText className="size-3.5 text-indigo-600 flex-shrink-0" />
                        <span className="truncate group-hover:text-indigo-600 transition-colors font-medium">{it.evidenceName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewingEvidenceItem(it);
                          setIsEvidenceModalOpen(true);
                        }}
                        className="text-indigo-700 group-hover:text-indigo-800 flex items-center gap-1 font-semibold ml-2 text-[11px] bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 hover:bg-indigo-100 cursor-pointer"
                      >
                        <span>View Proof</span>
                        <ExternalLink className="size-3" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => {
                        setViewingEvidenceItem(it);
                        setIsEvidenceModalOpen(true);
                      }}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 hover:bg-slate-100 border border-dashed border-slate-300 text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-700"
                    >
                      <span className="text-[11px]">Audit Record Available</span>
                      <span className="text-indigo-600 text-[11px] flex items-center gap-1 font-semibold">
                        <span>Open Dossier</span>
                        <ExternalLink className="size-3" />
                      </span>
                    </div>
                  )}

                  {/* Verification Status Badge & HOD Override Actions */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5">
                      {it.status === "verified" || it.status === "approved" ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                          <CheckCircle className="size-3.5 text-emerald-600" />
                          <span>Audit Verified</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-[11px]">
                          <AlertTriangle className="size-3.5 text-amber-600" />
                          <span>Pending HOD Action</span>
                        </span>
                      )}
                    </div>

                    {it.source === "faculty_submission" && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApproveItem(it.id)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-semibold border border-emerald-200 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectItem(it.id)}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 text-[11px] font-semibold border border-rose-200 cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Contextual Equity & Safeguards */}
        {activeTab === "context" && (
          <div className="p-6 space-y-6 flex-1">
            <div className="p-5 rounded-2xl border border-indigo-200 bg-indigo-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-indigo-700 font-bold">Contextual Adjustment Engine</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                  {contextAdj.gradeDelta > 0 ? "+1 Grade Level Lift" : "No Penalty Applied"}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Academic equity rule: A faculty member carrying heavy institutional administration (e.g. BoInfra lead, NAAC criteria head) and demanding teaching contact loads is evaluated through a fair contribution lens, ensuring research capacity is not penalized without visible context.
              </p>
            </div>

            {/* Factor Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono text-slate-500 uppercase">1. Teaching Load</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-slate-900 font-mono">{faculty.context.teachingHoursPerWeek} hrs/wk</span>
                  <span className="text-xs text-cyan-700 font-mono font-semibold">+{contextAdj.factors.teachingLoadBonus}%</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {faculty.context.distinctPreparations} distinct course preps across {faculty.context.creditLoad} credits.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono text-slate-500 uppercase">2. Course Difficulty</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-slate-900 font-mono">{faculty.context.courseDifficultyIndex} / 5.0</span>
                  <span className="text-xs text-cyan-700 font-mono font-semibold">+{contextAdj.factors.courseDifficultyBonus}%</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Core theoretical computing curriculum with rigorous algorithmic proofs.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono text-slate-500 uppercase">3. Section Entry Ability</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-slate-900 font-mono">{faculty.context.sectionEntryPercentile}th Percentile</span>
                  <span className="text-xs text-cyan-700 font-mono font-semibold">+{contextAdj.factors.sectionEntryAbilityBonus}%</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {faculty.context.remedialStudentPercent}% remedial intake requiring extensive after-hours tutorials.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono text-slate-500 uppercase">4. Administrative Burden</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-slate-900 font-mono">{faculty.context.administrativeBurdenHours} hrs/wk</span>
                  <span className="text-xs text-purple-700 font-mono font-semibold">+{contextAdj.factors.administrativeBurdenBonus}%</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Roles: {faculty.context.administrativeRoles.join(", ")}.
                </p>
              </div>
            </div>

            {/* Narrative Explanation */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <span className="text-xs font-bold text-slate-900 block">Audit Trail Contextual Narrative:</span>
              <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                {contextAdj.explanation.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="text-slate-600">Standard Grade: <b className="text-slate-800">{contextAdj.baselineGrade} ({contextAdj.baselinePercentage}%)</b></span>
                <span className="text-emerald-700 font-bold">Context-Fair Grade: {contextAdj.adjustedGrade} ({contextAdj.adjustedPercentage}%)</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Multi-Cycle Trends */}
        {activeTab === "trends" && (
          <div className="p-6 space-y-6 flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">3-Year Performance Trajectory (2023 &rarr; 2024 &rarr; 2025)</h3>
              <p className="text-xs text-slate-500">
                Multi-cycle longitudinal progression is more informative for faculty development than a single snapshot score.
              </p>
            </div>

            <div className="space-y-4">
              {faculty.trends.map((tr) => (
                <div key={tr.year} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-slate-900 font-mono">{tr.year} Appraisal</span>
                      {tr.year === 2025 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                          Current Cycle
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 font-mono">{tr.rawScore} / 999</span>
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Grade {tr.grade} ({tr.weightedPercentage}%)
                      </span>
                    </div>
                  </div>

                  {/* Progress bars for dimensions */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                    <div>
                      <div className="flex justify-between text-slate-500 mb-1">
                        <span>Teaching</span>
                        <span className="font-mono text-slate-800 font-semibold">{tr.teachingScore}/333</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${(tr.teachingScore/333)*100}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-500 mb-1">
                        <span>Research</span>
                        <span className="font-mono text-slate-800 font-semibold">{tr.researchScore}/333</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600" style={{ width: `${(tr.researchScore/333)*100}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-500 mb-1">
                        <span>Governance</span>
                        <span className="font-mono text-slate-800 font-semibold">{tr.governanceScore}/333</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600" style={{ width: `${(tr.governanceScore/333)*100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Development Diagnostics */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 block">Automated AI Diagnostic Breakdown</span>
              <div className="space-y-2">
                {faculty.developmentAreas.map((d) => (
                  <div key={d.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-700">{d.title}</span>
                      <span className="text-[10px] font-mono text-slate-500">{d.timeline}</span>
                    </div>
                    <p className="text-slate-600">{d.observation}</p>
                    <p className="text-indigo-700 font-medium">&rarr; Action: {d.recommendedAction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: HOD Sign-Off & Remarks */}
        {activeTab === "hod_review" && (
          <div className="p-6 space-y-5 flex-1">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 block">
                Official Head of Department (HOD) Assessment Remarks
              </label>
              <textarea
                value={hodRemarks}
                onChange={(e) => setHodRemarks(e.target.value)}
                rows={5}
                className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                placeholder="Enter HOD remarks, strengths, development areas, and promotion recommendation..."
              />
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-2">
              <span className="font-bold text-slate-900 block">Verification Summary:</span>
              <div className="flex justify-between">
                <span>Verified Score Cap:</span>
                <span className="font-mono font-bold text-slate-900">{dimScores.total} / 999 Marks</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Weighted %:</span>
                <span className="font-mono font-bold text-slate-900">{weightedPct}% (Grade {band.grade})</span>
              </div>
              <div className="flex justify-between">
                <span>Context-Fair Adjusted Grade:</span>
                <span className="font-mono font-bold text-emerald-700">{contextAdj.adjustedGrade} ({contextAdj.adjustedPercentage}%)</span>
              </div>
            </div>

            {isSaved && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-600" />
                <span>HOD Evaluation recorded successfully. Appraisal brief ready for official signing.</span>
              </div>
            )}

            <button
              onClick={handleSaveHODReview}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Save className="size-4" />
              <span>Confirm & Certify HOD Appraisal Evaluation</span>
            </button>
          </div>
        )}

        {/* Drawer Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 px-6 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Status: <b className="text-slate-900 uppercase">{faculty.verificationStatus.replace(/_/g, " ")}</b>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleSaveHODReview}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition-all flex items-center gap-1.5"
            >
              <Save className="size-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

      </div>

      {/* Evidence Viewer Modal */}
      <EvidenceViewerModal
        isOpen={isEvidenceModalOpen}
        item={viewingEvidenceItem}
        faculty={faculty}
        onClose={() => {
          setIsEvidenceModalOpen(false);
          setViewingEvidenceItem(null);
        }}
        onUpdateItem={(updatedItem) => {
          setItems(items.map((it) => (it.id === updatedItem.id ? updatedItem : it)));
          if (viewingEvidenceItem?.id === updatedItem.id) {
            setViewingEvidenceItem(updatedItem);
          }
        }}
      />
    </div>,
    document.body
  );
};
