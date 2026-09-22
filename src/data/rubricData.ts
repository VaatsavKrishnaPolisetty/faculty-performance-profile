import { AppraisalRubric } from '../types';

export const INSTITUTIONAL_RUBRIC: AppraisalRubric = {
  maxTotalScore: 999,
  dimensions: {
    teaching: {
      id: 'teaching',
      name: 'Teaching-Learning (TL)',
      maxPoints: 333,
      categories: [
        {
          id: 'curriculum',
          name: 'Curriculum & Teaching-Learning Process',
          maxPoints: 273,
          items: [
            { id: 'course_file', name: 'Maintaining Course File for all modules taught in the year', maxPoints: 25, verifiedSource: 'LMS Audit' },
            { id: 'exit_survey', name: 'Course Exit Survey for respective course handled', maxPoints: 12, verifiedSource: 'Student Portal' },
            { id: 'pedagogy', name: 'Teaching Pedagogy (Minimum 4 innovative methods practiced)', maxPoints: 16, verifiedSource: 'Academic Council Logs' },
            { id: 'attendance', name: 'Class Attendance >95% students >75% attendance', maxPoints: 20, verifiedSource: 'Biometric/ERP Attendance' },
            { id: 'content_beyond', name: 'Content Beyond Syllabus by Industry/Academic Expert', maxPoints: 20, verifiedSource: 'Guest Lecture Register' },
            { id: 'industry_expert', name: 'Course Content Delivered by Industry Expert (1 per sem)', maxPoints: 15, verifiedSource: 'Department MoU Activity' },
            { id: 'copo_attainment', name: 'CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26', maxPoints: 50, verifiedSource: 'NBA Exam Software' },
            { id: 'attainment_atr', name: 'Action Taken Report (ATR) for attainment targets', maxPoints: 20, verifiedSource: 'IQAC File' },
            { id: 'econtent_internal', name: 'e-Content developed within VFSTR (All modules)', maxPoints: 20, verifiedSource: 'VFSTR Digital Media Center' },
            { id: 'econtent_external', name: 'e-Content developed outside VFSTR (SWAYAM, NPTEL, Coursera)', maxPoints: 10, verifiedSource: 'NPTEL / External LMS' },
            { id: 'slow_learners_class', name: 'Remedial / Slow Learner classes conducted', maxPoints: 15, verifiedSource: 'Remedial Class Attendance' },
            { id: 'slow_learners_impact', name: 'Impact analysis & grade transition of slow learners', maxPoints: 10, verifiedSource: 'Remedial Exam Tracker' },
            { id: 'pass_formative', name: 'Pass percentage in Formative Assessments', maxPoints: 10, verifiedSource: 'Examination Management System' },
            { id: 'pass_summative', name: 'Pass percentage in Summative Assessments', maxPoints: 10, verifiedSource: 'Examination Management System' },
            { id: 'pass_overall', name: 'Overall Pass Percentage for respective course handled', maxPoints: 20, verifiedSource: 'Controller of Examinations' },
          ]
        },
        {
          id: 'projects',
          name: 'UG & PG Project Guidance',
          maxPoints: 10,
          items: [
            { id: 'projects_guided', name: 'Projects guided for UG/PG with credits or CLA forms', maxPoints: 10, verifiedSource: 'Project Review Cell' }
          ]
        },
        {
          id: 'feedback',
          name: 'Student Feedback on Teaching-Learning Process',
          maxPoints: 50,
          items: [
            { id: 'student_feedback_score', name: 'Student Feedback Percentage Score (Scaled)', maxPoints: 50, verifiedSource: 'Central Feedback System' }
          ]
        }
      ]
    },
    research: {
      id: 'research',
      name: 'Research & Development (R&D)',
      maxPoints: 333,
      categories: [
        {
          id: 'publications',
          name: 'Research Publications (All Inclusive)',
          maxPoints: 163,
          items: [
            { id: 'sci_journals', name: 'SCI / SCI-E / ABDC Indexed Articles', maxPoints: 105, verifiedSource: 'Clarivate WoS API' },
            { id: 'scopus_journals', name: 'Scopus / ESCI Indexed Journal Articles', maxPoints: 100, verifiedSource: 'Elsevier Scopus API' },
            { id: 'top_conferences', name: 'Top Notch Conferences (Level 1/2 with ISSN proceedings)', maxPoints: 13, verifiedSource: 'IEEE / ACM Xplore' },
            { id: 'books_chapters', name: 'Books / Book Chapters in Reputed International Publisher with ISBN', maxPoints: 15, verifiedSource: 'Dean R&D Repository' },
            { id: 'patents', name: 'Patents Granted (30 pts) or Published (7.5 pts)', maxPoints: 30, verifiedSource: 'Indian Patent Office Gazette' },
          ]
        },
        {
          id: 'entrepreneurship',
          name: 'Entrepreneurship & Global Certifications',
          maxPoints: 15,
          items: [
            { id: 'startups_certs', name: 'Startups incubated or Global / National 12-week Certifications', maxPoints: 15, verifiedSource: 'TBI / NPTEL Star Portal' }
          ]
        },
        {
          id: 'participation_grants',
          name: 'Conference Participation & Extramural Grants',
          maxPoints: 48,
          items: [
            { id: 'conf_participated', name: 'Top Notch Conferences Participated (Participation Certificate)', maxPoints: 8, verifiedSource: 'R&D Travel Grant Record' },
            { id: 'extramural_projects', name: 'Govt / Industry Sanctioned Extramural Projects or Consultancy credited', maxPoints: 40, verifiedSource: 'Finance & Accounts Office' }
          ]
        },
        {
          id: 'internal_phd',
          name: 'Internal Seed Grants & PhD Supervision',
          maxPoints: 35,
          items: [
            { id: 'seed_money', name: 'Internal Seed Money Sanctioned & Utilized', maxPoints: 10, verifiedSource: 'Dean R&D Accounts' },
            { id: 'phd_supervision', name: 'PhD Scholars Awarded (<5 yrs: 25 pts, >5 yrs: 15 pts)', maxPoints: 25, verifiedSource: 'Directorate of Research' }
          ]
        },
        {
          id: 'professional_dev',
          name: 'FDPs, Workshops, FIIP & Research Metrics',
          maxPoints: 72,
          items: [
            { id: 'fdp_attended', name: 'FDP / STTP / Workshop Attended (ATAL / AICTE Sponsored: 12 pts)', maxPoints: 12, verifiedSource: 'HR Training Cell' },
            { id: 'fdp_organized', name: 'FDP / Workshop / Conference Organised for outside participants', maxPoints: 30, verifiedSource: 'Finance & Organizing Report' },
            { id: 'fiip_immersion', name: 'Faculty Industry Immersion Program (FIIP)', maxPoints: 5, verifiedSource: 'Industry Relations Cell' },
            { id: 'research_activities', name: 'Journal Reviewer, Professional Memberships, Scopus h-index & Citations', maxPoints: 25, verifiedSource: 'Scopus Author ID API' }
          ]
        }
      ]
    },
    governance: {
      id: 'governance',
      name: 'Governance & Institutional Contribution',
      maxPoints: 333,
      categories: [
        {
          id: 'department_service',
          name: 'Department & Statutory Governance',
          maxPoints: 333,
          items: [
            { id: 'student_counseling', name: 'Counselor / Mentorship (Weekly sessions logged with student records)', maxPoints: 75, verifiedSource: 'Counseling Cell Logs' },
            { id: 'boinfra_tasks', name: 'Board of Infrastructure / Administrative Committee Tasks completed', maxPoints: 75, verifiedSource: 'BoInfra Audit Committee' },
            { id: 'statutory_committees', name: 'e-waste / WEDC / IQAC / Discipline / T&P / Anti-Ragging Committee Member', maxPoints: 33, verifiedSource: 'Registrar Office Orders' },
            { id: 'hod_eval', name: 'Head of Department (HOD) Quantitative Evaluation', maxPoints: 50, verifiedSource: 'HOD Executive Portal' },
            { id: 'dean_school_eval', name: 'School Dean Quantitative Evaluation', maxPoints: 50, verifiedSource: 'School Dean Portal' },
            { id: 'admin_dean_eval', name: 'Administrative Dean Evaluation', maxPoints: 50, verifiedSource: 'Admin Dean Portal' }
          ]
        }
      ]
    }
  },
  levelWeights: {
    'Level 10-': { teaching: 0.60, research: 0.30, governance: 0.10 },
    'Level 10': { teaching: 0.35, research: 0.35, governance: 0.30 },
    'Level 11': { teaching: 0.35, research: 0.35, governance: 0.30 },
    'Level 12': { teaching: 0.35, research: 0.35, governance: 0.30 },
    'Level 13A': { teaching: 0.30, research: 0.60, governance: 0.10 },
    'Level 13B': { teaching: 0.30, research: 0.60, governance: 0.10 },
    'Level 14': { teaching: 0.30, research: 0.60, governance: 0.10 },
    'Dean': { teaching: 0.30, research: 0.30, governance: 0.40 }
  },
  scoringBands: [
    { grade: 'A+', minScore: 85, maxScore: 100, label: 'Outstanding Academic Performance', color: 'emerald' },
    { grade: 'A', minScore: 75, maxScore: 84.99, label: 'Excellent Contribution', color: 'blue' },
    { grade: 'B++', minScore: 65, maxScore: 74.99, label: 'Very Good Academic Standard', color: 'indigo' },
    { grade: 'B+', minScore: 55, maxScore: 64.99, label: 'Satisfactory Performance', color: 'amber' },
    { grade: 'B', minScore: 45, maxScore: 54.99, label: 'Marginal Performance', color: 'orange' },
    { grade: 'C', minScore: 0, maxScore: 44.99, label: 'Needs Structured Improvement', color: 'rose' }
  ]
};
