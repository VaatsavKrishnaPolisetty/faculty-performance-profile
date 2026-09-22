import React, { useState, useEffect } from "react";
import { COHORT_FACULTY_DATA } from "./data/cohortData";
import { FacultyRecord } from "./types";
import { Header } from "./components/Header";
import { HodDashboard } from "./components/HodDashboard";
import { FacultyDashboard } from "./components/FacultyDashboard";
import { FacultyReviewDrawer } from "./components/FacultyReviewDrawer";
import { AppraisalBriefModal } from "./components/AppraisalBriefModal";
import { AggregateReportModal } from "./components/AggregateReportModal";
import { 
  fetchCohortFromSupabase, 
  updateFacultyInSupabase, 
  subscribeToFacultyChanges 
} from "./services/facultyService";

export const App: React.FC = () => {
  const [cohort, setCohort] = useState<FacultyRecord[]>(COHORT_FACULTY_DATA);
  const [activeTab, setActiveTab] = useState<"hod" | "faculty" | "aggregate_report">("hod");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDatabaseConnected, setIsDatabaseConnected] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Selected faculty for Faculty Portal (default to Kiran Kumar Kaveti - EMP 1913)
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyRecord>(
    () => COHORT_FACULTY_DATA.find((f) => f.empId === "1913") || COHORT_FACULTY_DATA[0]
  );

  // Drawer state for HOD deep review
  const [reviewFaculty, setReviewFaculty] = useState<FacultyRecord | null>(null);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);

  // Modal state for official appraisal brief
  const [briefFaculty, setBriefFaculty] = useState<FacultyRecord | null>(null);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  // Modal state for aggregate report
  const [isAggregateReportOpen, setIsAggregateReportOpen] = useState(false);

  // Fetch initial cohort and subscribe to Supabase Realtime changes
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const { cohort: remoteCohort, fromDatabase } = await fetchCohortFromSupabase();
        if (isMounted) {
          if (remoteCohort && remoteCohort.length > 0) {
            setCohort(remoteCohort);
            // Synchronize selected faculty with fresh remote state
            setSelectedFaculty((prev) => {
              return remoteCohort.find((f) => f.empId === prev.empId) || remoteCohort[0];
            });
            // Synchronize review faculty if drawer is currently open
            setReviewFaculty((prev) => {
              if (!prev) return null;
              return remoteCohort.find((f) => f.empId === prev.empId) || prev;
            });
          }
          setIsDatabaseConnected(fromDatabase);
        }
      } catch (err) {
        console.error("Error loading cohort from Supabase:", err);
        if (isMounted) setIsDatabaseConnected(false);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();

    // Live Realtime listener: whenever rows are added, edited, or deleted in Supabase Table Editor
    const unsubscribe = subscribeToFacultyChanges(() => {
      loadData();
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  // Handlers
  const handleSelectFacultyForReview = (faculty: FacultyRecord) => {
    setReviewFaculty(faculty);
    setIsReviewDrawerOpen(true);
  };

  const handleOpenAppraisalBrief = (faculty: FacultyRecord) => {
    setBriefFaculty(faculty);
    setIsBriefModalOpen(true);
  };

  const handleOpenFacultyPortal = (faculty: FacultyRecord) => {
    setSelectedFaculty(faculty);
    setActiveTab("faculty");
  };

  const handleUpdateFaculty = async (updated: FacultyRecord) => {
    // 1. Optimistic UI update
    setCohort((prev) => prev.map((f) => (f.empId === updated.empId ? updated : f)));
    if (selectedFaculty.empId === updated.empId) {
      setSelectedFaculty(updated);
    }
    if (reviewFaculty && reviewFaculty.empId === updated.empId) {
      setReviewFaculty(updated);
    }

    // 2. Persist to Supabase in background
    setIsSyncing(true);
    try {
      await updateFacultyInSupabase(updated);
    } catch (err) {
      console.error("Failed to persist faculty update to Supabase:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Universal Top Header with Supabase Connection State */}
      <Header
        activeTab={activeTab === "aggregate_report" ? "hod" : activeTab}
        setActiveTab={(tab) => {
          if (tab === "aggregate_report") {
            setIsAggregateReportOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        selectedFacultyName={selectedFaculty.name}
        isDatabaseConnected={isDatabaseConnected}
        isSyncing={isSyncing}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === "hod" ? (
          <HodDashboard
            cohort={cohort}
            onSelectFacultyForReview={handleSelectFacultyForReview}
            onOpenAppraisalBrief={handleOpenAppraisalBrief}
            onOpenFacultyPortal={handleOpenFacultyPortal}
          />
        ) : (
          <FacultyDashboard
            faculty={selectedFaculty}
            cohort={cohort}
            onSelectFaculty={setSelectedFaculty}
            onUpdateFaculty={handleUpdateFaculty}
            onOpenAppraisalBrief={handleOpenAppraisalBrief}
          />
        )}
      </main>

      {/* HOD Review & Item Audit Drawer */}
      {isReviewDrawerOpen && reviewFaculty && (
        <FacultyReviewDrawer
          faculty={reviewFaculty}
          isOpen={isReviewDrawerOpen}
          onClose={() => setIsReviewDrawerOpen(false)}
          onUpdateFaculty={handleUpdateFaculty}
          onOpenAppraisalBrief={handleOpenAppraisalBrief}
        />
      )}

      {/* Official Executive Appraisal Brief Modal */}
      {isBriefModalOpen && briefFaculty && (
        <AppraisalBriefModal
          faculty={briefFaculty}
          isOpen={isBriefModalOpen}
          onClose={() => {
            setIsBriefModalOpen(false);
            setBriefFaculty(null);
          }}
        />
      )}

      {/* Aggregate Department Quality Report Modal */}
      {isAggregateReportOpen && (
        <AggregateReportModal
          cohort={cohort}
          isOpen={isAggregateReportOpen}
          onClose={() => setIsAggregateReportOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 no-print mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Vignan's Foundation for Science, Technology & Research • Internal Quality Assurance Cell (IQAC)</span>
          <span className="font-mono text-slate-600 font-medium">Institutional Appraisal Engine • Capped at Max 999 Marks</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
