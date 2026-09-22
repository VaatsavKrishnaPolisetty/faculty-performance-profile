import { supabase } from "../lib/supabase";
import { FacultyRecord, ClaimedItem } from "../types";
import { COHORT_FACULTY_DATA } from "../data/cohortData";

export interface DatabaseFacultyRow {
  emp_id: string;
  name: string;
  department: string;
  school: string | null;
  qualification: string | null;
  designation: string;
  level: string;
  date_of_join: string | null;
  campus: string | null;
  claimed_scores: any;
  verified_scores: any;
  weighted_percentage: number;
  context_adjusted_score: number;
  context_adjusted_percentage: number;
  grade: string;
  context_adjusted_grade: string;
  context: any;
  trends: any;
  strengths: any;
  development_areas: any;
  verification_status: string;
  hod_remarks: string | null;
  appraisal_brief_generated_at: string | null;
}

export interface DatabaseItemRow {
  id: string;
  emp_id: string;
  dimension: string;
  metric_id: string;
  metric_name: string;
  max_points: number;
  claimed_points: number;
  verified_points: number;
  status: string;
  source: string;
  evidence_name: string | null;
  evidence_url: string | null;
  faculty_notes: string | null;
  hod_notes: string | null;
}

// Map Database Rows to FacultyRecord
export const mapDbRowToFacultyRecord = (
  row: DatabaseFacultyRow, 
  items: ClaimedItem[] = []
): FacultyRecord => {
  return {
    empId: row.emp_id,
    name: row.name,
    department: row.department,
    school: row.school || "School of Computing & Informatics",
    qualification: row.qualification || "Ph.D",
    designation: row.designation,
    level: row.level as any,
    dateOfJoin: row.date_of_join || "2020-07-01",
    campus: row.campus || "Guntur",
    claimedScores: row.claimed_scores || { teaching: 0, research: 0, governance: 0, total: 0 },
    verifiedScores: row.verified_scores || { teaching: 0, research: 0, governance: 0, total: 0 },
    weightedPercentage: Number(row.weighted_percentage) || 0,
    contextAdjustedScore: Number(row.context_adjusted_score) || 0,
    contextAdjustedPercentage: Number(row.context_adjusted_percentage) || 0,
    grade: row.grade || "B",
    contextAdjustedGrade: row.context_adjusted_grade || "B",
    items: items,
    context: row.context || {
      teachingHoursPerWeek: 16,
      creditLoad: 18,
      distinctPreparations: 2,
      courseDifficultyIndex: 3,
      sectionEntryPercentile: 60,
      remedialStudentPercent: 15,
      administrativeBurdenHours: 8,
      administrativeRoles: [],
      contextualImpactNarrative: ""
    },
    trends: Array.isArray(row.trends) ? row.trends : [],
    strengths: Array.isArray(row.strengths) ? row.strengths : [],
    developmentAreas: Array.isArray(row.development_areas) ? row.development_areas : [],
    verificationStatus: (row.verification_status as any) || "pending_faculty_review",
    hodRemarks: row.hod_remarks || undefined,
    appraisalBriefGeneratedAt: row.appraisal_brief_generated_at || undefined,
  };
};

// Map ClaimedItem database row to ClaimedItem
export const mapDbItemToClaimedItem = (row: DatabaseItemRow): ClaimedItem => {
  return {
    id: row.id,
    dimension: row.dimension as any,
    metricId: row.metric_id,
    metricName: row.metric_name,
    maxPoints: Number(row.max_points) || 0,
    claimedPoints: Number(row.claimed_points) || 0,
    verifiedPoints: Number(row.verified_points) || 0,
    status: row.status as any,
    source: row.source as any,
    evidenceName: row.evidence_name || undefined,
    evidenceUrl: row.evidence_url || undefined,
    facultyNotes: row.faculty_notes || undefined,
    hodNotes: row.hod_notes || undefined,
  };
};

// Map FacultyRecord to Database insert/update row
export const mapFacultyRecordToDbRow = (faculty: FacultyRecord): DatabaseFacultyRow => {
  return {
    emp_id: faculty.empId,
    name: faculty.name,
    department: faculty.department,
    school: faculty.school,
    qualification: faculty.qualification,
    designation: faculty.designation,
    level: faculty.level,
    date_of_join: faculty.dateOfJoin,
    campus: faculty.campus,
    claimed_scores: faculty.claimedScores,
    verified_scores: faculty.verifiedScores,
    weighted_percentage: faculty.weightedPercentage,
    context_adjusted_score: faculty.contextAdjustedScore,
    context_adjusted_percentage: faculty.contextAdjustedPercentage,
    grade: faculty.grade,
    context_adjusted_grade: faculty.contextAdjustedGrade,
    context: faculty.context,
    trends: faculty.trends,
    strengths: faculty.strengths,
    development_areas: faculty.developmentAreas,
    verification_status: faculty.verificationStatus,
    hod_remarks: faculty.hodRemarks || null,
    appraisal_brief_generated_at: faculty.appraisalBriefGeneratedAt || null,
  };
};

// Map ClaimedItem to database row
export const mapClaimedItemToDbRow = (empId: string, item: ClaimedItem): DatabaseItemRow => {
  return {
    id: item.id,
    emp_id: empId,
    dimension: item.dimension,
    metric_id: item.metricId,
    metric_name: item.metricName,
    max_points: item.maxPoints,
    claimed_points: item.claimedPoints,
    verified_points: item.verifiedPoints,
    status: item.status,
    source: item.source,
    evidence_name: item.evidenceName || null,
    evidence_url: item.evidenceUrl || null,
    faculty_notes: item.facultyNotes || null,
    hod_notes: item.hodNotes || null,
  };
};

// Fetch full cohort with items from Supabase
export const fetchCohortFromSupabase = async (): Promise<{
  cohort: FacultyRecord[];
  fromDatabase: boolean;
}> => {
  try {
    const { data: facultyRows, error: facultyError } = await supabase
      .from("faculty")
      .select("*")
      .order("context_adjusted_score", { ascending: false });

    if (facultyError) {
      console.warn("Could not query Supabase faculty table:", facultyError);
      return { cohort: COHORT_FACULTY_DATA, fromDatabase: false };
    }

    if (!facultyRows || facultyRows.length === 0) {
      console.info("Supabase database empty. Initiating automatic seeding...");
      await seedInitialCohortIfEmpty();
      return { cohort: COHORT_FACULTY_DATA, fromDatabase: true };
    }

    const { data: itemRows, error: itemsError } = await supabase
      .from("faculty_items")
      .select("*");

    if (itemsError) {
      console.warn("Could not query faculty_items:", itemsError);
    }

    // Group items by faculty emp_id
    const itemsByEmpId = new Map<string, ClaimedItem[]>();
    if (itemRows) {
      for (const itemRow of itemRows) {
        const item = mapDbItemToClaimedItem(itemRow);
        const existing = itemsByEmpId.get(itemRow.emp_id) || [];
        existing.push(item);
        itemsByEmpId.set(itemRow.emp_id, existing);
      }
    }

    const cohort = facultyRows.map((row) => {
      const items = itemsByEmpId.get(row.emp_id) || [];
      return mapDbRowToFacultyRecord(row, items);
    });

    return { cohort, fromDatabase: true };
  } catch (err) {
    console.error("Error in fetchCohortFromSupabase:", err);
    return { cohort: COHORT_FACULTY_DATA, fromDatabase: false };
  }
};

// Seed initial cohort into Supabase
export const seedInitialCohortIfEmpty = async (): Promise<boolean> => {
  try {
    const { count, error: countError } = await supabase
      .from("faculty")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("Failed to check faculty count:", countError);
      return false;
    }

    if (count && count > 0) {
      return true; // Already seeded
    }

    console.info(`Seeding ${COHORT_FACULTY_DATA.length} faculty profiles into Supabase...`);

    // Prepare faculty rows
    const facultyRows = COHORT_FACULTY_DATA.map(mapFacultyRecordToDbRow);
    const { error: insertFacultyError } = await supabase
      .from("faculty")
      .upsert(facultyRows, { onConflict: "emp_id" });

    if (insertFacultyError) {
      console.error("Error inserting faculty rows:", insertFacultyError);
      return false;
    }

    // Prepare items rows
    const allItemRows: DatabaseItemRow[] = [];
    for (const faculty of COHORT_FACULTY_DATA) {
      if (faculty.items && faculty.items.length > 0) {
        for (const item of faculty.items) {
          allItemRows.push(mapClaimedItemToDbRow(faculty.empId, item));
        }
      }
    }

    if (allItemRows.length > 0) {
      const { error: insertItemsError } = await supabase
        .from("faculty_items")
        .upsert(allItemRows, { onConflict: "id" });

      if (insertItemsError) {
        console.error("Error inserting faculty item rows:", insertItemsError);
      }
    }

    console.info("Supabase seeding completed successfully!");
    return true;
  } catch (err) {
    console.error("Seeding failed with exception:", err);
    return false;
  }
};

// Update a single faculty record in Supabase
export const updateFacultyInSupabase = async (faculty: FacultyRecord): Promise<boolean> => {
  try {
    const row = mapFacultyRecordToDbRow(faculty);
    const { error: facultyError } = await supabase
      .from("faculty")
      .upsert(row, { onConflict: "emp_id" });

    if (facultyError) {
      console.error("Failed to update faculty in Supabase:", facultyError);
      return false;
    }

    // Also update any modified items
    if (faculty.items && faculty.items.length > 0) {
      const itemRows = faculty.items.map((item) => mapClaimedItemToDbRow(faculty.empId, item));
      const { error: itemsError } = await supabase
        .from("faculty_items")
        .upsert(itemRows, { onConflict: "id" });

      if (itemsError) {
        console.error("Failed to update faculty items in Supabase:", itemsError);
      }
    }

    return true;
  } catch (err) {
    console.error("Exception in updateFacultyInSupabase:", err);
    return false;
  }
};

// Update or insert a single claimed item in Supabase
export const updateClaimedItemInSupabase = async (
  empId: string, 
  item: ClaimedItem
): Promise<boolean> => {
  try {
    const row = mapClaimedItemToDbRow(empId, item);
    const { error } = await supabase
      .from("faculty_items")
      .upsert(row, { onConflict: "id" });

    if (error) {
      console.error("Failed to update item in Supabase:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Exception in updateClaimedItemInSupabase:", err);
    return false;
  }
};

// Subscribe to Realtime Postgres Changes (INSERT, UPDATE, DELETE) on faculty and faculty_items
export const subscribeToFacultyChanges = (onChanged: () => void) => {
  const channel = supabase
    .channel("faculty-realtime-sync")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "faculty" },
      (payload) => {
        console.log("Realtime change detected in faculty table:", payload.eventType);
        onChanged();
      }
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "faculty_items" },
      (payload) => {
        console.log("Realtime change detected in faculty_items table:", payload.eventType);
        onChanged();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
