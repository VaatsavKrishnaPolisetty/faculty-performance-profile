import React, { useState, useRef, useMemo } from "react";
import { 
  Filter, ArrowUpDown, ChevronLeft, ChevronRight, Search, 
  Sparkles, CheckCircle2, Award, User, HelpCircle, Layers
} from "lucide-react";
import { FacultyRecord } from "../../types";
import { SpotlightCard } from "../reactbits/SpotlightCard";

interface InstitutionalAnalyticsCardProps {
  cohort: FacultyRecord[];
  onSelectFacultyForReview?: (faculty: FacultyRecord) => void;
}

export const InstitutionalAnalyticsCard: React.FC<InstitutionalAnalyticsCardProps> = ({ 
  cohort,
  onSelectFacultyForReview 
}) => {
  const total = cohort.length;
  const elevated = cohort.filter((f) => f.contextAdjustedGrade !== f.grade);
  const standard = cohort.filter((f) => f.contextAdjustedGrade === f.grade);

  // Star performers in Quadrant 1 (high load & high research)
  const starPerformers = cohort.filter((f) => {
    const totalLoad = f.context.teachingHoursPerWeek + f.context.administrativeBurdenHours;
    return totalLoad >= 28 && f.verifiedScores.research >= 150;
  });

  // Average dimension scores
  const avgTeaching = Math.round(cohort.reduce((acc, f) => acc + f.verifiedScores.teaching, 0) / total);
  const avgResearch = Math.round(cohort.reduce((acc, f) => acc + f.verifiedScores.research, 0) / total);
  const avgGovernance = Math.round(cohort.reduce((acc, f) => acc + f.verifiedScores.governance, 0) / total);

  // Donut Chart calculations
  const elevatedPct = (elevated.length / total) * 100;
  const standardPct = (standard.length / total) * 100;

  // SVG Donut geometry
  const radius = 54;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;
  const standardStroke = (standardPct / 100) * circumference;
  const elevatedStroke = (elevatedPct / 100) * circumference;

  // State for Faculty Score 999 Chart
  const [selectedLevel, setSelectedLevel] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"HIGH_TO_LOW" | "LOW_TO_HIGH" | "NAME_AZ">("HIGH_TO_LOW");
  const [colorMode, setColorMode] = useState<"DIMENSIONS" | "STANDARD_VS_SHIELDED">("DIMENSIONS");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredFaculty, setHoveredFaculty] = useState<FacultyRecord | null>(null);

  // Scroll container ref for arrow navigation
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Levels for filter dropdown / pills
  const availableLevels = useMemo(() => {
    const set = new Set<string>();
    cohort.forEach((f) => set.add(f.level));
    return Array.from(set).sort();
  }, [cohort]);

  // Filtered & Sorted Faculty
  const filteredFaculty = useMemo(() => {
    let list = [...cohort];
    
    if (selectedLevel !== "ALL") {
      list = list.filter((f) => f.level === selectedLevel);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((f) => 
        f.name.toLowerCase().includes(q) || 
        f.empId.includes(q) ||
        f.designation.toLowerCase().includes(q)
      );
    }

    if (sortOrder === "HIGH_TO_LOW") {
      list.sort((a, b) => b.contextAdjustedScore - a.contextAdjustedScore);
    } else if (sortOrder === "LOW_TO_HIGH") {
      list.sort((a, b) => a.contextAdjustedScore - b.contextAdjustedScore);
    } else if (sortOrder === "NAME_AZ") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [cohort, selectedLevel, searchQuery, sortOrder]);

  // Ticks on Y-axis for 999 cap
  const yAxisTicks = [
    { value: 999, label: "999" },
    { value: 800, label: "800" },
    { value: 600, label: "600" },
    { value: 400, label: "400" },
    { value: 200, label: "200" },
    { value: 0, label: "0" },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs space-y-8">
      
      {/* Header with Title and Reference Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Institutional Appraisal Analysis
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
              999 Max Score Model
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Cohort outcome ratios, score threshold correlations, and faculty-by-faculty score divisions
          </p>
        </div>

        {/* Right Badges */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500"></span>
            Context Safeguard: {Math.round(elevatedPct)}% ({elevated.length}/{total})
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 shadow-2xs flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-purple-500"></span>
            {starPerformers.length} Star Performers (Q1)
          </span>
        </div>
      </div>

      {/* Top High-Level Analytics: Donut Ring Chart + Dimension Progress with Spotlight Hover */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 border-b border-slate-100">
        
        {/* Outcome Status Donut Chart */}
        <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.08)" className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-800 tracking-wide block">
            Outcome Status Distribution
          </span>

          <div className="my-auto py-4 flex flex-col items-center justify-center">
            <div className="relative size-40 flex items-center justify-center">
              <svg className="size-full -rotate-90" viewBox="0 0 140 140">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth={strokeWidth}
                />
                {/* Standard Segment (Coral / Pink from reference image) */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#fb7185"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${standardStroke} ${circumference}`}
                  strokeDashoffset="0"
                  className="transition-all duration-700 ease-out"
                />
                {/* Context Elevated Segment (Emerald Green from reference image) */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${elevatedStroke} ${circumference}`}
                  strokeDashoffset={-standardStroke}
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-2xl font-black text-slate-900 font-mono leading-none">
                  {total}
                </span>
                <span className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  Evaluated
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-4 text-xs">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="size-2.5 rounded-full bg-[#10b981]"></span>
                <span>Context Shielded: {elevated.length}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="size-2.5 rounded-full bg-[#fb7185]"></span>
                <span>Standard Rubric: {standard.length}</span>
              </span>
            </div>
          </div>
        </SpotlightCard>

        {/* Dimension Attainment Distribution & Breakdown */}
        <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.08)" className="lg:col-span-8 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 tracking-wide block">
                  Institutional Dimension Attainment
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">Average marks achieved across cohort dimensions</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Total Cap: 999 Marks
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {/* Teaching Progress */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-500"></span>
                    Part A: Teaching & Course Delivery
                  </span>
                  <span className="font-mono font-bold text-blue-600">
                    {avgTeaching} <span className="text-slate-400 font-normal">/ 333 marks</span>
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${(avgTeaching / 333) * 100}%` }}
                  />
                </div>
              </div>

              {/* Research Progress */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-purple-600"></span>
                    Part B: Research, Publications & IP
                  </span>
                  <span className="font-mono font-bold text-purple-600">
                    {avgResearch} <span className="text-slate-400 font-normal">/ 333 marks</span>
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 rounded-full transition-all duration-700"
                    style={{ width: `${(avgResearch / 333) * 100}%` }}
                  />
                </div>
              </div>

              {/* Governance Progress */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500"></span>
                    Part C: Institutional Service & Governance
                  </span>
                  <span className="font-mono font-bold text-amber-600">
                    {avgGovernance} <span className="text-slate-400 font-normal">/ 333 marks</span>
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-700"
                    style={{ width: `${(avgGovernance / 333) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400 block font-medium">Cohort Mean Score</span>
              <span className="text-sm font-bold font-mono text-slate-800 mt-0.5 block">
                {Math.round(cohort.reduce((a, b) => a + b.contextAdjustedScore, 0) / total)} / 999
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400 block font-medium">Highest Attained</span>
              <span className="text-sm font-bold font-mono text-emerald-600 mt-0.5 block">
                {Math.max(...cohort.map((f) => f.contextAdjustedScore))} / 999
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-400 block font-medium">Safeguard Delta</span>
              <span className="text-sm font-bold font-mono text-indigo-600 mt-0.5 block">
                +{Math.round(cohort.reduce((a, b) => a + Math.max(0, b.contextAdjustedScore - b.verifiedScores.total), 0) / total)} avg pts
              </span>
            </div>
          </div>
        </SpotlightCard>

      </div>

      {/* Main Section: Interactive Scrollable Faculty Bar Graph (X-Axis: Faculty Name, Y-Axis: 999 Score) */}
      <div className="space-y-4">
        
        {/* Controls Bar: Title, Filters, Sorting, Mode, Search, Scroll Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
          
          {/* Title & Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Appraisal by Score (999 Cap)
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                {filteredFaculty.length} of {total} Faculty
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              X-Axis: Faculty Name • Y-Axis: Score of 999 • Scroll horizontally to inspect all faculty
            </span>
          </div>

          {/* Filtering & Sorting Controls */}
          <div className="flex items-center gap-2.5 flex-wrap">
            
            {/* Filter by Level */}
            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <Filter className="size-3.5 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="text-xs font-semibold text-slate-800 bg-transparent outline-none cursor-pointer"
              >
                <option value="ALL">All Levels ({total})</option>
                {availableLevels.map((lvl) => {
                  const count = cohort.filter((f) => f.level === lvl).length;
                  return (
                    <option key={lvl} value={lvl}>
                      {lvl} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Sort by Score: High to Low & Low to High */}
            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <ArrowUpDown className="size-3.5 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="text-xs font-semibold text-slate-800 bg-transparent outline-none cursor-pointer"
              >
                <option value="HIGH_TO_LOW">Score: High to Low ↓</option>
                <option value="LOW_TO_HIGH">Score: Low to High ↑</option>
                <option value="NAME_AZ">Faculty Name: A → Z</option>
              </select>
            </div>

            {/* Division Color Mode Toggle */}
            <div className="flex items-center bg-white p-0.5 rounded-xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setColorMode("DIMENSIONS")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  colorMode === "DIMENSIONS"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Dimensions (A+B+C)
              </button>
              <button
                onClick={() => setColorMode("STANDARD_VS_SHIELDED")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  colorMode === "STANDARD_VS_SHIELDED"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Standard vs Shielded
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty..."
                className="pl-7 pr-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-2xs w-32 sm:w-40"
              />
            </div>

            {/* Horizontal Scroll Arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleScroll("left")}
                title="Scroll left"
                className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 cursor-pointer shadow-2xs transition-colors"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                title="Scroll right"
                className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 cursor-pointer shadow-2xs transition-colors"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Graph Area: Fixed Y-Axis on left + Horizontal Scroll Canvas */}
        <div className="relative border border-slate-200 rounded-2xl bg-white p-4 pt-6 shadow-2xs overflow-hidden">
          
          <div className="flex">
            
            {/* Pinned Left Y-Axis (Score of 999) */}
            <div className="w-14 flex-shrink-0 flex flex-col justify-between h-72 border-r border-slate-200 pr-2 py-1 select-none text-right">
              {yAxisTicks.map((tick) => (
                <div key={tick.value} className="flex items-center justify-end gap-1.5 text-[10px] font-mono font-medium text-slate-400">
                  <span>{tick.label}</span>
                  <span className="w-1 h-px bg-slate-300"></span>
                </div>
              ))}
            </div>

            {/* Scrollable Graph Body */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300 pb-4 relative pl-3"
            >
              <div 
                className="relative h-72 flex items-end"
                style={{ 
                  minWidth: `${Math.max(filteredFaculty.length * 68, 600)}px` 
                }}
              >
                
                {/* Dashed Horizontal Gridlines matching reference image */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-1">
                  {yAxisTicks.map((tick, idx) => (
                    <div 
                      key={tick.value} 
                      className={`w-full ${idx === yAxisTicks.length - 1 ? "border-b border-slate-300" : "border-b border-dashed border-slate-150"}`}
                    />
                  ))}
                </div>

                {/* Render Each Faculty's Stacked Bar */}
                <div className="relative z-10 flex items-end h-full w-full justify-start gap-3 px-2">
                  {filteredFaculty.map((faculty) => {
                    const totalScore = faculty.contextAdjustedScore;
                    const totalHeightPercent = Math.min(100, Math.max(8, (totalScore / 999) * 100));
                    const isKiran = faculty.empId === "1913";
                    const isHovered = hoveredFaculty?.empId === faculty.empId;
                    const contextUplift = Math.max(0, faculty.contextAdjustedScore - faculty.verifiedScores.total);

                    // Dimension segment heights (relative to total 999 cap)
                    const teachingHeight = (faculty.verifiedScores.teaching / 999) * 100;
                    const researchHeight = (faculty.verifiedScores.research / 999) * 100;
                    const governanceHeight = (faculty.verifiedScores.governance / 999) * 100;
                    const upliftHeight = (contextUplift / 999) * 100;

                    // Standard vs Shielded segment heights
                    const standardHeight = (faculty.verifiedScores.total / 999) * 100;

                    return (
                      <div
                        key={faculty.empId}
                        className="group flex flex-col items-center h-full justify-end cursor-pointer flex-shrink-0 w-14"
                        onMouseEnter={() => setHoveredFaculty(faculty)}
                        onMouseLeave={() => setHoveredFaculty(null)}
                        onClick={() => onSelectFacultyForReview?.(faculty)}
                      >
                        {/* Numeric Score Label at the top of the bar */}
                        <div className="mb-1.5 flex flex-col items-center pointer-events-none">
                          <span className={`text-[10px] font-mono font-bold transition-transform ${
                            isKiran 
                              ? "text-indigo-700 scale-110" 
                              : isHovered 
                              ? "text-slate-900 scale-105" 
                              : "text-slate-600"
                          }`}>
                            {totalScore}
                          </span>
                          {isKiran && (
                            <span className="size-1.5 rounded-full bg-indigo-600 animate-pulse mt-0.5"></span>
                          )}
                        </div>

                        {/* Stacked Colored Bar */}
                        <div
                          style={{ height: `${totalHeightPercent}%` }}
                          className={`w-9 sm:w-10 rounded-t-lg overflow-hidden flex flex-col justify-end transition-all duration-200 shadow-2xs border ${
                            isKiran
                              ? "ring-2 ring-indigo-500 border-indigo-400"
                              : isHovered
                              ? "ring-2 ring-slate-400 border-slate-300 scale-x-105"
                              : "border-slate-200/80 hover:border-slate-300"
                          }`}
                        >
                          {colorMode === "DIMENSIONS" ? (
                            <>
                              {/* Context Shield Lift (Emerald #10b981) */}
                              {upliftHeight > 0 && (
                                <div
                                  style={{ height: `${(upliftHeight / totalHeightPercent) * 100}%` }}
                                  className="w-full bg-[#10b981] hover:bg-[#059669] transition-colors"
                                  title={`Context Shield Lift: +${contextUplift} pts`}
                                />
                              )}

                              {/* Part C: Governance (Amber #f59e0b) */}
                              {governanceHeight > 0 && (
                                <div
                                  style={{ height: `${(governanceHeight / totalHeightPercent) * 100}%` }}
                                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] transition-colors"
                                  title={`Governance: ${faculty.verifiedScores.governance} pts`}
                                />
                              )}

                              {/* Part B: Research (Purple #8b5cf6) */}
                              {researchHeight > 0 && (
                                <div
                                  style={{ height: `${(researchHeight / totalHeightPercent) * 100}%` }}
                                  className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors"
                                  title={`Research: ${faculty.verifiedScores.research} pts`}
                                />
                              )}

                              {/* Part A: Teaching (Blue #3b82f6) */}
                              {teachingHeight > 0 && (
                                <div
                                  style={{ height: `${(teachingHeight / totalHeightPercent) * 100}%` }}
                                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] transition-colors"
                                  title={`Teaching: ${faculty.verifiedScores.teaching} pts`}
                                />
                              )}
                            </>
                          ) : (
                            /* Standard vs Context Shielded mode (matching user picture!) */
                            <>
                              {/* Top Segment: Context Shielded Lift (Emerald #10b981) */}
                              {upliftHeight > 0 && (
                                <div
                                  style={{ height: `${(upliftHeight / totalHeightPercent) * 100}%` }}
                                  className="w-full bg-[#10b981] hover:bg-[#059669] transition-colors"
                                  title={`Context Shielded Lift: +${contextUplift} pts`}
                                />
                              )}

                              {/* Base Segment: Standard Rubric (Coral / Pink #fca5a5 / #fb7185) */}
                              <div
                                style={{ height: `${(standardHeight / totalHeightPercent) * 100}%` }}
                                className="w-full bg-[#fca5a5] hover:bg-[#fb7185] transition-colors"
                                title={`Standard Rubric: ${faculty.verifiedScores.total} pts`}
                              />
                            </>
                          )}
                        </div>

                        {/* X-Axis: Faculty Name and Level details */}
                        <div className="mt-2 text-center w-full flex flex-col items-center">
                          <span 
                            className={`text-[10px] font-semibold truncate max-w-[56px] block transition-colors ${
                              isKiran 
                                ? "text-indigo-700 font-bold" 
                                : isHovered 
                                ? "text-slate-900 font-bold" 
                                : "text-slate-600"
                            }`}
                            title={faculty.name}
                          >
                            {faculty.name.replace(/^(Dr\.|Prof\.)\s*/, "")}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 scale-90">
                            {faculty.level.replace("Level ", "L")}
                          </span>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

          {/* Floating Hover Tooltip overlay anchored to the graph card */}
          {hoveredFaculty && (
            <div className="absolute top-4 right-4 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 shadow-xl max-w-xs text-xs text-slate-800 animate-in fade-in duration-150">
              <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 truncate">
                      {hoveredFaculty.name}
                    </span>
                    {hoveredFaculty.empId === "1913" && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                        Target
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {hoveredFaculty.designation} • {hoveredFaculty.level}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold font-mono bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {hoveredFaculty.contextAdjustedGrade}
                </span>
              </div>

              <div className="pt-2 space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 font-medium">Total Score (Cap 999):</span>
                  <span className="font-mono font-bold text-slate-900">
                    {hoveredFaculty.contextAdjustedScore} / 999 ({((hoveredFaculty.contextAdjustedScore / 999) * 100).toFixed(1)}%)
                  </span>
                </div>

                {/* Score breakdown by colors */}
                <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px] font-mono">
                  <div className="bg-blue-50/70 p-1.5 rounded-lg border border-blue-100">
                    <span className="text-blue-700 block font-sans text-[9px]">Teaching</span>
                    <span className="font-bold text-blue-900">{hoveredFaculty.verifiedScores.teaching} pts</span>
                  </div>
                  <div className="bg-purple-50/70 p-1.5 rounded-lg border border-purple-100">
                    <span className="text-purple-700 block font-sans text-[9px]">Research</span>
                    <span className="font-bold text-purple-900">{hoveredFaculty.verifiedScores.research} pts</span>
                  </div>
                  <div className="bg-amber-50/70 p-1.5 rounded-lg border border-amber-100">
                    <span className="text-amber-700 block font-sans text-[9px]">Governance</span>
                    <span className="font-bold text-amber-900">{hoveredFaculty.verifiedScores.governance} pts</span>
                  </div>
                  <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100">
                    <span className="text-emerald-700 block font-sans text-[9px]">Shield Uplift</span>
                    <span className="font-bold text-emerald-900">
                      +{Math.max(0, hoveredFaculty.contextAdjustedScore - hoveredFaculty.verifiedScores.total)} pts
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Weekly Load: {hoveredFaculty.context.teachingHoursPerWeek + hoveredFaculty.context.administrativeBurdenHours}h</span>
                  <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                    Click bar to review file →
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Graph Legend below the scrollable bar chart */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 mt-1 border-t border-slate-100 text-xs">
            
            {/* Color Divisions Legend */}
            <div className="flex items-center gap-4 flex-wrap">
              {colorMode === "DIMENSIONS" ? (
                <>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#3b82f6]"></span>
                    <span>Teaching (Part A)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#8b5cf6]"></span>
                    <span>Research & IP (Part B)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#f59e0b]"></span>
                    <span>Governance & Service (Part C)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#10b981]"></span>
                    <span>Context Shield Lift</span>
                  </span>
                </>
              ) : (
                /* Matching user's uploaded picture legend */
                <>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#fca5a5]"></span>
                    <span>Standard Rubric</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <span className="size-2.5 rounded-xs bg-[#10b981]"></span>
                    <span>Context Shielded</span>
                  </span>
                </>
              )}
            </div>

            {/* Helper Hint */}
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span>Use scroll wheel or arrows to view all {filteredFaculty.length} faculty</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
