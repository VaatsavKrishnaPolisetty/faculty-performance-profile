import React, { useState } from "react";
import { 
  ShieldCheck, CheckCircle2, Plus, Upload, FileText, 
  ExternalLink, Sparkles, TrendingUp, Sliders, AlertCircle,
  HelpCircle, Scale, BookOpen, Award, Check
} from "lucide-react";
import { FacultyRecord, ClaimedItem } from "../types";
import { calculateDimensionScores, computeWeightedPercentage, getScoringBand } from "../utils/scoreCalculator";
import { evaluateContextualEquity } from "../utils/contextualEngine";
import { SpotlightCard } from "./reactbits/SpotlightCard";
import { AnimatedCounter } from "./reactbits/AnimatedCounter";
import { ShinyText } from "./reactbits/ShinyText";
import { EvidenceViewerModal } from "./EvidenceViewerModal";
import confetti from "canvas-confetti";

interface FacultyDashboardProps {
  faculty: FacultyRecord;
  cohort: FacultyRecord[];
  onSelectFaculty: (faculty: FacultyRecord) => void;
  onUpdateFaculty: (updated: FacultyRecord) => void;
  onOpenAppraisalBrief: (faculty: FacultyRecord) => void;
}

export const FacultyDashboard: React.FC<FacultyDashboardProps> = ({
  faculty,
  cohort,
  onSelectFaculty,
  onUpdateFaculty,
  onOpenAppraisalBrief,
}) => {
  const [items, setItems] = useState<ClaimedItem[]>(faculty.items);
  const [context, setContext] = useState(faculty.context);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(faculty.verificationStatus === "confirmed_by_faculty");
  
  // Evidence viewer modal state
  const [viewingEvidenceItem, setViewingEvidenceItem] = useState<ClaimedItem | null>(null);
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFileDataUrl, setUploadedFileDataUrl] = useState<string>("");

  const handleOpenEvidence = (item: ClaimedItem) => {
    setViewingEvidenceItem(item);
    setIsEvidenceModalOpen(true);
  };

  // Sync state when faculty prop changes
  React.useEffect(() => {
    setItems(faculty.items);
    setContext(faculty.context);
    setIsConfirmed(faculty.verificationStatus === "confirmed_by_faculty");
  }, [faculty]);

  // Update item evidence from modal
  const handleUpdateItem = (updatedItem: ClaimedItem) => {
    const nextItems = items.map((it) => (it.id === updatedItem.id ? updatedItem : it));
    setItems(nextItems);
    if (viewingEvidenceItem?.id === updatedItem.id) {
      setViewingEvidenceItem(updatedItem);
    }
    const nextDimScores = calculateDimensionScores(nextItems);
    const nextWeighted = computeWeightedPercentage(nextDimScores, faculty.level);
    const nextBand = getScoringBand(nextWeighted);
    const nextContextAdj = evaluateContextualEquity(nextDimScores.total, nextWeighted, context);
    const updatedFaculty: FacultyRecord = {
      ...faculty,
      items: nextItems,
      claimedScores: nextDimScores,
      verifiedScores: nextDimScores,
      weightedPercentage: nextWeighted,
      grade: nextBand.grade,
      contextAdjustedScore: nextContextAdj.adjustedScore,
      contextAdjustedPercentage: nextContextAdj.adjustedPercentage,
      contextAdjustedGrade: nextContextAdj.adjustedGrade,
    };
    onUpdateFaculty(updatedFaculty);
  };

  // Escape key listener for Add Item Modal
  React.useEffect(() => {
    if (!isAddModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAddModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAddModalOpen]);

  // New item form state
  const [newItemDim, setNewItemDim] = useState<"teaching" | "research" | "governance">("research");
  const [newItemName, setNewItemName] = useState("");
  const [newItemPoints, setNewItemPoints] = useState(15);
  const [newItemEvidenceName, setNewItemEvidenceName] = useState("");
  const [newItemNotes, setNewItemNotes] = useState("");

  // Live recalculations
  const dimScores = calculateDimensionScores(items);
  const weightedPct = computeWeightedPercentage(dimScores, faculty.level);
  const band = getScoringBand(weightedPct);
  const contextAdj = evaluateContextualEquity(dimScores.total, weightedPct, context);

  // Confirm pre-populated records
  const handleConfirmRecords = () => {
    setIsConfirmed(true);
    const updated: FacultyRecord = {
      ...faculty,
      items,
      context,
      verifiedScores: dimScores,
      claimedScores: dimScores,
      weightedPercentage: weightedPct,
      grade: band.grade,
      contextAdjustedScore: contextAdj.adjustedScore,
      contextAdjustedPercentage: contextAdj.adjustedPercentage,
      contextAdjustedGrade: contextAdj.adjustedGrade,
      verificationStatus: "confirmed_by_faculty",
    };
    onUpdateFaculty(updated);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // Add supplementary item with evidence
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: ClaimedItem = {
      id: `custom_${Date.now()}`,
      dimension: newItemDim,
      metricId: "custom_claim",
      metricName: newItemName,
      maxPoints: newItemPoints,
      claimedPoints: newItemPoints,
      verifiedPoints: newItemPoints,
      status: "pending_hod",
      source: "faculty_submission",
      evidenceName: newItemEvidenceName || (uploadedFile ? uploadedFile.name : "Supporting_Evidence_Attachment.pdf"),
      evidenceUrl: uploadedFileDataUrl || "https://drive.google.com/file/d/evidence_verified/view",
      facultyNotes: newItemNotes,
    };

    const nextItems = [newItem, ...items];
    setItems(nextItems);

    const nextDimScores = calculateDimensionScores(nextItems);
    const nextWeighted = computeWeightedPercentage(nextDimScores, faculty.level);
    const nextBand = getScoringBand(nextWeighted);
    const nextContextAdj = evaluateContextualEquity(nextDimScores.total, nextWeighted, context);

    const updated: FacultyRecord = {
      ...faculty,
      items: nextItems,
      context,
      claimedScores: nextDimScores,
      verifiedScores: nextDimScores,
      weightedPercentage: nextWeighted,
      grade: nextBand.grade,
      contextAdjustedScore: nextContextAdj.adjustedScore,
      contextAdjustedPercentage: nextContextAdj.adjustedPercentage,
      contextAdjustedGrade: nextContextAdj.adjustedGrade,
    };
    onUpdateFaculty(updated);

    // Reset modal
    setIsAddModalOpen(false);
    setNewItemName("");
    setNewItemPoints(15);
    setNewItemEvidenceName("");
    setNewItemNotes("");
    setUploadedFile(null);
    setUploadedFileDataUrl("");
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Faculty Profile Hero (Clean Minimal Light) */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-r from-white via-indigo-50/40 to-slate-50 p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="size-16 rounded-2xl bg-indigo-600 shadow-sm flex-shrink-0 flex items-center justify-center font-black text-xl text-white">
              {faculty.name.replace("Dr. ", "").replace("Prof. ", "").replace("Mr. ", "").replace("Ms. ", "").slice(0, 2)}
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900">{faculty.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  EMP {faculty.empId}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {faculty.level}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                {faculty.designation} • {faculty.department} • Joined {faculty.dateOfJoin} • {faculty.qualification}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="size-3.5" />
                  Pre-populated from Verified Institutional Feeds
                </span>
                <span>•</span>
                <span>Scoring Capped at 999 Max</span>
              </div>
            </div>
          </div>

          {/* Quick Faculty Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-xs">
              <label className="text-slate-500 block text-[10px] font-mono uppercase mb-1">Switch Faculty Profile:</label>
              <select
                value={faculty.empId}
                onChange={(e) => {
                  const target = cohort.find((c) => c.empId === e.target.value);
                  if (target) {
                    onSelectFaculty(target);
                    setItems(target.items);
                    setContext(target.context);
                    setIsConfirmed(target.verificationStatus === "confirmed_by_faculty");
                  }
                }}
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 cursor-pointer w-64 shadow-2xs"
              >
                {cohort.map((f) => (
                  <option key={f.empId} value={f.empId}>
                    {f.name} ({f.empId} - {f.level})
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:pt-4">
              <button
                onClick={() => onOpenAppraisalBrief(faculty)}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <FileText className="size-3.5 text-indigo-600" />
                <span>Appraisal Brief</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation & Verified Status Banner with Spotlight Hover */}
      <SpotlightCard
        spotlightColor={isConfirmed ? "rgba(16, 185, 129, 0.12)" : "rgba(99, 102, 241, 0.12)"}
        className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          isConfirmed
            ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
            : "bg-indigo-50/60 border-indigo-200 text-indigo-950"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`size-10 rounded-xl flex items-center justify-center ${
            isConfirmed ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"
          }`}>
            {isConfirmed ? <CheckCircle2 className="size-5" /> : <ShieldCheck className="size-5" />}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {isConfirmed ? "Appraisal Record Verified & Confirmed by Faculty" : "Platform Data Auto-Populated: Review & Confirm"}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {isConfirmed
                ? "You have reviewed and formally verified all institutional metrics. Pending HOD (Dr. S V Phani Kumar) final sign-off."
                : "Every dimension has been verified from enterprise ERP, LMS, and Scopus databases so you verify rather than compile."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
          >
            <Plus className="size-3.5 text-indigo-600" />
            <span>Add Uncaptured Item + Evidence</span>
          </button>

          {!isConfirmed && (
            <button
              onClick={handleConfirmRecords}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Check className="size-4" />
              <span>Confirm Verified Data</span>
            </button>
          )}
        </div>
      </SpotlightCard>

      {/* 3 Dimension Scorecards & Live Aggregate (Capped at 999) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Part A: Teaching */}
        <SpotlightCard spotlightColor="rgba(14, 165, 233, 0.1)">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-500 uppercase">Part A: Teaching</span>
            <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 font-semibold">
              Weight: 60%
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={dimScores.teaching} duration={1000} />
              </h3>
              <span className="text-xs font-mono text-slate-400">/ 333 Points</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" 
                style={{ width: `${(dimScores.teaching / 333) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Course file, exit survey, CO-PO attainment & 100% pass rate.
            </p>
          </div>
        </SpotlightCard>

        {/* Part B: Research */}
        <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.1)">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-500 uppercase">Part B: Research</span>
            <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 font-semibold">
              Weight: 30%
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={dimScores.research} duration={1100} />
              </h3>
              <span className="text-xs font-mono text-slate-400">/ 333 Points</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                style={{ width: `${(dimScores.research / 333) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Scopus/ESCI publications, IEEE conferences & FDPs.
            </p>
          </div>
        </SpotlightCard>

        {/* Part C: Governance */}
        <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.1)">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-500 uppercase">Part C: Governance</span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
              Weight: 10%
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={dimScores.governance} duration={1200} />
              </h3>
              <span className="text-xs font-mono text-slate-400">/ 333 Points</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
                style={{ width: `${(dimScores.governance / 333) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              BoInfra tasks (13 verified), e-waste & student counseling.
            </p>
          </div>
        </SpotlightCard>

        {/* Aggregate Capped 999 */}
        <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.1)">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-500 uppercase">Total Score (Cap 999)</span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
              Grade {band.grade}
            </span>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={dimScores.total} duration={1300} />
              </h3>
              <span className="text-xs font-mono text-slate-400">/ 999 Max</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" 
                style={{ width: `${(dimScores.total / 999) * 100}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] mt-2">
              <span className="text-slate-600">Standard: <b>{weightedPct}%</b></span>
              <span className="text-emerald-700 font-bold">Context-Fair: <b>{contextAdj.adjustedPercentage}% ({contextAdj.adjustedGrade})</b></span>
            </div>
          </div>
        </SpotlightCard>

      </div>

      {/* Main Content Split: Line Items Audit & Context Disclosures */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Metric Line Items List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Pre-Populated Appraisal Records</h3>
              <p className="text-xs text-slate-500">
                Institutional metric line items. Auto-verified items require no re-compilation.
              </p>
            </div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
            >
              <Plus className="size-3.5" />
              <span>Add Item</span>
            </button>
          </div>

          <div className="space-y-3">
            {items.map((it) => {
              const spotColor = 
                it.dimension === "teaching" ? "rgba(14, 165, 233, 0.1)" :
                it.dimension === "research" ? "rgba(99, 102, 241, 0.1)" :
                "rgba(168, 85, 247, 0.1)";

              return (
                <SpotlightCard
                  key={it.id}
                  spotlightColor={spotColor}
                  className="p-4 rounded-2xl bg-slate-50/70 border-slate-200/80 space-y-2.5 transition-all hover:border-slate-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
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
                      <p className="text-[11px] text-slate-500 mt-1">
                        Source: <span className="text-slate-700 font-mono font-medium">{it.source === "platform" ? "Institutional Data Pipeline" : "Self-Reported"}</span>
                      </p>
                    </div>

                    <div className="text-right whitespace-nowrap">
                      <span className="text-sm font-black text-slate-900 font-mono">{it.verifiedPoints}</span>
                      <span className="text-slate-400 text-xs font-mono"> / {it.maxPoints} pts</span>
                    </div>
                  </div>

                  {/* Functional Evidence Viewer Link */}
                  {it.evidenceName ? (
                    <div
                      onClick={() => handleOpenEvidence(it)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs transition-all cursor-pointer group shadow-2xs"
                      title="Click to view verified institutional document and audit proof"
                    >
                      <div className="flex items-center gap-2 text-slate-700 truncate">
                        <FileText className="size-4 text-indigo-600 flex-shrink-0" />
                        <span className="truncate font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">{it.evidenceName}</span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex-shrink-0">
                          Verified Proof
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenEvidence(it);
                        }}
                        className="text-indigo-700 group-hover:text-indigo-800 flex items-center gap-1 font-semibold ml-2 text-[11px] bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer flex-shrink-0"
                      >
                        <span>View Proof</span>
                        <ExternalLink className="size-3" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleOpenEvidence(it)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-slate-50 border border-dashed border-slate-300 text-xs transition-all cursor-pointer group"
                      title="Click to inspect audit record or attach proof file"
                    >
                      <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-700">
                        <Upload className="size-3.5 text-indigo-600 flex-shrink-0" />
                        <span className="text-[11px]">Audit Record Available • Click to inspect or attach proof</span>
                      </div>
                      <span className="text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1 font-semibold text-[11px]">
                        <span>Open Dossier</span>
                        <ExternalLink className="size-3" />
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                      <ShieldCheck className="size-3.5" />
                      <span>{it.status === "verified" ? "Verified & Locked" : "Self-Submitted Claim"}</span>
                    </span>
                    <span className="font-mono text-slate-400">AY 2024-25</span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        {/* Right Col: Contextual Factors Disclosure & Live Adjustment */}
        <div className="space-y-6">
          
          {/* Context Disclosures Form */}
          <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.09)" className="p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div>
              <div className="flex items-center gap-1.5">
                <Scale className="size-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">Contextual Factors Disclosure</h3>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Disclose your real teaching and administrative duties so research output is evaluated fairly without penalty.
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">Teaching Contact Hours / Week:</span>
                  <span className="font-bold text-slate-900 font-mono">{context.teachingHoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={26}
                  value={context.teachingHoursPerWeek}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const nextContext = { ...context, teachingHoursPerWeek: val };
                    setContext(nextContext);
                  }}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">Course Difficulty Index:</span>
                  <span className="font-bold text-slate-900 font-mono">{context.courseDifficultyIndex} / 5.0</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={0.5}
                  value={context.courseDifficultyIndex}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    const nextContext = { ...context, courseDifficultyIndex: val };
                    setContext(nextContext);
                  }}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">Administrative Burden:</span>
                  <span className="font-bold text-purple-700 font-mono">{context.administrativeBurdenHours} hrs/wk</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={25}
                  value={context.administrativeBurdenHours}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const nextContext = { ...context, administrativeBurdenHours: val };
                    setContext(nextContext);
                  }}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">Remedial Student Intake:</span>
                  <span className="font-bold text-slate-900 font-mono">{context.remedialStudentPercent}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  value={context.remedialStudentPercent}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const nextContext = { ...context, remedialStudentPercent: val };
                    setContext(nextContext);
                  }}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Live Context Impact Result */}
            <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 space-y-2">
              <div className="flex justify-between font-bold">
                <span>Effective Fair Grade:</span>
                <span className="text-emerald-700 font-mono font-black text-sm">
                  Grade {contextAdj.adjustedGrade} ({contextAdj.adjustedPercentage}%)
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Fair Contribution Lift: <b className="text-emerald-700 font-mono">+{contextAdj.factors.totalCompensation}%</b> compensation applied for heavy service bandwidth.
              </p>
            </div>
          </SpotlightCard>

          {/* Strengths & Diagnostic Development */}
          <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.08)" className="p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Individual Strengths & Roadmaps</h3>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-emerald-700 uppercase font-bold block">Key Strengths:</span>
              <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
                {faculty.strengths.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-mono text-amber-700 uppercase font-bold block">Development Priority:</span>
              <div className="space-y-2">
                {faculty.developmentAreas.map((d) => (
                  <div key={d.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-900 block">{d.title}</span>
                    <p className="text-slate-600 text-[11px]">{d.recommendedAction}</p>
                    <span className="text-[10px] font-mono text-indigo-600 block">Target: {d.timeline}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

        </div>

      </div>

      {/* Modal: Add Item with Evidence */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsAddModalOpen(false);
          }}
        >
          <div 
            className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-5 shadow-2xl animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Plus className="size-5 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">Add Uncaptured Appraisal Line Item</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <span className="text-xs font-mono font-semibold px-1">Esc</span>
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-700 font-semibold block mb-1">Target Appraisal Dimension:</label>
                <select
                  value={newItemDim}
                  onChange={(e) => setNewItemDim(e.target.value as any)}
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-indigo-500"
                >
                  <option value="research">Part B: Research & Development</option>
                  <option value="teaching">Part A: Teaching-Learning</option>
                  <option value="governance">Part C: Institutional Governance</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">Achievement / Metric Name:</label>
                <input
                  type="text"
                  required
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="e.g. Published Patent in Indian Patent Journal, Industry Guest Lecture..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">Claimed Points (Max per Rubric):</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={newItemPoints}
                  onChange={(e) => setNewItemPoints(parseInt(e.target.value) || 0)}
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">Upload Supporting Document / Certificate (Optional):</label>
                <div className="space-y-2">
                  <input
                    type="file"
                    id="new-item-file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.txt"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setUploadedFile(file);
                      if (!newItemEvidenceName.trim()) {
                        setNewItemEvidenceName(file.name);
                      }
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        setUploadedFileDataUrl((ev.target?.result as string) || "");
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                  <label
                    htmlFor="new-item-file"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-700 transition-all cursor-pointer text-xs"
                  >
                    <Upload className="size-4 text-indigo-600" />
                    <span>{uploadedFile ? `Attached: ${uploadedFile.name} (${Math.round(uploadedFile.size / 1024)} KB)` : "Choose PDF, Image, or Certificate File..."}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">Supporting Document / Evidence Name:</label>
                <input
                  type="text"
                  value={newItemEvidenceName}
                  onChange={(e) => setNewItemEvidenceName(e.target.value)}
                  placeholder="e.g. Patent_Gazette_Notification_2025.pdf"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">Supporting Notes & Rationale:</label>
                <textarea
                  rows={3}
                  value={newItemNotes}
                  onChange={(e) => setNewItemNotes(e.target.value)}
                  placeholder="Briefly explain the institutional benefit, external agency, or date of achievement..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer shadow-xs"
                >
                  Submit Item with Evidence
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Evidence Viewer Modal */}
      <EvidenceViewerModal
        isOpen={isEvidenceModalOpen}
        item={viewingEvidenceItem}
        faculty={faculty}
        onClose={() => {
          setIsEvidenceModalOpen(false);
          setViewingEvidenceItem(null);
        }}
        onUpdateItem={handleUpdateItem}
      />

    </div>
  );
};
