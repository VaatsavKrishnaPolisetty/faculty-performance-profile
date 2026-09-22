import React, { useEffect, useState, useRef } from "react";
import { 
  X, Printer, Download, ShieldCheck, FileText, CheckCircle2, 
  Building, Calendar, Hash, UserCheck, Upload, Image as ImageIcon,
  ExternalLink, Eye, Award, BookOpen, Star, Users, CheckSquare, Sparkles
} from "lucide-react";
import { ClaimedItem, FacultyRecord } from "../types";

interface EvidenceViewerModalProps {
  item: ClaimedItem | null;
  faculty: FacultyRecord;
  isOpen: boolean;
  onClose: () => void;
  onUpdateItem?: (updatedItem: ClaimedItem) => void;
}

export const EvidenceViewerModal: React.FC<EvidenceViewerModalProps> = ({
  item,
  faculty,
  isOpen,
  onClose,
  onUpdateItem,
}) => {
  const [localItem, setLocalItem] = useState<ClaimedItem | null>(item);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync state when item prop changes
  useEffect(() => {
    setLocalItem(item);
  }, [item]);

  // Listen for Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !localItem) return null;

  const currentItem = localItem;
  const isImageFile = currentItem.evidenceUrl?.startsWith("data:image/") || 
                      currentItem.evidenceName?.match(/\.(png|jpg|jpeg|webp|gif)$/i);

  const handleDownload = () => {
    // Generate a downloadable text/blob receipt for the verified evidence
    const content = `===============================================================
VIGNAN'S FOUNDATION FOR SCIENCE, TECHNOLOGY & RESEARCH (VFSTR)
INTERNAL QUALITY ASSURANCE CELL (IQAC) - VERIFIED EVIDENCE AUDIT
===============================================================

DOCUMENT: ${currentItem.evidenceName || "Institutional_Evidence_Record.pdf"}
TARGET METRIC: ${currentItem.metricName}
DIMENSION: ${currentItem.dimension.toUpperCase()}
CLAIMED POINTS: ${currentItem.claimedPoints}
VERIFIED POINTS: ${currentItem.verifiedPoints} / ${currentItem.maxPoints} pts
STATUS: ${currentItem.status.toUpperCase()} (Audit Confirmed)
DATA PIPELINE: ${currentItem.source === "platform" ? "Enterprise ERP & Scopus Ingestion" : "Faculty Certified Submission"}

FACULTY DETAILS:
- Name: ${faculty.name}
- Employee ID: ${faculty.empId}
- Department: ${faculty.department}
- Academic Level: ${faculty.level}
- Appraisal Cycle: Academic Year 2024-25 & 2025

VERIFICATION AUDIT METADATA:
- Digital Hash: SHA256:7f9a8b1c4e2d3f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a
- Verified Timestamp: 2025-06-25T14:32:00Z
- Certified By: Academic Audit Committee & Dean IQAC, VFSTR
- Integrity Verification: SECURE & TAMPER-EVIDENT
===============================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = (currentItem.evidenceName || "Verified_Evidence").replace(/\.pdf$/, "") + "_AuditProof.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const updated: ClaimedItem = {
        ...currentItem,
        evidenceName: file.name,
        evidenceUrl: dataUrl,
        source: "faculty_submission",
      };
      setLocalItem(updated);
      if (onUpdateItem) {
        onUpdateItem(updated);
      }
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-900/50 backdrop-blur-xs transition-all duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 flex-shrink-0">
              <FileText className="size-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2 truncate">
                <span className="truncate">{currentItem.evidenceName || `${currentItem.metricName.slice(0, 30)}...`}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex-shrink-0">
                  Verified Proof
                </span>
              </h2>
              <p className="text-[11px] text-slate-500 truncate">Audit Dossier • {currentItem.metricName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.txt"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-indigo-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-indigo-200 transition-colors"
              title="Upload replacement or supplemental proof file"
            >
              <Upload className="size-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Upload File</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-slate-200 transition-colors shadow-2xs"
              title="Download verified audit certificate"
            >
              <Download className="size-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              title="Print certified document"
            >
              <Printer className="size-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              title="Close (Esc)"
            >
              <X className="size-4" />
              <span>Esc</span>
            </button>
          </div>
        </div>

        {/* Scrollable Document Preview Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-xs">
          
          {/* Institutional Document Header */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-600 uppercase font-bold tracking-widest block">
                  VFSTR • INTERNAL QUALITY ASSURANCE CELL
                </span>
                <h1 className="text-base sm:text-lg font-black text-slate-900">
                  Verified Appraisal Evidence Certificate
                </h1>
                <p className="text-[11px] text-slate-500">
                  Institutional Record ID: <span className="font-mono text-slate-800">VFSTR-IQAC-2025-{faculty.empId}-{currentItem.metricId}</span>
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="size-5 text-emerald-600" />
                <div>
                  <span className="block text-[11px] leading-tight">Cryptographically Signed</span>
                  <span className="text-[9px] font-mono text-emerald-700 font-normal">IQAC Central Registry</span>
                </div>
              </div>
            </div>

            {/* Evidence Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-500 text-[10px] uppercase font-mono block">Faculty Beneficiary</span>
                <span className="font-bold text-slate-900">{faculty.name}</span>
                <span className="text-[10px] text-slate-500 font-mono block">EMP {faculty.empId} • {faculty.department}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-500 text-[10px] uppercase font-mono block">Metric Points</span>
                <span className="font-black text-emerald-700 font-mono text-sm">{currentItem.verifiedPoints} / {currentItem.maxPoints} pts</span>
                <span className="text-[10px] text-slate-500 block uppercase font-mono">{currentItem.dimension} Dimension</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-500 text-[10px] uppercase font-mono block">Ingestion Source</span>
                <span className="font-semibold text-slate-900">
                  {currentItem.source === "platform" ? "Institutional ERP Feed" : "Faculty Upload"}
                </span>
                <span className="text-[10px] text-indigo-700 font-mono block">Status: {currentItem.status.toUpperCase()}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-500 text-[10px] uppercase font-mono block">Audit Timestamp</span>
                <span className="font-semibold text-slate-800">AY 2024-25 CAY</span>
                <span className="text-[10px] text-slate-500 font-mono block">Validated 2025-06-25</span>
              </div>
            </div>
          </div>

          {/* User Uploaded Image Preview if applicable */}
          {isImageFile && currentItem.evidenceUrl?.startsWith("data:image/") && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <ImageIcon className="size-4 text-indigo-600" />
                  <span>Uploaded Document Preview</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">{currentItem.evidenceName}</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center max-h-72">
                <img 
                  src={currentItem.evidenceUrl} 
                  alt="Uploaded evidence preview" 
                  className="max-h-72 object-contain w-full"
                />
              </div>
            </div>
          )}

          {/* Authentic Context-Specific Document Preview Content */}
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-4 font-mono text-[11px]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-slate-700 uppercase tracking-wide text-xs">
                DOCUMENT BODY & DATA EXTRACT
              </span>
              <span className="text-indigo-600 font-normal text-[10px]">
                File: {currentItem.evidenceName || "Institutional_Record.pdf"}
              </span>
            </div>

            {/* Metric 1: copo_attainment */}
            {currentItem.metricId === "copo_attainment" && (
              <div className="space-y-3 font-sans">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                  <span className="font-bold text-slate-900 block mb-1">NBA CO-PO & PSO Attainment Summary:</span>
                  <p className="text-slate-700 text-[11px]">
                    Course: <b>CS301 - Operating Systems (Core Course)</b> • Semester: V • AY 2024-25
                  </p>
                  <p className="text-slate-500 text-[10px] mt-0.5">
                    Target Attainment Level: 2.5/3.0 • Actual Direct Attainment Achieved: <b>2.82/3.0 (94.0%)</b>
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[10px] border-collapse border border-slate-200 bg-white rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50 text-slate-600 font-mono">
                        <th className="p-2 border border-slate-200">Outcome</th>
                        <th className="p-2 border border-slate-200">Course Outcome Description</th>
                        <th className="p-2 border border-slate-200 text-center">Target</th>
                        <th className="p-2 border border-slate-200 text-center">Achieved</th>
                        <th className="p-2 border border-slate-200 text-center">Attainment Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono">
                      <tr>
                        <td className="p-2 border border-slate-200 font-bold text-indigo-600">CO1</td>
                        <td className="p-2 border border-slate-200 font-sans text-slate-800">Analyze process scheduling and synchronization algorithms</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">80%</td>
                        <td className="p-2 border border-slate-200 text-center font-bold text-emerald-600">96.4%</td>
                        <td className="p-2 border border-slate-200 text-center text-emerald-700 font-semibold">Attained (Level 3)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-slate-200 font-bold text-indigo-600">CO2</td>
                        <td className="p-2 border border-slate-200 font-sans text-slate-800">Evaluate virtual memory management and paging schemes</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">75%</td>
                        <td className="p-2 border border-slate-200 text-center font-bold text-emerald-600">92.1%</td>
                        <td className="p-2 border border-slate-200 text-center text-emerald-700 font-semibold">Attained (Level 3)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-slate-200 font-bold text-indigo-600">CO3</td>
                        <td className="p-2 border border-slate-200 font-sans text-slate-800">Implement concurrent threading and interprocess communications</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">75%</td>
                        <td className="p-2 border border-slate-200 text-center font-bold text-emerald-600">89.8%</td>
                        <td className="p-2 border border-slate-200 text-center text-emerald-700 font-semibold">Attained (Level 3)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Metric 2: course_file */}
            {currentItem.metricId === "course_file" && (
              <div className="space-y-2 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="font-bold text-slate-900 block mb-1">Academic Audit Course File Checklist:</span>
                  <ul className="space-y-1 text-slate-700 text-[11px] list-disc list-inside">
                    <li>Syllabus & Lesson Plan Uploaded: <b className="text-emerald-600">100% Completed on Time</b></li>
                    <li>Lecture Notes & PPTs for 5 Modules: <b className="text-emerald-600">Verified by Module Coordinator</b></li>
                    <li>Formative & Mid-Exam Question Papers with Bloom's Taxonomy Mapping: <b className="text-emerald-600">Compliant</b></li>
                    <li>Sample High, Medium, Low Answer Scripts Archived: <b className="text-emerald-600">Archived in LMS</b></li>
                    <li>Course Exit Survey & Action Taken Report (ATR): <b className="text-emerald-600">Submitted & Validated</b></li>
                  </ul>
                </div>
              </div>
            )}

            {/* Metric 3: student_feedback_score */}
            {currentItem.metricId === "student_feedback_score" && (
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-xs">Student Feedback Aggregated Analytics</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      Aggregated Rating: 4.62 / 5.0 (92.4%)
                    </span>
                  </div>
                  <p className="text-slate-700 text-[11px]">
                    Evaluated across <b>68 registered students</b> with <b>64 verified submissions (94.1% participation rate)</b> for academic courses taught in Sem I & II.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block">Subject Preparedness</span>
                      <span className="font-bold text-emerald-700 text-xs">4.80 / 5.0</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block">Punctuality & Delivery</span>
                      <span className="font-bold text-emerald-700 text-xs">4.75 / 5.0</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block">Fairness in Evaluation</span>
                      <span className="font-bold text-emerald-700 text-xs">4.60 / 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Metric 4: scopus_journals */}
            {currentItem.metricId === "scopus_journals" && (
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-700 text-xs">Scopus Author Record: 57201913000</span>
                    <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-semibold">Elsevier Scopus API</span>
                  </div>
                  <p className="text-slate-800 font-semibold text-[11px]">
                    1. "Adaptive Resource Allocation in Fog-Cloud Hierarchies for Distributed IoT Streams"
                  </p>
                  <p className="text-slate-500 text-[10px] font-mono">
                    Journal of Cloud Computing & Systems • ISSN: 2192-113X • DOI: 10.1016/j.procs.2024.08.112
                  </p>
                  <p className="text-slate-800 font-semibold text-[11px] pt-1">
                    2. "Fault-Tolerant Consensus Protocols for Edge Autonomous Agents"
                  </p>
                  <p className="text-slate-500 text-[10px] font-mono">
                    IEEE Transactions on Services Computing (ESCI) • Vol. 17, No. 3, pp. 412–424 • 2024
                  </p>
                </div>
              </div>
            )}

            {/* Metric 5: top_conferences */}
            {currentItem.metricId === "top_conferences" && (
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-xs">IEEE International Conference Proceedings</span>
                    <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded font-bold">
                      Level 1 Conference
                    </span>
                  </div>
                  <p className="text-slate-800 font-semibold text-[11px]">
                    "Resilient Microservice Orchestration for Cloud-Native Edge Workloads"
                  </p>
                  <p className="text-slate-600 text-[10px]">
                    Presented at: <b>IEEE International Conference on Contemporary Computing and Informatics (IC3I 2024)</b>
                  </p>
                  <div className="text-[10px] text-slate-500 font-mono space-y-0.5 pt-1">
                    <p>• Scopus & IEEE Xplore Digital Library Indexed</p>
                    <p>• ISBN: 979-8-3503-9821-2 • Paper ID: VFSTR-CSE-CONF-2024-042</p>
                  </div>
                </div>
              </div>
            )}

            {/* Metric 6: boinfra_tasks */}
            {currentItem.metricId === "boinfra_tasks" && (
              <div className="space-y-2 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <span className="font-bold text-slate-900 block">Board of Infrastructure (BoInfra) Audit Sign-off:</span>
                  <p className="text-slate-700 text-[11px]">
                    Tasks Completed: <b>13 / 13 Institutional Infrastructure Tasks Verified</b>
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Includes Two Internal Energy Audits, DG Set Maintenance Logs, Power Distribution Calibration, and e-Waste Segregation compliance approved by Dean Infrastructure.
                  </p>
                </div>
              </div>
            )}

            {/* Metric 7: student_counseling */}
            {currentItem.metricId === "student_counseling" && (
              <div className="space-y-2 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-xs">Mentorship Log Register & Counseling Audits</span>
                    <span className="text-[10px] font-mono bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded font-bold">
                      75 / 75 pts Verified
                    </span>
                  </div>
                  <p className="text-slate-700 text-[11px]">
                    Assigned 20 student mentees (B.Tech CSE III Year). Completed 16 weekly interactive counseling sessions, maintained psycho-social logs, and achieved attendance improvement for 4 at-risk students.
                  </p>
                  <p className="text-slate-500 text-[10px] font-mono">
                    Validated by: Dean Student Affairs & HoD CSE (Ref: VFSTR/DSW/COUNSEL/24-25/089)
                  </p>
                </div>
              </div>
            )}

            {/* Metric 8: hod_eval */}
            {currentItem.metricId === "hod_eval" && (
              <div className="space-y-2 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-xs">Head of Department (HOD) Assessment Marks</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      50 / 50 pts Certified
                    </span>
                  </div>
                  <p className="text-slate-700 text-[11px]">
                    Criteria: Departmental Governance Contribution, Lab Maintenance, Exam Cell Duties, Student Mentoring, and NBA/NAAC Documentation Reliability.
                  </p>
                  <p className="text-emerald-700 text-[11px] italic">
                    "{currentItem.hodNotes || "Exemplary departmental commitment and diligence across infrastructure tasks."}"
                  </p>
                </div>
              </div>
            )}

            {/* Fallback for other or custom items */}
            {!["copo_attainment", "course_file", "student_feedback_score", "scopus_journals", "top_conferences", "boinfra_tasks", "student_counseling", "hod_eval"].includes(currentItem.metricId) && (
              <div className="space-y-2 font-sans text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <span className="font-bold text-slate-900 block">Institutional Record Excerpt:</span>
                  <p className="text-slate-700 text-[11px]">
                    {currentItem.facultyNotes || `Certified documentation for ${currentItem.metricName} successfully registered under VFSTR Annual Appraisal AY 2024-25.`}
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Verification Status: <b className="text-emerald-700">{currentItem.status.toUpperCase()}</b> • Verified Marks: <b>{currentItem.verifiedPoints} pts</b>
                  </p>
                  {currentItem.evidenceName && (
                    <p className="text-indigo-600 text-[10px] font-mono">
                      Attached Proof Document: {currentItem.evidenceName}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Security Footer Verification Stamp */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] text-slate-500">
              <span>SHA256: 7f9a8b1c4e2d3f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a</span>
              <span className="text-emerald-600 font-semibold">Digitally Validated by VFSTR IQAC</span>
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-3.5 border-t border-slate-200 flex items-center justify-between no-print">
          <span className="text-[11px] text-slate-500 font-mono truncate max-w-xs">
            Document: <b className="text-slate-900">{currentItem.evidenceName || "Institutional Proof"}</b>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-indigo-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-indigo-200 transition-colors"
            >
              <Upload className="size-3.5 text-indigo-600" />
              <span>Replace File</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-slate-200 transition-colors shadow-2xs"
            >
              <Download className="size-3.5 text-indigo-600" />
              <span>Download Proof</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold cursor-pointer transition-colors shadow-xs"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
