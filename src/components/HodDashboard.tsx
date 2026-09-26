import React, { useState, useEffect, useRef, useMemo } from "react";
import anime from "animejs";
import { 
  Users, Award, Scale, BookOpen, Search, Filter, ArrowUpRight, 
  CheckCircle2, Clock, AlertCircle, FileText, ChevronRight, 
  ExternalLink, Sparkles, TrendingUp, Info, HelpCircle
} from "lucide-react";
import { FacultyRecord } from "../types";
import { AnimatedCounter } from "./reactbits/AnimatedCounter";
import { SpotlightCard } from "./reactbits/SpotlightCard";
import { InstitutionalAnalyticsCard } from "./analytics/InstitutionalAnalyticsCard";

interface HodDashboardProps {
  cohort: FacultyRecord[];
  onSelectFacultyForReview: (faculty: FacultyRecord) => void;
  onOpenAppraisalBrief: (faculty: FacultyRecord) => void;
  onOpenFacultyPortal: (faculty: FacultyRecord) => void;
}

interface PositionedPoint {
  faculty: FacultyRecord;
  x: number;
  y: number;
  isKiran: boolean;
  isElevated: boolean;
  totalLoad: number;
}

// 2D Circle Repulsion Relaxation algorithm so no two points ever overlap
const getDeoverlappedPoints = (cohort: FacultyRecord[]): PositionedPoint[] => {
  const pts: PositionedPoint[] = cohort.map((f) => {
    const totalLoad = f.context.teachingHoursPerWeek + f.context.administrativeBurdenHours;
    const isKiran = f.empId === "1913";
    const isElevated = f.contextAdjustedGrade !== f.grade;
    // Map Domain: Load [16, 40] -> x: [8%, 92%]
    // Map Domain: Research [95, 255] -> y: [12%, 88%]
    const x = Math.min(92, Math.max(8, ((totalLoad - 16) / 24) * 84 + 8));
    const y = Math.min(88, Math.max(12, ((f.verifiedScores.research - 95) / 160) * 76 + 12));
    return { faculty: f, x, y, isKiran, isElevated, totalLoad };
  });

  // Repulsion passes to maintain minimum distance
  const minDistance = 4.2; // coordinate %
  for (let iter = 0; iter < 30; iter++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[j].x - pts[i].x;
        const dy = pts[j].y - pts[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

        if (dist < minDistance) {
          const overlap = (minDistance - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;

          if (!pts[i].isKiran) {
            pts[i].x = Math.max(6, Math.min(94, pts[i].x - nx * overlap));
            pts[i].y = Math.max(8, Math.min(90, pts[i].y - ny * overlap));
          }
          if (!pts[j].isKiran) {
            pts[j].x = Math.max(6, Math.min(94, pts[j].x + nx * overlap));
            pts[j].y = Math.max(8, Math.min(90, pts[j].y + ny * overlap));
          }
        }
      }
    }
  }

  return pts;
};

export const HodDashboard: React.FC<HodDashboardProps> = ({
  cohort,
  onSelectFacultyForReview,
  onOpenAppraisalBrief,
  onOpenFacultyPortal,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "elevated" | "high_admin" | "pending">("all");
  const [hoveredPoint, setHoveredPoint] = useState<PositionedPoint | null>(null);
  const tableRef = useRef<HTMLTableSectionElement>(null);

  // Compute collision-free points
  const deoverlappedPoints = useMemo(() => getDeoverlappedPoints(cohort), [cohort]);

  // Filter cohort
  const filteredCohort = cohort.filter((f) => {
    const matchesSearch = 
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.empId.includes(searchTerm) ||
      f.designation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === "all" || f.level === selectedLevel;

    const matchesType = 
      selectedFilter === "all" ||
      (selectedFilter === "elevated" && f.contextAdjustedGrade !== f.grade) ||
      (selectedFilter === "high_admin" && f.context.administrativeBurdenHours >= 12) ||
      (selectedFilter === "pending" && f.verificationStatus !== "hod_approved");

    return matchesSearch && matchesLevel && matchesType;
  });

  // Animate table rows on mount / filter change
  useEffect(() => {
    if (!tableRef.current) return;
    const rows = tableRef.current.querySelectorAll(".faculty-row");
    anime({
      targets: rows,
      opacity: [0, 1],
      translateY: [8, 0],
      delay: anime.stagger(25),
      duration: 400,
      easing: "easeOutCubic",
    });
  }, [searchTerm, selectedLevel, selectedFilter]);

  // Calculations
  const totalFaculty = cohort.length;
  const avgRawScore = Math.round(cohort.reduce((acc, f) => acc + f.verifiedScores.total, 0) / totalFaculty);
  const avgWeightedPct = parseFloat((cohort.reduce((acc, f) => acc + f.weightedPercentage, 0) / totalFaculty).toFixed(1));
  const avgAdjustedPct = parseFloat((cohort.reduce((acc, f) => acc + f.contextAdjustedPercentage, 0) / totalFaculty).toFixed(1));
  const elevatedCount = cohort.filter((f) => f.contextAdjustedGrade !== f.grade).length;
  const highAdminCount = cohort.filter((f) => f.context.administrativeBurdenHours >= 12).length;

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner with HOD Vision (Clean Minimal Light) */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-r from-white via-indigo-50/40 to-slate-50 p-7 sm:p-8 shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
              <Sparkles className="size-3.5 text-indigo-600" />
              <span>Institutional Appraisal System AY 2024-25 & 2025</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Department of Computer Science & Engineering
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Executive oversight console for Head of Department (HOD: <span className="font-semibold text-slate-900">Dr. S V Phani Kumar</span>). Review verified platform data, contextualize teaching and administrative loads against research outputs, and certify outcome grades capped at 999 points.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200/90 text-center min-w-[125px] shadow-2xs">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-medium">Department</span>
              <span className="text-2xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={totalFaculty} duration={1000} />
              </span>
              <span className="text-[10px] text-indigo-600 font-semibold block">All Enrolled</span>
            </div>

            <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200/90 text-center min-w-[125px] shadow-2xs">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-medium">Raw Avg</span>
              <span className="text-2xl font-black text-slate-900 font-mono">
                <AnimatedCounter value={avgRawScore} duration={1200} suffix="/999" />
              </span>
              <span className="text-[10px] text-blue-600 font-semibold block">{avgWeightedPct}% Weighted</span>
            </div>

            <div className="bg-white px-4 py-3 rounded-2xl border border-indigo-200/80 text-center min-w-[125px] bg-gradient-to-b from-indigo-50/50 to-white shadow-2xs">
              <span className="text-[11px] font-mono text-indigo-700 uppercase tracking-wider block font-bold">Context-Fair</span>
              <span className="text-2xl font-black text-indigo-600 font-mono">
                <AnimatedCounter value={avgAdjustedPct} duration={1400} suffix="%" decimals={1} />
              </span>
              <span className="text-[10px] text-emerald-600 font-bold block">+{parseFloat((avgAdjustedPct - avgWeightedPct).toFixed(1))}% Equity Lift</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid (Minimal Light with Interactive Spotlight Hover) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.12)" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cohort Size</span>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Users className="size-4.5" />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-3xl font-black text-slate-900 font-mono">
              <AnimatedCounter value={totalFaculty} duration={900} />
            </h3>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500"></span>
              <span>42 Full-time CSE Teaching Faculty</span>
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(14, 165, 233, 0.12)" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Teaching-Learning Efficacy</span>
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
              <BookOpen className="size-4.5" />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-3xl font-black text-slate-900 font-mono">
              <AnimatedCounter value={288} suffix="/333" duration={1100} />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              <span className="text-cyan-600 font-semibold">86.5%</span> avg attainment in Part A
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.12)" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Heavy Admin Burden</span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
              <Scale className="size-4.5" />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-3xl font-black text-slate-900 font-mono">
              <AnimatedCounter value={highAdminCount} duration={1200} />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Carrying &ge;12 hrs/wk institutional governance
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.12)" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contextually Elevated</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <Award className="size-4.5" />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-3xl font-black text-slate-900 font-mono">
              <AnimatedCounter value={elevatedCount} duration={1300} />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Shielded from heavy workload penalties
            </p>
          </div>
        </SpotlightCard>
      </div>

      {/* Analytical Charts Component with Scrollable Faculty 999 Score Graph */}
      <InstitutionalAnalyticsCard 
        cohort={cohort} 
        onSelectFacultyForReview={onSelectFacultyForReview} 
      />

      {/* Contextual Equity Matrix & Grade Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Contextual Equity Matrix */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Contextual Equity Matrix (Load vs Research Output)
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                  Algorithmic Safeguard
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Displays faculty positioning. High institutional service & teaching load are normalized so heavy admin is not penalized on research output.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="size-3 rounded-full bg-indigo-600 ring-2 ring-indigo-200"></span>
                <span>Kiran Kumar (EMP 1913)</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-700 font-medium">
                <span className="size-2.5 rounded-full bg-amber-500 ring-2 ring-amber-200"></span>
                <span>Context-Elevated</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="size-2.5 rounded-full bg-cyan-600"></span>
                <span>Standard Rubric</span>
              </span>
            </div>
          </div>

          {/* Scatter Chart Representation - Spacious h-[440px] and overflow-visible for tooltips */}
          <div className="relative h-[440px] w-full bg-slate-50/70 rounded-2xl border border-slate-200 p-4 flex flex-col justify-between overflow-visible">
            {/* Background quadrant zones & reference grid */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 rounded-2xl overflow-hidden pointer-events-none">
              {/* Q2: Top-Left (Research Intensive) */}
              <div className="bg-sky-50/30 border-r border-b border-dashed border-slate-200 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-sky-800 uppercase font-mono font-bold tracking-wider">
                    Q2: Research Intensive
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">High R&D • Standard Load</span>
                </div>
              </div>

              {/* Q1: Top-Right (Star Performers) */}
              <div className="bg-emerald-50/30 border-b border-dashed border-slate-200 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-400 font-mono">High R&D • High Load</span>
                  <span className="text-[10px] text-emerald-800 uppercase font-mono font-bold tracking-wider">
                    Q1: Star Performers
                  </span>
                </div>
              </div>

              {/* Q3: Bottom-Left (Core Growth) */}
              <div className="bg-slate-100/40 border-r border-dashed border-slate-200 p-3 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold tracking-wider">
                    Q3: Core Development
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">Baseline R&D • Standard Load</span>
                </div>
              </div>

              {/* Q4: Bottom-Right (Institutional Anchors) */}
              <div className="bg-indigo-50/30 p-3 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-indigo-600/70 font-mono font-medium">Context Safeguarded</span>
                  <span className="text-[10px] text-indigo-800 uppercase font-mono font-bold tracking-wider">
                    Q4: Institutional Anchors
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle horizontal & vertical metric guide ticks */}
            <div className="absolute inset-x-4 top-1/2 border-t border-dashed border-slate-300 pointer-events-none" />
            <div className="absolute inset-y-4 left-1/2 border-l border-dashed border-slate-300 pointer-events-none" />

            {/* Plotted Points (Rendered using collision-free coordinates) */}
            <div className="relative size-full z-10">
              {deoverlappedPoints.map((pt) => {
                const f = pt.faculty;
                const isKiran = f.empId === "1913";
                const isElevated = f.contextAdjustedGrade !== f.grade;

                return (
                  <div
                    key={f.empId}
                    className="absolute -translate-x-1/2 translate-y-1/2 group z-20"
                    style={{
                      left: `${pt.x}%`,
                      bottom: `${pt.y}%`,
                    }}
                  >
                    {/* Faculty Point Button */}
                    <button
                      onClick={() => onSelectFacultyForReview(f)}
                      onMouseEnter={() => setHoveredPoint(pt)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className={`relative transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center ${
                        isKiran
                          ? "size-6 bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-500 ring-4 ring-indigo-200 shadow-md shadow-indigo-500/30 animate-pulse z-30 scale-110"
                          : isElevated
                          ? "size-3.5 bg-amber-500 hover:bg-amber-600 ring-2 ring-amber-200 hover:scale-150 hover:z-40 shadow-xs"
                          : "size-3 bg-cyan-600/90 hover:bg-cyan-700 ring-1 ring-cyan-200 hover:scale-150 hover:z-40"
                      }`}
                      aria-label={`${f.name} - Research ${f.verifiedScores.research}, Load ${pt.totalLoad}h`}
                    >
                      {isKiran && <span className="text-[9px] font-black text-white leading-none">★</span>}
                    </button>
                  </div>
                );
              })}

              {/* Decoupled Root-Level Tooltip Overlay (Never covered by sibling points) */}
              {hoveredPoint && (
                <div
                  className={`absolute pointer-events-none z-50 transition-all duration-150 ${
                    hoveredPoint.y > 52
                      ? "top-full mt-3"
                      : "bottom-full mb-3"
                  } ${
                    hoveredPoint.x > 75
                      ? "right-0 translate-x-0"
                      : hoveredPoint.x < 25
                      ? "left-0 translate-x-0"
                      : "left-1/2 -translate-x-1/2"
                  }`}
                  style={{
                    left: hoveredPoint.x <= 75 ? `${hoveredPoint.x}%` : undefined,
                    right: hoveredPoint.x > 75 ? `${100 - hoveredPoint.x}%` : undefined,
                    bottom: hoveredPoint.y <= 52 ? `${hoveredPoint.y}%` : undefined,
                    top: hoveredPoint.y > 52 ? `${100 - hoveredPoint.y}%` : undefined,
                  }}
                >
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 text-left whitespace-nowrap shadow-xl min-w-[230px] text-xs text-slate-800 ring-1 ring-slate-900/5">
                    <div className="flex items-center justify-between gap-3 pb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-bold text-slate-900 truncate max-w-[150px]">
                          {hoveredPoint.faculty.name}
                        </span>
                        {hoveredPoint.faculty.empId === "1913" && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                            Target
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">EMP {hoveredPoint.faculty.empId}</span>
                    </div>

                    <div className="space-y-1.5 pt-2 text-[11px]">
                      <div className="flex items-center justify-between gap-4 text-slate-600">
                        <span>Total Load:</span>
                        <span className="font-mono font-semibold text-slate-900">
                          {hoveredPoint.totalLoad} hrs/wk ({hoveredPoint.faculty.context.administrativeBurdenHours}h admin)
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-slate-600">
                        <span>R&D Output:</span>
                        <span className="font-mono font-bold text-indigo-600">
                          {hoveredPoint.faculty.verifiedScores.research} / 333 marks
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 pt-1.5 border-t border-slate-100">
                        <span>Outcome:</span>
                        <span className={`font-semibold font-mono ${
                          hoveredPoint.faculty.contextAdjustedGrade !== hoveredPoint.faculty.grade 
                            ? "text-amber-600" 
                            : "text-emerald-600"
                        }`}>
                          Grade {hoveredPoint.faculty.grade} {hoveredPoint.faculty.contextAdjustedGrade !== hoveredPoint.faculty.grade ? `→ ${hoveredPoint.faculty.contextAdjustedGrade} (Shielded)` : `(${hoveredPoint.faculty.weightedPercentage}%)`}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-slate-100 text-[10px] text-indigo-600 font-medium text-center">
                      Click point to inspect faculty & review &rarr;
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Axis Labels & Values */}
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-200 bg-white/80 -mx-4 -mb-4 px-4 py-2.5 rounded-b-2xl">
              <span className="flex items-center gap-1">&larr; Standard Load (16-20 hrs/wk)</span>
              <span className="font-bold text-slate-700 uppercase tracking-wider">
                Total Service Bandwidth (Teaching Contact + Institutional Admin)
              </span>
              <span className="flex items-center gap-1">Heavy Institutional Service (35-40+ hrs/wk) &rarr;</span>
            </div>
          </div>

          {/* Matrix Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Info className="size-3.5 text-indigo-600" />
              <span>Hover any point to inspect workload vs research. Click to open comprehensive review.</span>
            </span>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-amber-700 font-medium">
                <span className="size-2 rounded-full bg-amber-500"></span>
                <span>Context Safeguard Applied</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-700 font-medium">
                <span className="size-2 rounded-full bg-cyan-600"></span>
                <span>Standard Rubric</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grade Distribution Breakdown (Clean Minimal Light UI) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Grade Distribution</h3>
              <span className="text-xs font-mono text-slate-500 font-semibold">42 Faculty</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Comparison between Standard Rubric scoring and Context-Fair scoring bands.
            </p>

            <div className="mt-5 space-y-3.5">
              {[
                { grade: "A+", label: "Outstanding (>=85%)", raw: 2, adj: 6, color: "from-emerald-500 to-teal-500" },
                { grade: "A", label: "Excellent (75-84.9%)", raw: 7, adj: 14, color: "from-blue-500 to-cyan-500" },
                { grade: "B++", label: "Very Good (65-74.9%)", raw: 15, adj: 16, color: "from-indigo-500 to-blue-500" },
                { grade: "B+", label: "Satisfactory (55-64.9%)", raw: 14, adj: 5, color: "from-amber-500 to-yellow-500" },
                { grade: "B", label: "Marginal (45-54.9%)", raw: 3, adj: 1, color: "from-orange-500 to-amber-500" },
                { grade: "C", label: "Improvement (<45%)", raw: 1, adj: 0, color: "from-rose-500 to-red-500" },
              ].map((b) => (
                <div key={b.grade} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-indigo-600"></span>
                      Grade {b.grade} ({b.label.split(" ")[0]})
                    </span>
                    <span className="font-mono text-slate-600">
                      Standard: <b className="text-slate-400">{b.raw}</b> &rarr; Context: <b className="text-emerald-600">{b.adj}</b>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                    <div 
                      className={`h-full bg-gradient-to-r ${b.color} transition-all duration-700`} 
                      style={{ width: `${(b.adj / 42) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 leading-relaxed">
            <span className="font-bold text-slate-900 block mb-0.5">Contextual Equity Impact:</span>
            {elevatedCount} faculty carrying substantial governance/counseling responsibilities transitioned into higher merit tiers.
          </div>
        </div>

      </div>

      {/* Cohort Table with Search, Filter & Quick Verification (Minimal Light UI) */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              CSE Faculty Appraisal Matrix (42 Profiles Grounded in Verified Data)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Every dimension pre-populated from platform data. Click any faculty profile to inspect evidence, adjust HOD marks, or issue formal outcome briefs.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search faculty name, EMP ID..."
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-60 shadow-2xs"
              />
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer shadow-2xs"
            >
              <option value="all">All Levels (10- to 14)</option>
              <option value="Level 14">Level 14 (Professors)</option>
              <option value="Level 12">Level 12 (Assoc Prof)</option>
              <option value="Level 11">Level 11 (Senior Asst Prof)</option>
              <option value="Level 10">Level 10 (Asst Prof)</option>
              <option value="Level 10-">Level 10- (Entry Asst Prof)</option>
            </select>

            {/* Quick Filter Pill */}
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200/80 p-1 rounded-xl">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  selectedFilter === "all" ? "bg-white text-indigo-700 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFilter("elevated")}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  selectedFilter === "elevated" ? "bg-white text-indigo-700 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Context Boosted
              </button>
              <button
                onClick={() => setSelectedFilter("high_admin")}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  selectedFilter === "high_admin" ? "bg-white text-indigo-700 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                High Admin
              </button>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                <th className="py-3.5 px-4 font-semibold">Faculty Member</th>
                <th className="py-3.5 px-3 font-semibold">Level & Role</th>
                <th className="py-3.5 px-3 font-semibold text-center">Part A (TL) <br/><span className="text-[9px] text-slate-400 font-normal">Max 333</span></th>
                <th className="py-3.5 px-3 font-semibold text-center">Part B (R&D) <br/><span className="text-[9px] text-slate-400 font-normal">Max 333</span></th>
                <th className="py-3.5 px-3 font-semibold text-center">Part C (Gov) <br/><span className="text-[9px] text-slate-400 font-normal">Max 333</span></th>
                <th className="py-3.5 px-3 font-semibold text-center">Raw Aggregate <br/><span className="text-[9px] text-slate-400 font-normal">Max 999</span></th>
                <th className="py-3.5 px-3 font-semibold text-center">Weighted % & Grade</th>
                <th className="py-3.5 px-3 font-semibold text-center">Context-Fair Grade</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody ref={tableRef} className="divide-y divide-slate-100 text-xs">
              {filteredCohort.map((faculty) => {
                const isKiran = faculty.empId === "1913";
                const isElevated = faculty.contextAdjustedGrade !== faculty.grade;

                return (
                  <tr
                    key={faculty.empId}
                    className={`faculty-row group transition-colors hover:bg-slate-50/80 ${
                      isKiran ? "bg-indigo-50/40 border-l-4 border-l-indigo-600" : ""
                    }`}
                  >
                    {/* Faculty Profile */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`size-9 rounded-xl flex items-center justify-center font-bold text-xs uppercase shadow-xs ${
                          isKiran 
                            ? "bg-gradient-to-tr from-indigo-600 to-cyan-600 text-white ring-2 ring-indigo-200" 
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}>
                          {faculty.name.replace("Dr. ", "").replace("Prof. ", "").replace("Mr. ", "").replace("Ms. ", "").slice(0, 2)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {faculty.name}
                            </span>
                            {isKiran && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                                Target Focus
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-0.5">
                            <span>EMP {faculty.empId}</span>
                            <span>•</span>
                            <span>{faculty.qualification}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Level */}
                    <td className="py-3.5 px-3">
                      <span className="inline-block px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                        {faculty.level}
                      </span>
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate max-w-[130px]">
                        {faculty.designation}
                      </p>
                    </td>

                    {/* Teaching (333) */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      <span className="font-bold text-slate-800">{faculty.verifiedScores.teaching}</span>
                      <span className="text-slate-400 text-[10px]">/333</span>
                    </td>

                    {/* Research (333) */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      <span className="font-bold text-slate-800">{faculty.verifiedScores.research}</span>
                      <span className="text-slate-400 text-[10px]">/333</span>
                    </td>

                    {/* Governance (333) */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      <span className="font-bold text-slate-800">{faculty.verifiedScores.governance}</span>
                      <span className="text-slate-400 text-[10px]">/333</span>
                      {faculty.context.administrativeBurdenHours >= 12 && (
                        <span className="block text-[9px] text-purple-700 font-sans font-medium">
                          {faculty.context.administrativeBurdenHours}h admin
                        </span>
                      )}
                    </td>

                    {/* Raw Aggregate (Capped 999) */}
                    <td className="py-3.5 px-3 text-center font-mono">
                      <span className="font-black text-slate-900 text-sm bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                        {faculty.verifiedScores.total}
                      </span>
                    </td>

                    {/* Weighted % & Grade */}
                    <td className="py-3.5 px-3 text-center">
                      <span className="font-mono text-slate-700 font-semibold">{faculty.weightedPercentage}%</span>
                      <div className="mt-0.5">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          faculty.grade === "A+" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                          faculty.grade === "A" ? "bg-blue-50 text-blue-700 border border-blue-200" :
                          faculty.grade === "B++" ? "bg-indigo-50 text-indigo-700 border border-indigo-200" :
                          faculty.grade === "B+" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                          "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}>
                          Grade {faculty.grade}
                        </span>
                      </div>
                    </td>

                    {/* Context-Fair Grade */}
                    <td className="py-3.5 px-3 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                          isElevated
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs"
                            : "bg-slate-100 text-slate-700"
                        }`}>
                          {isElevated && <TrendingUp className="size-3 text-emerald-600" />}
                          Grade {faculty.contextAdjustedGrade}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {faculty.contextAdjustedPercentage}%
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onSelectFacultyForReview(faculty)}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                          title="Review Platform Data, Self Submissions & HOD Score"
                        >
                          <span>Review</span>
                          <ChevronRight className="size-3.5" />
                        </button>

                        <button
                          onClick={() => onOpenAppraisalBrief(faculty)}
                          className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                          title="Generate Formal Appraisal Brief & Outcome Record"
                        >
                          <FileText className="size-3.5 text-indigo-600" />
                          <span>Brief</span>
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
