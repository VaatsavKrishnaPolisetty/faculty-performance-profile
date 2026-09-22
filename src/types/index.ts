export type FacultyLevel = 'Level 14' | 'Level 13A' | 'Level 13B' | 'Level 12' | 'Level 11' | 'Level 10' | 'Level 10-' | 'Dean';

export interface RubricItem {
  id: string;
  name: string;
  maxPoints: number;
  verifiedSource: string;
}

export interface RubricCategory {
  id: string;
  name: string;
  maxPoints: number;
  items: RubricItem[];
}

export interface DimensionRubric {
  id: 'teaching' | 'research' | 'governance';
  name: string;
  maxPoints: number;
  categories: RubricCategory[];
}

export interface LevelWeights {
  teaching: number;
  research: number;
  governance: number;
}

export interface ScoringBand {
  grade: string;
  minScore: number;
  maxScore: number;
  label: string;
  color: string;
}

export interface AppraisalRubric {
  maxTotalScore: number;
  dimensions: {
    teaching: DimensionRubric;
    research: DimensionRubric;
    governance: DimensionRubric;
  };
  levelWeights: Record<string, LevelWeights>;
  scoringBands: ScoringBand[];
}

export interface ClaimedItem {
  id: string;
  dimension: 'teaching' | 'research' | 'governance';
  metricId: string;
  metricName: string;
  maxPoints: number;
  claimedPoints: number;
  verifiedPoints: number;
  status: 'verified' | 'pending_hod' | 'approved' | 'rejected';
  source: 'platform' | 'faculty_submission';
  evidenceUrl?: string;
  evidenceName?: string;
  facultyNotes?: string;
  hodNotes?: string;
}

export interface ContextualParameters {
  teachingHoursPerWeek: number; // baseline 14-16 hrs
  creditLoad: number; // e.g. 18-24 credits
  distinctPreparations: number; // e.g. 1, 2, 3+
  courseDifficultyIndex: number; // 1 (Intro) to 5 (Heavy theory/math/kernel)
  sectionEntryPercentile: number; // e.g. 45% (remedial/lower entry) to 90% (honors/top rank)
  remedialStudentPercent: number; // e.g. 10% to 40%
  administrativeBurdenHours: number; // weekly non-teaching admin hrs: 5 to 25 hrs
  administrativeRoles: string[]; // e.g. ['BoInfra Chair', 'Counselor', 'NAAC Criteria Lead']
  contextualImpactNarrative: string;
}

export interface CycleTrend {
  year: number; // 2023, 2024, 2025
  rawScore: number; // out of 999
  weightedPercentage: number;
  grade: string;
  teachingScore: number;
  researchScore: number;
  governanceScore: number;
}

export interface DevelopmentArea {
  id: string;
  dimension: 'teaching' | 'research' | 'governance';
  priority: 'high' | 'medium' | 'low';
  title: string;
  observation: string;
  recommendedAction: string;
  timeline: string;
}

export interface FacultyRecord {
  empId: string;
  name: string;
  department: string;
  school: string;
  qualification: string;
  designation: string;
  level: FacultyLevel;
  dateOfJoin: string;
  campus: string;
  
  // 2025 Current Appraisal
  claimedScores: {
    teaching: number;
    research: number;
    governance: number;
    total: number;
  };
  verifiedScores: {
    teaching: number;
    research: number;
    governance: number;
    total: number;
  };
  
  // Normalization
  weightedPercentage: number;
  contextAdjustedScore: number;
  contextAdjustedPercentage: number;
  grade: string;
  contextAdjustedGrade: string;

  // Breakdown items
  items: ClaimedItem[];
  
  // Contextualization
  context: ContextualParameters;

  // Multi-cycle history
  trends: CycleTrend[];

  // Strengths & Diagnostics
  strengths: string[];
  developmentAreas: DevelopmentArea[];

  // Review Status
  verificationStatus: 'confirmed_by_faculty' | 'pending_faculty_review' | 'hod_approved' | 'action_required';
  hodRemarks?: string;
  appraisalBriefGeneratedAt?: string;
}
