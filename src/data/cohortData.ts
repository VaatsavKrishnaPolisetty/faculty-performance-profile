import { FacultyRecord } from '../types';

export const COHORT_FACULTY_DATA: FacultyRecord[] = [
  {
    "empId": "163",
    "name": "Prof. K V Krishna Kishore",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Professor & Dean",
    "level": "Level 14",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 280,
      "research": 240,
      "governance": 310,
      "total": 830
    },
    "verifiedScores": {
      "teaching": 280,
      "research": 240,
      "governance": 310,
      "total": 830
    },
    "weightedPercentage": 77.78,
    "contextAdjustedScore": 859,
    "contextAdjustedPercentage": 86.03,
    "grade": "A",
    "contextAdjustedGrade": "A+",
    "items": [
      {
        "id": "item_copo_163",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_163",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_163",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_163",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_163",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_163",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_163",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_163",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 8,
      "creditLoad": 12,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.8,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 22,
      "administrativeRoles": [
        "Dean of School",
        "Academic Council Chair"
      ],
      "contextualImpactNarrative": "Faculty carries 22 hrs/week of non-classroom administrative burden and teaches 8 contact hours in high-difficulty courses (difficulty index 4.8/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 890,
        "weightedPercentage": 89.1,
        "grade": "A+",
        "teachingScore": 266,
        "researchScore": 216,
        "governanceScore": 285
      },
      {
        "year": 2024,
        "rawScore": 742,
        "weightedPercentage": 60.09,
        "grade": "B++",
        "teachingScore": 272,
        "researchScore": 226,
        "governanceScore": 298
      },
      {
        "year": 2025,
        "rawScore": 830,
        "weightedPercentage": 77.78,
        "grade": "A",
        "teachingScore": 280,
        "researchScore": 240,
        "governanceScore": 310
      }
    ],
    "strengths": [
      "Heavy institutional governance contribution & student counseling engagement",
      "High scholarly publication velocity in indexed SCI/Scopus venues"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_163",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "675",
    "name": "Dr. S V Phani Kumar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Associate Professor",
    "level": "Level 12",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 305,
      "research": 210,
      "governance": 290,
      "total": 805
    },
    "verifiedScores": {
      "teaching": 305,
      "research": 210,
      "governance": 290,
      "total": 805
    },
    "weightedPercentage": 80.26,
    "contextAdjustedScore": 839,
    "contextAdjustedPercentage": 84.01,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_675",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_675",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_675",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 45,
        "verifiedPoints": 45,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_675",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_675",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_675",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_675",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_675",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 14,
      "creditLoad": 18,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.2,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 14,
      "administrativeRoles": [
        "NBA Criteria 3 Coordinator",
        "Research Lab Head"
      ],
      "contextualImpactNarrative": "Faculty carries 14 hrs/week of non-classroom administrative burden and teaches 14 contact hours in high-difficulty courses (difficulty index 4.2/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 948,
        "weightedPercentage": 94.9,
        "grade": "A+",
        "teachingScore": 290,
        "researchScore": 189,
        "governanceScore": 267
      },
      {
        "year": 2024,
        "rawScore": 727,
        "weightedPercentage": 71.45,
        "grade": "A",
        "teachingScore": 296,
        "researchScore": 197,
        "governanceScore": 278
      },
      {
        "year": 2025,
        "rawScore": 805,
        "weightedPercentage": 80.26,
        "grade": "A",
        "teachingScore": 305,
        "researchScore": 210,
        "governanceScore": 290
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "High scholarly publication velocity in indexed SCI/Scopus venues"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_675",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "189",
    "name": "Dr. S. Deva Kumar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 290,
      "research": 160,
      "governance": 275,
      "total": 725
    },
    "verifiedScores": {
      "teaching": 290,
      "research": 160,
      "governance": 275,
      "total": 725
    },
    "weightedPercentage": 72.07,
    "contextAdjustedScore": 749,
    "contextAdjustedPercentage": 75.02,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_189",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_189",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_189",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_189",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_189",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_189",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_189",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_189",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.8,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 12,
      "administrativeRoles": [
        "Timetable Coordinator",
        "Student Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 12 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.8/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 838,
        "weightedPercentage": 83.9,
        "grade": "A",
        "teachingScore": 276,
        "researchScore": 144,
        "governanceScore": 253
      },
      {
        "year": 2024,
        "rawScore": 643,
        "weightedPercentage": 62.6,
        "grade": "B++",
        "teachingScore": 281,
        "researchScore": 150,
        "governanceScore": 264
      },
      {
        "year": 2025,
        "rawScore": 725,
        "weightedPercentage": 72.07,
        "grade": "B++",
        "teachingScore": 290,
        "researchScore": 160,
        "governanceScore": 275
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_189",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "613",
    "name": "Ms. B Suvarna",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 315,
      "research": 185,
      "governance": 290,
      "total": 790
    },
    "verifiedScores": {
      "teaching": 315,
      "research": 185,
      "governance": 290,
      "total": 790
    },
    "weightedPercentage": 78.68,
    "contextAdjustedScore": 809,
    "contextAdjustedPercentage": 80.98,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_613",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_613",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_613",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 45,
        "verifiedPoints": 45,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_613",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_613",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_613",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_613",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_613",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 10,
      "administrativeRoles": [
        "WEDC Coordinator",
        "Department Library Incharge"
      ],
      "contextualImpactNarrative": "Faculty carries 10 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 656,
        "weightedPercentage": 65.7,
        "grade": "B++",
        "teachingScore": 299,
        "researchScore": 166,
        "governanceScore": 267
      },
      {
        "year": 2024,
        "rawScore": 765,
        "weightedPercentage": 75.41,
        "grade": "A",
        "teachingScore": 306,
        "researchScore": 174,
        "governanceScore": 278
      },
      {
        "year": 2025,
        "rawScore": 790,
        "weightedPercentage": 78.68,
        "grade": "A",
        "teachingScore": 315,
        "researchScore": 185,
        "governanceScore": 290
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "High scholarly publication velocity in indexed SCI/Scopus venues",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_613",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "689",
    "name": "Mr. R Prathap Kumar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 295,
      "research": 170,
      "governance": 280,
      "total": 745
    },
    "verifiedScores": {
      "teaching": 295,
      "research": 170,
      "governance": 280,
      "total": 745
    },
    "weightedPercentage": 74.1,
    "contextAdjustedScore": 758,
    "contextAdjustedPercentage": 75.85,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_689",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_689",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_689",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_689",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_689",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_689",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_689",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_689",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.6,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 10,
      "administrativeRoles": [
        "Examination Cell Member",
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 10 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.6/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 624,
        "weightedPercentage": 62.5,
        "grade": "B+",
        "teachingScore": 280,
        "researchScore": 153,
        "governanceScore": 258
      },
      {
        "year": 2024,
        "rawScore": 692,
        "weightedPercentage": 67.73,
        "grade": "B++",
        "teachingScore": 286,
        "researchScore": 160,
        "governanceScore": 269
      },
      {
        "year": 2025,
        "rawScore": 745,
        "weightedPercentage": 74.1,
        "grade": "B++",
        "teachingScore": 295,
        "researchScore": 170,
        "governanceScore": 280
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_689",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "714",
    "name": "Dr. D. Yakobu",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 285,
      "research": 155,
      "governance": 270,
      "total": 710
    },
    "verifiedScores": {
      "teaching": 285,
      "research": 155,
      "governance": 270,
      "total": 710
    },
    "weightedPercentage": 70.57,
    "contextAdjustedScore": 715,
    "contextAdjustedPercentage": 71.57,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_714",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_714",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_714",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_714",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_714",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_714",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_714",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_714",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.7,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "IQAC Auditor",
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.7/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 715,
        "weightedPercentage": 71.6,
        "grade": "B++",
        "teachingScore": 271,
        "researchScore": 140,
        "governanceScore": 248
      },
      {
        "year": 2024,
        "rawScore": 647,
        "weightedPercentage": 63.0,
        "grade": "B+",
        "teachingScore": 276,
        "researchScore": 146,
        "governanceScore": 259
      },
      {
        "year": 2025,
        "rawScore": 710,
        "weightedPercentage": 70.57,
        "grade": "B++",
        "teachingScore": 285,
        "researchScore": 155,
        "governanceScore": 270
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_714",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (155/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_714",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1201",
    "name": "Ms. M. Bhargavi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 295,
      "research": 165,
      "governance": 280,
      "total": 740
    },
    "verifiedScores": {
      "teaching": 295,
      "research": 165,
      "governance": 280,
      "total": 740
    },
    "weightedPercentage": 73.57,
    "contextAdjustedScore": 748,
    "contextAdjustedPercentage": 74.87,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1201",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1201",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1201",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1201",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1201",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1201",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1201",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1201",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.6,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 9,
      "administrativeRoles": [
        "Alumni Relations Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 9 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.6/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 758,
        "weightedPercentage": 75.9,
        "grade": "A",
        "teachingScore": 280,
        "researchScore": 148,
        "governanceScore": 258
      },
      {
        "year": 2024,
        "rawScore": 672,
        "weightedPercentage": 65.63,
        "grade": "B++",
        "teachingScore": 286,
        "researchScore": 155,
        "governanceScore": 269
      },
      {
        "year": 2025,
        "rawScore": 740,
        "weightedPercentage": 73.57,
        "grade": "B++",
        "teachingScore": 295,
        "researchScore": 165,
        "governanceScore": 280
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_1201",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1238",
    "name": "Ms. SD. Shareefunnisa",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 280,
      "research": 140,
      "governance": 260,
      "total": 680
    },
    "verifiedScores": {
      "teaching": 280,
      "research": 140,
      "governance": 260,
      "total": 680
    },
    "weightedPercentage": 67.57,
    "contextAdjustedScore": 689,
    "contextAdjustedPercentage": 68.97,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1238",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1238",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1238",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1238",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1238",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1238",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1238",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1238",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.4,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Department Placement Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.4/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 628,
        "weightedPercentage": 62.9,
        "grade": "B+",
        "teachingScore": 266,
        "researchScore": 126,
        "governanceScore": 239
      },
      {
        "year": 2024,
        "rawScore": 615,
        "weightedPercentage": 59.59,
        "grade": "B+",
        "teachingScore": 272,
        "researchScore": 132,
        "governanceScore": 250
      },
      {
        "year": 2025,
        "rawScore": 680,
        "weightedPercentage": 67.57,
        "grade": "B++",
        "teachingScore": 280,
        "researchScore": 140,
        "governanceScore": 260
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1238",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (140/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1238",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1350",
    "name": "Mr. K Pavan Kumar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 275,
      "research": 145,
      "governance": 250,
      "total": 670
    },
    "verifiedScores": {
      "teaching": 275,
      "research": 145,
      "governance": 250,
      "total": 670
    },
    "weightedPercentage": 66.67,
    "contextAdjustedScore": 673,
    "contextAdjustedPercentage": 67.37,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1350",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1350",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1350",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1350",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1350",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1350",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1350",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1350",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Sports Committee Member"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 793,
        "weightedPercentage": 79.4,
        "grade": "A",
        "teachingScore": 261,
        "researchScore": 130,
        "governanceScore": 230
      },
      {
        "year": 2024,
        "rawScore": 602,
        "weightedPercentage": 58.27,
        "grade": "B+",
        "teachingScore": 267,
        "researchScore": 136,
        "governanceScore": 240
      },
      {
        "year": 2025,
        "rawScore": 670,
        "weightedPercentage": 66.67,
        "grade": "B++",
        "teachingScore": 275,
        "researchScore": 145,
        "governanceScore": 250
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1350",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (145/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_1350",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_1350",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1429",
    "name": "Dr. P. Siva Prasad",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor (Senior)",
    "level": "Level 11",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 290,
      "research": 175,
      "governance": 270,
      "total": 735
    },
    "verifiedScores": {
      "teaching": 290,
      "research": 175,
      "governance": 270,
      "total": 735
    },
    "weightedPercentage": 73.2,
    "contextAdjustedScore": 759,
    "contextAdjustedPercentage": 76.0,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_1429",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1429",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1429",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1429",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1429",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1429",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1429",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1429",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.0,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 11,
      "administrativeRoles": [
        "Curriculum Development Member"
      ],
      "contextualImpactNarrative": "Faculty carries 11 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 4.0/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 738,
        "weightedPercentage": 73.9,
        "grade": "B++",
        "teachingScore": 276,
        "researchScore": 158,
        "governanceScore": 248
      },
      {
        "year": 2024,
        "rawScore": 652,
        "weightedPercentage": 64.19,
        "grade": "B+",
        "teachingScore": 281,
        "researchScore": 164,
        "governanceScore": 259
      },
      {
        "year": 2025,
        "rawScore": 735,
        "weightedPercentage": 73.2,
        "grade": "B++",
        "teachingScore": 290,
        "researchScore": 175,
        "governanceScore": 270
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_1429",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1702",
    "name": "Dr. Jhansi Lakshmi P",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 288,
      "research": 150,
      "governance": 265,
      "total": 703
    },
    "verifiedScores": {
      "teaching": 288,
      "research": 150,
      "governance": 265,
      "total": 703
    },
    "weightedPercentage": 69.91,
    "contextAdjustedScore": 708,
    "contextAdjustedPercentage": 70.91,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1702",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1702",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1702",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1702",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1702",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1702",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1702",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1702",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.7,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Women Empowerment Cell Member"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.7/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 694,
        "weightedPercentage": 69.5,
        "grade": "B++",
        "teachingScore": 274,
        "researchScore": 135,
        "governanceScore": 244
      },
      {
        "year": 2024,
        "rawScore": 641,
        "weightedPercentage": 62.34,
        "grade": "B+",
        "teachingScore": 279,
        "researchScore": 141,
        "governanceScore": 254
      },
      {
        "year": 2025,
        "rawScore": 703,
        "weightedPercentage": 69.91,
        "grade": "B++",
        "teachingScore": 288,
        "researchScore": 150,
        "governanceScore": 265
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1702",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (150/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1702",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1976",
    "name": "Mr. Panthagani Vijaya Babu",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 298,
      "research": 130,
      "governance": 290,
      "total": 718
    },
    "verifiedScores": {
      "teaching": 298,
      "research": 130,
      "governance": 290,
      "total": 718
    },
    "weightedPercentage": 74.11,
    "contextAdjustedScore": 797,
    "contextAdjustedPercentage": 79.81,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_1976",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1976",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1976",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1976",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1976",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1976",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1976",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1976",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 20,
      "creditLoad": 24,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 4.1,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 14,
      "administrativeRoles": [
        "Lab Infrastructure Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 14 hrs/week of non-classroom administrative burden and teaches 20 contact hours in high-difficulty courses (difficulty index 4.1/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 762,
        "weightedPercentage": 76.3,
        "grade": "A",
        "teachingScore": 283,
        "researchScore": 117,
        "governanceScore": 267
      },
      {
        "year": 2024,
        "rawScore": 625,
        "weightedPercentage": 59.1,
        "grade": "B+",
        "teachingScore": 289,
        "researchScore": 122,
        "governanceScore": 278
      },
      {
        "year": 2025,
        "rawScore": 718,
        "weightedPercentage": 74.11,
        "grade": "B++",
        "teachingScore": 298,
        "researchScore": 130,
        "governanceScore": 290
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1976",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (130/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1976",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1988",
    "name": "Ms. Ch. Pushya",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 270,
      "research": 115,
      "governance": 240,
      "total": 625
    },
    "verifiedScores": {
      "teaching": 270,
      "research": 115,
      "governance": 240,
      "total": 625
    },
    "weightedPercentage": 66.22,
    "contextAdjustedScore": 675,
    "contextAdjustedPercentage": 67.62,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1988",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1988",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1988",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1988",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1988",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1988",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1988",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1988",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.2,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 6,
      "administrativeRoles": [
        "Counselor (25 students)"
      ],
      "contextualImpactNarrative": "Faculty carries 6 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.2/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 784,
        "weightedPercentage": 78.5,
        "grade": "A",
        "teachingScore": 256,
        "researchScore": 104,
        "governanceScore": 221
      },
      {
        "year": 2024,
        "rawScore": 547,
        "weightedPercentage": 52.98,
        "grade": "B",
        "teachingScore": 262,
        "researchScore": 108,
        "governanceScore": 230
      },
      {
        "year": 2025,
        "rawScore": 625,
        "weightedPercentage": 66.22,
        "grade": "B++",
        "teachingScore": 270,
        "researchScore": 115,
        "governanceScore": 240
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1988",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (115/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_1988",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_1988",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1989",
    "name": "Dr. T. R. Rajesh",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 282,
      "research": 125,
      "governance": 250,
      "total": 657
    },
    "verifiedScores": {
      "teaching": 282,
      "research": 125,
      "governance": 250,
      "total": 657
    },
    "weightedPercentage": 69.58,
    "contextAdjustedScore": 714,
    "contextAdjustedPercentage": 71.43,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1989",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1989",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1989",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1989",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1989",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1989",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1989",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1989",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.8,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Website Committee Member"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.8/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 351,
        "weightedPercentage": 35.1,
        "grade": "C",
        "teachingScore": 268,
        "researchScore": 112,
        "governanceScore": 230
      },
      {
        "year": 2024,
        "rawScore": 551,
        "weightedPercentage": 53.58,
        "grade": "B",
        "teachingScore": 274,
        "researchScore": 118,
        "governanceScore": 240
      },
      {
        "year": 2025,
        "rawScore": 657,
        "weightedPercentage": 69.58,
        "grade": "B++",
        "teachingScore": 282,
        "researchScore": 125,
        "governanceScore": 250
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1989",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (125/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1989",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2181",
    "name": "Dr. G. Balu Narasimha Rao",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 295,
      "research": 145,
      "governance": 275,
      "total": 715
    },
    "verifiedScores": {
      "teaching": 295,
      "research": 145,
      "governance": 275,
      "total": 715
    },
    "weightedPercentage": 74.47,
    "contextAdjustedScore": 779,
    "contextAdjustedPercentage": 77.97,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_2181",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2181",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2181",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2181",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2181",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2181",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2181",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2181",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 4.0,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 11,
      "administrativeRoles": [
        "Discipline Committee Member"
      ],
      "contextualImpactNarrative": "Faculty carries 11 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 4.0/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 787,
        "weightedPercentage": 78.8,
        "grade": "A",
        "teachingScore": 280,
        "researchScore": 130,
        "governanceScore": 253
      },
      {
        "year": 2024,
        "rawScore": 636,
        "weightedPercentage": 60.09,
        "grade": "B+",
        "teachingScore": 286,
        "researchScore": 136,
        "governanceScore": 264
      },
      {
        "year": 2025,
        "rawScore": 715,
        "weightedPercentage": 74.47,
        "grade": "B++",
        "teachingScore": 295,
        "researchScore": 145,
        "governanceScore": 275
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2181",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (145/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2181",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2342",
    "name": "Dr. M. Umadevi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Associate Professor",
    "level": "Level 12",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 260,
      "research": 110,
      "governance": 230,
      "total": 600
    },
    "verifiedScores": {
      "teaching": 260,
      "research": 110,
      "governance": 230,
      "total": 600
    },
    "weightedPercentage": 59.61,
    "contextAdjustedScore": 596,
    "contextAdjustedPercentage": 59.61,
    "grade": "B+",
    "contextAdjustedGrade": "B+",
    "items": [
      {
        "id": "item_copo_2342",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2342",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2342",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2342",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2342",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2342",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2342",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2342",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 14,
      "creditLoad": 18,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 5,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 5 hrs/week of non-classroom administrative burden and teaches 14 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 450,
        "weightedPercentage": 45.0,
        "grade": "B",
        "teachingScore": 247,
        "researchScore": 99,
        "governanceScore": 212
      },
      {
        "year": 2024,
        "rawScore": 591,
        "weightedPercentage": 36.67,
        "grade": "C",
        "teachingScore": 252,
        "researchScore": 103,
        "governanceScore": 221
      },
      {
        "year": 2025,
        "rawScore": 600,
        "weightedPercentage": 59.61,
        "grade": "B+",
        "teachingScore": 260,
        "researchScore": 110,
        "governanceScore": 230
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2342",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (110/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2342",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2342",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2396",
    "name": "Dr. Satish Kumar Satti",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor (Senior)",
    "level": "Level 11",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 290,
      "research": 165,
      "governance": 260,
      "total": 715
    },
    "verifiedScores": {
      "teaching": 290,
      "research": 165,
      "governance": 260,
      "total": 715
    },
    "weightedPercentage": 71.25,
    "contextAdjustedScore": 729,
    "contextAdjustedPercentage": 73.0,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2396",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2396",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2396",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2396",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2396",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2396",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2396",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2396",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.9,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 9,
      "administrativeRoles": [
        "Industry Relations Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 9 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.9/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 617,
        "weightedPercentage": 61.8,
        "grade": "B+",
        "teachingScore": 276,
        "researchScore": 148,
        "governanceScore": 239
      },
      {
        "year": 2024,
        "rawScore": 636,
        "weightedPercentage": 61.81,
        "grade": "B+",
        "teachingScore": 281,
        "researchScore": 155,
        "governanceScore": 250
      },
      {
        "year": 2025,
        "rawScore": 715,
        "weightedPercentage": 71.25,
        "grade": "B++",
        "teachingScore": 290,
        "researchScore": 165,
        "governanceScore": 260
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_2396",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2433",
    "name": "Dr. Md Oqail Ahmad",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 280,
      "research": 135,
      "governance": 245,
      "total": 660
    },
    "verifiedScores": {
      "teaching": 280,
      "research": 135,
      "governance": 245,
      "total": 660
    },
    "weightedPercentage": 65.69,
    "contextAdjustedScore": 663,
    "contextAdjustedPercentage": 66.39,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2433",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2433",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2433",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2433",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2433",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2433",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2433",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2433",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Cultural Forum Member"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 561,
        "weightedPercentage": 56.2,
        "grade": "B+",
        "teachingScore": 266,
        "researchScore": 122,
        "governanceScore": 225
      },
      {
        "year": 2024,
        "rawScore": 576,
        "weightedPercentage": 56.2,
        "grade": "B",
        "teachingScore": 272,
        "researchScore": 127,
        "governanceScore": 235
      },
      {
        "year": 2025,
        "rawScore": 660,
        "weightedPercentage": 65.69,
        "grade": "B++",
        "teachingScore": 280,
        "researchScore": 135,
        "governanceScore": 245
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2433",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (135/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2433",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2462",
    "name": "Dr. Prashant Upadhyay",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Associate Professor",
    "level": "Level 12",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 275,
      "research": 140,
      "governance": 250,
      "total": 665
    },
    "verifiedScores": {
      "teaching": 275,
      "research": 140,
      "governance": 250,
      "total": 665
    },
    "weightedPercentage": 66.14,
    "contextAdjustedScore": 670,
    "contextAdjustedPercentage": 67.04,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2462",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2462",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2462",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2462",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2462",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2462",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2462",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2462",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 14,
      "creditLoad": 18,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.1,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Research Advisory Member"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 14 contact hours in high-difficulty courses (difficulty index 4.1/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 553,
        "weightedPercentage": 55.4,
        "grade": "B+",
        "teachingScore": 261,
        "researchScore": 126,
        "governanceScore": 230
      },
      {
        "year": 2024,
        "rawScore": 569,
        "weightedPercentage": 55.47,
        "grade": "B",
        "teachingScore": 267,
        "researchScore": 132,
        "governanceScore": 240
      },
      {
        "year": 2025,
        "rawScore": 665,
        "weightedPercentage": 66.14,
        "grade": "B++",
        "teachingScore": 275,
        "researchScore": 140,
        "governanceScore": 250
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2462",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (140/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2462",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2462",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2468",
    "name": "Dr. Sunil Babu Melingi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Associate Professor",
    "level": "Level 12",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 292,
      "research": 168,
      "governance": 265,
      "total": 725
    },
    "verifiedScores": {
      "teaching": 292,
      "research": 168,
      "governance": 265,
      "total": 725
    },
    "weightedPercentage": 72.22,
    "contextAdjustedScore": 742,
    "contextAdjustedPercentage": 74.32,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2468",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2468",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2468",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2468",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2468",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2468",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2468",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2468",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 14,
      "creditLoad": 18,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.3,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 10,
      "administrativeRoles": [
        "Higher Studies Cell Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 10 hrs/week of non-classroom administrative burden and teaches 14 contact hours in high-difficulty courses (difficulty index 4.3/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 614,
        "weightedPercentage": 61.5,
        "grade": "B+",
        "teachingScore": 277,
        "researchScore": 151,
        "governanceScore": 244
      },
      {
        "year": 2024,
        "rawScore": 633,
        "weightedPercentage": 61.53,
        "grade": "B+",
        "teachingScore": 283,
        "researchScore": 158,
        "governanceScore": 254
      },
      {
        "year": 2025,
        "rawScore": 725,
        "weightedPercentage": 72.22,
        "grade": "B++",
        "teachingScore": 292,
        "researchScore": 168,
        "governanceScore": 265
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_2468",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2472",
    "name": "Dr. Vinoj J",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 305,
      "research": 180,
      "governance": 285,
      "total": 770
    },
    "verifiedScores": {
      "teaching": 305,
      "research": 180,
      "governance": 285,
      "total": 770
    },
    "weightedPercentage": 76.65,
    "contextAdjustedScore": 794,
    "contextAdjustedPercentage": 79.45,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_2472",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2472",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2472",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 45,
        "verifiedPoints": 45,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2472",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2472",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2472",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2472",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2472",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.0,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 11,
      "administrativeRoles": [
        "Innovation & Incubation Lead"
      ],
      "contextualImpactNarrative": "Faculty carries 11 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 4.0/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 679,
        "weightedPercentage": 68.0,
        "grade": "B++",
        "teachingScore": 290,
        "researchScore": 162,
        "governanceScore": 262
      },
      {
        "year": 2024,
        "rawScore": 709,
        "weightedPercentage": 69.85,
        "grade": "B++",
        "teachingScore": 296,
        "researchScore": 169,
        "governanceScore": 274
      },
      {
        "year": 2025,
        "rawScore": 770,
        "weightedPercentage": 76.65,
        "grade": "A",
        "teachingScore": 305,
        "researchScore": 180,
        "governanceScore": 285
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "High scholarly publication velocity in indexed SCI/Scopus venues",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_2472",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2480",
    "name": "Dr. Rambabu Kusuma",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 275,
      "research": 130,
      "governance": 240,
      "total": 645
    },
    "verifiedScores": {
      "teaching": 275,
      "research": 130,
      "governance": 240,
      "total": 645
    },
    "weightedPercentage": 64.19,
    "contextAdjustedScore": 648,
    "contextAdjustedPercentage": 64.89,
    "grade": "B+",
    "contextAdjustedGrade": "B+",
    "items": [
      {
        "id": "item_copo_2480",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2480",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2480",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2480",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2480",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2480",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2480",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2480",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.4,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 6,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 6 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.4/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 539,
        "weightedPercentage": 54.0,
        "grade": "B",
        "teachingScore": 261,
        "researchScore": 117,
        "governanceScore": 221
      },
      {
        "year": 2024,
        "rawScore": 564,
        "weightedPercentage": 55.17,
        "grade": "B",
        "teachingScore": 267,
        "researchScore": 122,
        "governanceScore": 230
      },
      {
        "year": 2025,
        "rawScore": 645,
        "weightedPercentage": 64.19,
        "grade": "B+",
        "teachingScore": 275,
        "researchScore": 130,
        "governanceScore": 240
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2480",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (130/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2480",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2480",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2495",
    "name": "Dr. R. Renugadevi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor (Senior)",
    "level": "Level 11",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 300,
      "research": 178,
      "governance": 280,
      "total": 758
    },
    "verifiedScores": {
      "teaching": 300,
      "research": 178,
      "governance": 280,
      "total": 758
    },
    "weightedPercentage": 75.47,
    "contextAdjustedScore": 788,
    "contextAdjustedPercentage": 78.87,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_2495",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2495",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2495",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2495",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2495",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2495",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2495",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2495",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 4.1,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 12,
      "administrativeRoles": [
        "NAAC Criteria 2 Head"
      ],
      "contextualImpactNarrative": "Faculty carries 12 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 4.1/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 674,
        "weightedPercentage": 67.5,
        "grade": "B++",
        "teachingScore": 285,
        "researchScore": 160,
        "governanceScore": 258
      },
      {
        "year": 2024,
        "rawScore": 691,
        "weightedPercentage": 68.29,
        "grade": "B++",
        "teachingScore": 291,
        "researchScore": 167,
        "governanceScore": 269
      },
      {
        "year": 2025,
        "rawScore": 758,
        "weightedPercentage": 75.47,
        "grade": "A",
        "teachingScore": 300,
        "researchScore": 178,
        "governanceScore": 280
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_2495",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2506",
    "name": "Dr. Saubhagya Ranjan Biswal",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 265,
      "research": 120,
      "governance": 235,
      "total": 620
    },
    "verifiedScores": {
      "teaching": 265,
      "research": 120,
      "governance": 235,
      "total": 620
    },
    "weightedPercentage": 61.64,
    "contextAdjustedScore": 623,
    "contextAdjustedPercentage": 62.34,
    "grade": "B+",
    "contextAdjustedGrade": "B+",
    "items": [
      {
        "id": "item_copo_2506",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2506",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2506",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2506",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2506",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2506",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2506",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2506",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.3,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 5,
      "administrativeRoles": [
        "Hostel Warden (Assistant)"
      ],
      "contextualImpactNarrative": "Faculty carries 5 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.3/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 495,
        "weightedPercentage": 49.5,
        "grade": "B",
        "teachingScore": 252,
        "researchScore": 108,
        "governanceScore": 216
      },
      {
        "year": 2024,
        "rawScore": 520,
        "weightedPercentage": 50.6,
        "grade": "B",
        "teachingScore": 257,
        "researchScore": 113,
        "governanceScore": 226
      },
      {
        "year": 2025,
        "rawScore": 620,
        "weightedPercentage": 61.64,
        "grade": "B+",
        "teachingScore": 265,
        "researchScore": 120,
        "governanceScore": 235
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2506",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (120/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2506",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2506",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "30071",
    "name": "Dr. Deepak Chowdary Edara",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 278,
      "research": 132,
      "governance": 248,
      "total": 658
    },
    "verifiedScores": {
      "teaching": 278,
      "research": 132,
      "governance": 248,
      "total": 658
    },
    "weightedPercentage": 65.44,
    "contextAdjustedScore": 662,
    "contextAdjustedPercentage": 66.29,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_30071",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_30071",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_30071",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_30071",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_30071",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_30071",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_30071",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_30071",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 16,
      "creditLoad": 20,
      "distinctPreparations": 2,
      "courseDifficultyIndex": 3.6,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Department Media Cell"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 16 contact hours in high-difficulty courses (difficulty index 3.6/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 539,
        "weightedPercentage": 54.0,
        "grade": "B",
        "teachingScore": 264,
        "researchScore": 119,
        "governanceScore": 228
      },
      {
        "year": 2024,
        "rawScore": 562,
        "weightedPercentage": 54.68,
        "grade": "B",
        "teachingScore": 270,
        "researchScore": 124,
        "governanceScore": 238
      },
      {
        "year": 2025,
        "rawScore": 658,
        "weightedPercentage": 65.44,
        "grade": "B++",
        "teachingScore": 278,
        "researchScore": 132,
        "governanceScore": 248
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_30071",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (132/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_30071",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_30071",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1919",
    "name": "Ms. Shaik Sajida Sultana",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 272,
      "research": 118,
      "governance": 242,
      "total": 632
    },
    "verifiedScores": {
      "teaching": 272,
      "research": 118,
      "governance": 242,
      "total": 632
    },
    "weightedPercentage": 66.91,
    "contextAdjustedScore": 682,
    "contextAdjustedPercentage": 68.31,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1919",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1919",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1919",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1919",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1919",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1919",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1919",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1919",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.3,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 6,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 6 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.3/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 556,
        "weightedPercentage": 55.7,
        "grade": "B+",
        "teachingScore": 258,
        "researchScore": 106,
        "governanceScore": 223
      },
      {
        "year": 2024,
        "rawScore": 547,
        "weightedPercentage": 53.16,
        "grade": "B",
        "teachingScore": 264,
        "researchScore": 111,
        "governanceScore": 232
      },
      {
        "year": 2025,
        "rawScore": 632,
        "weightedPercentage": 66.91,
        "grade": "B++",
        "teachingScore": 272,
        "researchScore": 118,
        "governanceScore": 242
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1919",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (118/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_1919",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_1919",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "646",
    "name": "Dr. Parimala Garnepudi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "Ph.D",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 302,
      "research": 160,
      "governance": 290,
      "total": 752
    },
    "verifiedScores": {
      "teaching": 302,
      "research": 160,
      "governance": 290,
      "total": 752
    },
    "weightedPercentage": 77.54,
    "contextAdjustedScore": 822,
    "contextAdjustedPercentage": 82.24,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_646",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_646",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_646",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 45,
        "verifiedPoints": 45,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_646",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_646",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_646",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_646",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_646",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 4.2,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 13,
      "administrativeRoles": [
        "Student Affairs Member",
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 13 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 4.2/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 555,
        "weightedPercentage": 55.6,
        "grade": "B+",
        "teachingScore": 287,
        "researchScore": 144,
        "governanceScore": 267
      },
      {
        "year": 2024,
        "rawScore": 684,
        "weightedPercentage": 66.89,
        "grade": "B++",
        "teachingScore": 293,
        "researchScore": 150,
        "governanceScore": 278
      },
      {
        "year": 2025,
        "rawScore": 752,
        "weightedPercentage": 77.54,
        "grade": "A",
        "teachingScore": 302,
        "researchScore": 160,
        "governanceScore": 290
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_3_646",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1913",
    "name": "Mr. Kiran Kumar Kaveti",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2019-06-15",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 303,
      "research": 146,
      "governance": 328,
      "total": 777
    },
    "verifiedScores": {
      "teaching": 303,
      "research": 146,
      "governance": 328,
      "total": 777
    },
    "weightedPercentage": 77.6,
    "contextAdjustedScore": 842,
    "contextAdjustedPercentage": 84.2,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_1913",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1913",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1913",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 30,
        "verifiedPoints": 30,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1913",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1913",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1913",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1913",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1913",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 20,
      "creditLoad": 24,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 4.5,
      "sectionEntryPercentile": 52,
      "remedialStudentPercent": 28,
      "administrativeBurdenHours": 18,
      "administrativeRoles": [
        "Board of Infrastructure (BoInfra) Coordinator",
        "e-waste Management Coordinator",
        "Student Counselor (35 Mentees)"
      ],
      "contextualImpactNarrative": "Faculty carries 18 hrs/week of non-classroom administrative burden and teaches 20 contact hours in high-difficulty courses (difficulty index 4.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 788,
        "weightedPercentage": 78.9,
        "grade": "A",
        "teachingScore": 288,
        "researchScore": 131,
        "governanceScore": 302
      },
      {
        "year": 2024,
        "rawScore": 604,
        "weightedPercentage": 60.19,
        "grade": "B+",
        "teachingScore": 294,
        "researchScore": 137,
        "governanceScore": 315
      },
      {
        "year": 2025,
        "rawScore": 777,
        "weightedPercentage": 77.6,
        "grade": "B++",
        "teachingScore": 303,
        "researchScore": 146,
        "governanceScore": 328
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1913",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (146/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1913",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "confirmed_by_faculty"
  },
  {
    "empId": "1918",
    "name": "Mr. Uttej Kumar Nannapaneni",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 292,
      "research": 138,
      "governance": 270,
      "total": 700
    },
    "verifiedScores": {
      "teaching": 292,
      "research": 138,
      "governance": 270,
      "total": 700
    },
    "weightedPercentage": 73.15,
    "contextAdjustedScore": 760,
    "contextAdjustedPercentage": 76.05,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_1918",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1918",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1918",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1918",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1918",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1918",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1918",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1918",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.9,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 10,
      "administrativeRoles": [
        "Code Club Faculty Mentor"
      ],
      "contextualImpactNarrative": "Faculty carries 10 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.9/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 743,
        "weightedPercentage": 74.4,
        "grade": "B++",
        "teachingScore": 277,
        "researchScore": 124,
        "governanceScore": 248
      },
      {
        "year": 2024,
        "rawScore": 620,
        "weightedPercentage": 58.65,
        "grade": "B+",
        "teachingScore": 283,
        "researchScore": 130,
        "governanceScore": 259
      },
      {
        "year": 2025,
        "rawScore": 700,
        "weightedPercentage": 73.15,
        "grade": "B++",
        "teachingScore": 292,
        "researchScore": 138,
        "governanceScore": 270
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1918",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (138/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1918",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1920",
    "name": "Ms. Anusha",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 284,
      "research": 128,
      "governance": 255,
      "total": 667
    },
    "verifiedScores": {
      "teaching": 284,
      "research": 128,
      "governance": 255,
      "total": 667
    },
    "weightedPercentage": 70.36,
    "contextAdjustedScore": 717,
    "contextAdjustedPercentage": 71.76,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_1920",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1920",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1920",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1920",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1920",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1920",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1920",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1920",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.4,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.4/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 397,
        "weightedPercentage": 39.7,
        "grade": "C",
        "teachingScore": 270,
        "researchScore": 115,
        "governanceScore": 235
      },
      {
        "year": 2024,
        "rawScore": 581,
        "weightedPercentage": 58.12,
        "grade": "B+",
        "teachingScore": 275,
        "researchScore": 120,
        "governanceScore": 245
      },
      {
        "year": 2025,
        "rawScore": 667,
        "weightedPercentage": 70.36,
        "grade": "B++",
        "teachingScore": 284,
        "researchScore": 128,
        "governanceScore": 255
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1920",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (128/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1920",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "1958",
    "name": "Mr. Ongole Gandhi",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 294,
      "research": 142,
      "governance": 275,
      "total": 711
    },
    "verifiedScores": {
      "teaching": 294,
      "research": 142,
      "governance": 275,
      "total": 711
    },
    "weightedPercentage": 74.02,
    "contextAdjustedScore": 773,
    "contextAdjustedPercentage": 77.37,
    "grade": "B++",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_1958",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_1958",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_1958",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_1958",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_1958",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_1958",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_1958",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_1958",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.9,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 11,
      "administrativeRoles": [
        "Technical Skill Dev Member"
      ],
      "contextualImpactNarrative": "Faculty carries 11 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.9/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 811,
        "weightedPercentage": 81.2,
        "grade": "A",
        "teachingScore": 279,
        "researchScore": 128,
        "governanceScore": 253
      },
      {
        "year": 2024,
        "rawScore": 622,
        "weightedPercentage": 59.28,
        "grade": "B+",
        "teachingScore": 285,
        "researchScore": 133,
        "governanceScore": 264
      },
      {
        "year": 2025,
        "rawScore": 711,
        "weightedPercentage": 74.02,
        "grade": "B++",
        "teachingScore": 294,
        "researchScore": 142,
        "governanceScore": 275
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_1958",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (142/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_1958",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2172",
    "name": "Mr. Shaik Sikindar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 268,
      "research": 110,
      "governance": 235,
      "total": 613
    },
    "verifiedScores": {
      "teaching": 268,
      "research": 110,
      "governance": 235,
      "total": 613
    },
    "weightedPercentage": 65.26,
    "contextAdjustedScore": 666,
    "contextAdjustedPercentage": 66.66,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2172",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2172",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2172",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2172",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2172",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2172",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2172",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2172",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.3,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 5,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 5 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.3/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 703,
        "weightedPercentage": 70.4,
        "grade": "B++",
        "teachingScore": 255,
        "researchScore": 99,
        "governanceScore": 216
      },
      {
        "year": 2024,
        "rawScore": 524,
        "weightedPercentage": 47.76,
        "grade": "B",
        "teachingScore": 260,
        "researchScore": 103,
        "governanceScore": 226
      },
      {
        "year": 2025,
        "rawScore": 613,
        "weightedPercentage": 65.26,
        "grade": "B++",
        "teachingScore": 268,
        "researchScore": 110,
        "governanceScore": 235
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2172",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (110/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2172",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2172",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2209",
    "name": "Mr. Ravi Kishore Reddy",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 288,
      "research": 134,
      "governance": 262,
      "total": 684
    },
    "verifiedScores": {
      "teaching": 288,
      "research": 134,
      "governance": 262,
      "total": 684
    },
    "weightedPercentage": 71.83,
    "contextAdjustedScore": 739,
    "contextAdjustedPercentage": 73.98,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2209",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2209",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2209",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2209",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2209",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2209",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2209",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2209",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.7,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 9,
      "administrativeRoles": [
        "Department Attendance Incharge"
      ],
      "contextualImpactNarrative": "Faculty carries 9 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.7/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 450,
        "weightedPercentage": 45.0,
        "grade": "B",
        "teachingScore": 274,
        "researchScore": 121,
        "governanceScore": 241
      },
      {
        "year": 2024,
        "rawScore": 603,
        "weightedPercentage": 57.12,
        "grade": "B",
        "teachingScore": 279,
        "researchScore": 126,
        "governanceScore": 252
      },
      {
        "year": 2025,
        "rawScore": 684,
        "weightedPercentage": 71.83,
        "grade": "B++",
        "teachingScore": 288,
        "researchScore": 134,
        "governanceScore": 262
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2209",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (134/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2209",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2290",
    "name": "Ms. Guggilam Navya",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 290,
      "research": 136,
      "governance": 265,
      "total": 691
    },
    "verifiedScores": {
      "teaching": 290,
      "research": 136,
      "governance": 265,
      "total": 691
    },
    "weightedPercentage": 72.46,
    "contextAdjustedScore": 739,
    "contextAdjustedPercentage": 74.01,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2290",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2290",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2290",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2290",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2290",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2290",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2290",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2290",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.6,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Parent Teacher Association Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.6/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 736,
        "weightedPercentage": 73.7,
        "grade": "B++",
        "teachingScore": 276,
        "researchScore": 122,
        "governanceScore": 244
      },
      {
        "year": 2024,
        "rawScore": 603,
        "weightedPercentage": 57.57,
        "grade": "B+",
        "teachingScore": 281,
        "researchScore": 128,
        "governanceScore": 254
      },
      {
        "year": 2025,
        "rawScore": 691,
        "weightedPercentage": 72.46,
        "grade": "B++",
        "teachingScore": 290,
        "researchScore": 136,
        "governanceScore": 265
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2290",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (136/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2290",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2318",
    "name": "Mr. Sourav Mondal",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 280,
      "research": 130,
      "governance": 250,
      "total": 660
    },
    "verifiedScores": {
      "teaching": 280,
      "research": 130,
      "governance": 250,
      "total": 660
    },
    "weightedPercentage": 69.67,
    "contextAdjustedScore": 711,
    "contextAdjustedPercentage": 71.22,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2318",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2318",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2318",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2318",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2318",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2318",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2318",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2318",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.6,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "International Students Mentor"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.6/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 515,
        "weightedPercentage": 51.6,
        "grade": "B",
        "teachingScore": 266,
        "researchScore": 117,
        "governanceScore": 230
      },
      {
        "year": 2024,
        "rawScore": 574,
        "weightedPercentage": 57.49,
        "grade": "B",
        "teachingScore": 272,
        "researchScore": 122,
        "governanceScore": 240
      },
      {
        "year": 2025,
        "rawScore": 660,
        "weightedPercentage": 69.67,
        "grade": "B++",
        "teachingScore": 280,
        "researchScore": 130,
        "governanceScore": 250
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2318",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (130/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2318",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2341",
    "name": "Mr. Jayasankar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 289,
      "research": 135,
      "governance": 265,
      "total": 689
    },
    "verifiedScores": {
      "teaching": 289,
      "research": 135,
      "governance": 265,
      "total": 689
    },
    "weightedPercentage": 72.19,
    "contextAdjustedScore": 744,
    "contextAdjustedPercentage": 74.49,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2341",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2341",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2341",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2341",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2341",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2341",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2341",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2341",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.8,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 9,
      "administrativeRoles": [
        "Department Exam Coordinator"
      ],
      "contextualImpactNarrative": "Faculty carries 9 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.8/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 569,
        "weightedPercentage": 57.0,
        "grade": "B+",
        "teachingScore": 275,
        "researchScore": 122,
        "governanceScore": 244
      },
      {
        "year": 2024,
        "rawScore": 607,
        "weightedPercentage": 57.48,
        "grade": "B",
        "teachingScore": 280,
        "researchScore": 127,
        "governanceScore": 254
      },
      {
        "year": 2025,
        "rawScore": 689,
        "weightedPercentage": 72.19,
        "grade": "B++",
        "teachingScore": 289,
        "researchScore": 135,
        "governanceScore": 265
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2341",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (135/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2341",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2349",
    "name": "Mr. Bhadar",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 282,
      "research": 132,
      "governance": 255,
      "total": 669
    },
    "verifiedScores": {
      "teaching": 282,
      "research": 132,
      "governance": 255,
      "total": 669
    },
    "weightedPercentage": 70.36,
    "contextAdjustedScore": 717,
    "contextAdjustedPercentage": 71.76,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2349",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2349",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2349",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2349",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2349",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2349",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2349",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2349",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 564,
        "weightedPercentage": 56.49,
        "grade": "B+",
        "teachingScore": 268,
        "researchScore": 119,
        "governanceScore": 235
      },
      {
        "year": 2024,
        "rawScore": 591,
        "weightedPercentage": 56.49,
        "grade": "B",
        "teachingScore": 274,
        "researchScore": 124,
        "governanceScore": 245
      },
      {
        "year": 2025,
        "rawScore": 669,
        "weightedPercentage": 70.36,
        "grade": "B++",
        "teachingScore": 282,
        "researchScore": 132,
        "governanceScore": 255
      }
    ],
    "strengths": [
      "Consistent course delivery and curriculum adherence"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2349",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (132/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2349",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2451",
    "name": "Mr. Suresh Babu",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 298,
      "research": 155,
      "governance": 280,
      "total": 733
    },
    "verifiedScores": {
      "teaching": 298,
      "research": 155,
      "governance": 280,
      "total": 733
    },
    "weightedPercentage": 76.07,
    "contextAdjustedScore": 801,
    "contextAdjustedPercentage": 80.17,
    "grade": "A",
    "contextAdjustedGrade": "A",
    "items": [
      {
        "id": "item_copo_2451",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2451",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2451",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2451",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 100,
        "verifiedPoints": 100,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2451",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 13,
        "verifiedPoints": 13,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2451",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2451",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2451",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 4.1,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 12,
      "administrativeRoles": [
        "BoAdmission Member"
      ],
      "contextualImpactNarrative": "Faculty carries 12 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 4.1/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 611,
        "weightedPercentage": 61.2,
        "grade": "B+",
        "teachingScore": 283,
        "researchScore": 140,
        "governanceScore": 258
      },
      {
        "year": 2024,
        "rawScore": 665,
        "weightedPercentage": 62.7,
        "grade": "B+",
        "teachingScore": 289,
        "researchScore": 146,
        "governanceScore": 269
      },
      {
        "year": 2025,
        "rawScore": 733,
        "weightedPercentage": 76.07,
        "grade": "A",
        "teachingScore": 298,
        "researchScore": 155,
        "governanceScore": 280
      }
    ],
    "strengths": [
      "Exemplary Teaching-Learning attainment (>90% pass rate, full course file audit)",
      "Heavy institutional governance contribution & student counseling engagement",
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2451",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (155/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2451",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2507",
    "name": "Mr. Kiran Kumar Raja",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 286,
      "research": 135,
      "governance": 262,
      "total": 683
    },
    "verifiedScores": {
      "teaching": 286,
      "research": 135,
      "governance": 262,
      "total": 683
    },
    "weightedPercentage": 71.56,
    "contextAdjustedScore": 732,
    "contextAdjustedPercentage": 73.26,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2507",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2507",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2507",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2507",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2507",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2507",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 60,
        "verifiedPoints": 60,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2507",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2507",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.7,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 8,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 8 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.7/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 559,
        "weightedPercentage": 56.0,
        "grade": "B+",
        "teachingScore": 272,
        "researchScore": 122,
        "governanceScore": 241
      },
      {
        "year": 2024,
        "rawScore": 607,
        "weightedPercentage": 57.48,
        "grade": "B",
        "teachingScore": 277,
        "researchScore": 127,
        "governanceScore": 252
      },
      {
        "year": 2025,
        "rawScore": 683,
        "weightedPercentage": 71.56,
        "grade": "B++",
        "teachingScore": 286,
        "researchScore": 135,
        "governanceScore": 262
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2507",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (135/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2507",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2516",
    "name": "Mr. Narasimha Rao",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 250,
      "research": 105,
      "governance": 220,
      "total": 575
    },
    "verifiedScores": {
      "teaching": 250,
      "research": 105,
      "governance": 220,
      "total": 575
    },
    "weightedPercentage": 61.11,
    "contextAdjustedScore": 624,
    "contextAdjustedPercentage": 62.51,
    "grade": "B+",
    "contextAdjustedGrade": "B+",
    "items": [
      {
        "id": "item_copo_2516",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2516",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2516",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2516",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2516",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2516",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2516",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2516",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.1,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 4,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 4 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.1/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 480,
        "weightedPercentage": 48.0,
        "grade": "B",
        "teachingScore": 238,
        "researchScore": 94,
        "governanceScore": 202
      },
      {
        "year": 2024,
        "rawScore": 482,
        "weightedPercentage": 50.21,
        "grade": "B",
        "teachingScore": 242,
        "researchScore": 99,
        "governanceScore": 211
      },
      {
        "year": 2025,
        "rawScore": 575,
        "weightedPercentage": 61.11,
        "grade": "B+",
        "teachingScore": 250,
        "researchScore": 105,
        "governanceScore": 220
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2516",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (105/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2516",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2516",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2522",
    "name": "Mr. Raveendra Reddy",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 265,
      "research": 115,
      "governance": 230,
      "total": 610
    },
    "verifiedScores": {
      "teaching": 265,
      "research": 115,
      "governance": 230,
      "total": 610
    },
    "weightedPercentage": 65.02,
    "contextAdjustedScore": 663,
    "contextAdjustedPercentage": 66.42,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2522",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2522",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2522",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2522",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2522",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2522",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2522",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2522",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.2,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 5,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 5 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.2/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 500,
        "weightedPercentage": 50.0,
        "grade": "B",
        "teachingScore": 252,
        "researchScore": 104,
        "governanceScore": 212
      },
      {
        "year": 2024,
        "rawScore": 521,
        "weightedPercentage": 51.64,
        "grade": "B",
        "teachingScore": 257,
        "researchScore": 108,
        "governanceScore": 221
      },
      {
        "year": 2025,
        "rawScore": 610,
        "weightedPercentage": 65.02,
        "grade": "B++",
        "teachingScore": 265,
        "researchScore": 115,
        "governanceScore": 230
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2522",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (115/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_2_2522",
        "dimension": "teaching",
        "priority": "medium",
        "title": "NPTEL / External e-Content Development",
        "observation": "Zero credits claimed for MOOCs/SWAYAM e-content creation outside VFSTR.",
        "recommendedAction": "Develop a 4-week modular course on SWAYAM/NPTEL or Coursera Partner platform.",
        "timeline": "Within AY 2025-26"
      },
      {
        "id": "dev_3_2522",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  },
  {
    "empId": "2691",
    "name": "Mr. Venkata Rajulu Pilli",
    "department": "Department of Computer Science & Engineering",
    "school": "School of Computing & Informatics",
    "qualification": "M.Tech / PG (Pursuing Ph.D)",
    "designation": "Assistant Professor",
    "level": "Level 10-",
    "dateOfJoin": "2020-07-01",
    "campus": "Guntur",
    "claimedScores": {
      "teaching": 280,
      "research": 128,
      "governance": 252,
      "total": 660
    },
    "verifiedScores": {
      "teaching": 280,
      "research": 128,
      "governance": 252,
      "total": 660
    },
    "weightedPercentage": 69.55,
    "contextAdjustedScore": 709,
    "contextAdjustedPercentage": 70.95,
    "grade": "B++",
    "contextAdjustedGrade": "B++",
    "items": [
      {
        "id": "item_copo_2691",
        "dimension": "teaching",
        "metricId": "copo_attainment",
        "metricName": "CO-PO, PSO Attainment for AY 2024-25 & First Sem 2025-26",
        "maxPoints": 50,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "CO_PO_Attainment_Report_VFSTR.pdf",
        "evidenceUrl": "https://erp.vignan.ac.in/nba/reports/copo_1913.pdf"
      },
      {
        "id": "item_cfile_2691",
        "dimension": "teaching",
        "metricId": "course_file",
        "metricName": "Maintaining Course File for all modules taught in the year",
        "maxPoints": 25,
        "claimedPoints": 25,
        "verifiedPoints": 25,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Course_File_Audit_Checklist.pdf",
        "evidenceUrl": "https://lms.vignan.ac.in/audit/cf_verified.pdf"
      },
      {
        "id": "item_feedback_2691",
        "dimension": "teaching",
        "metricId": "student_feedback_score",
        "metricName": "Student Feedback on Teaching-Learning Process",
        "maxPoints": 50,
        "claimedPoints": 35,
        "verifiedPoints": 35,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Student_Feedback_Aggregated_Score.pdf"
      },
      {
        "id": "item_scopus_2691",
        "dimension": "research",
        "metricId": "scopus_journals",
        "metricName": "Scopus / ESCI Indexed Journal Articles (2 articles)",
        "maxPoints": 100,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Scopus_Indexed_Publications_DOI.pdf",
        "evidenceUrl": "https://scopus.com/authid/detail.uri?authorId=57201913000"
      },
      {
        "id": "item_conf_2691",
        "dimension": "research",
        "metricId": "top_conferences",
        "metricName": "Top Notch Conferences (Level 1 with ISSN proceedings)",
        "maxPoints": 13,
        "claimedPoints": 0,
        "verifiedPoints": 0,
        "status": "verified",
        "source": "platform",
        "evidenceName": "IEEE_Conference_Proceedings_Certificate.pdf"
      },
      {
        "id": "item_boinfra_2691",
        "dimension": "governance",
        "metricId": "boinfra_tasks",
        "metricName": "Board of Infrastructure Tasks Completed (13 tasks verified)",
        "maxPoints": 75,
        "claimedPoints": 40,
        "verifiedPoints": 40,
        "status": "verified",
        "source": "platform",
        "evidenceName": "BoInfra_Audit_Completion_Report.pdf",
        "evidenceUrl": "https://admin.vignan.ac.in/boinfra/reports/1913_tasks.pdf"
      },
      {
        "id": "item_counseling_2691",
        "dimension": "governance",
        "metricId": "student_counseling",
        "metricName": "Student Counselor Weekly Logs & Attendance Monitoring",
        "maxPoints": 75,
        "claimedPoints": 75,
        "verifiedPoints": 75,
        "status": "verified",
        "source": "platform",
        "evidenceName": "Mentorship_Log_Register_AY24_25.pdf"
      },
      {
        "id": "item_hod_2691",
        "dimension": "governance",
        "metricId": "hod_eval",
        "metricName": "Head of Department (HOD) Assessment Marks",
        "maxPoints": 50,
        "claimedPoints": 50,
        "verifiedPoints": 50,
        "status": "verified",
        "source": "platform",
        "hodNotes": "Exemplary departmental commitment and diligence across infrastructure tasks."
      }
    ],
    "context": {
      "teachingHoursPerWeek": 18,
      "creditLoad": 22,
      "distinctPreparations": 3,
      "courseDifficultyIndex": 3.5,
      "sectionEntryPercentile": 65,
      "remedialStudentPercent": 15,
      "administrativeBurdenHours": 7,
      "administrativeRoles": [
        "Counselor"
      ],
      "contextualImpactNarrative": "Faculty carries 7 hrs/week of non-classroom administrative burden and teaches 18 contact hours in high-difficulty courses (difficulty index 3.5/5.0). Scholarly bandwidth is contextualized to ensure fair equity."
    },
    "trends": [
      {
        "year": 2023,
        "rawScore": 519,
        "weightedPercentage": 52.0,
        "grade": "B",
        "teachingScore": 266,
        "researchScore": 115,
        "governanceScore": 232
      },
      {
        "year": 2024,
        "rawScore": 585,
        "weightedPercentage": 53.69,
        "grade": "B",
        "teachingScore": 272,
        "researchScore": 120,
        "governanceScore": 242
      },
      {
        "year": 2025,
        "rawScore": 660,
        "weightedPercentage": 69.55,
        "grade": "B++",
        "teachingScore": 280,
        "researchScore": 128,
        "governanceScore": 252
      }
    ],
    "strengths": [
      "Positive year-on-year performance growth trajectory"
    ],
    "developmentAreas": [
      {
        "id": "dev_1_2691",
        "dimension": "research",
        "priority": "high",
        "title": "Extramural Grants & Patent Filings",
        "observation": "Current research score (128/333) has 0 extramural funding credits.",
        "recommendedAction": "Submit at least 1 DST/SERB/AICTE extramural proposal and file 1 institutional patent in CAY.",
        "timeline": "Next 6-9 months"
      },
      {
        "id": "dev_3_2691",
        "dimension": "research",
        "priority": "medium",
        "title": "Scopus Citation & h-Index Acceleration",
        "observation": "Citation count currently in lower tier (<99 citations, h-index 2-4).",
        "recommendedAction": "Target high-impact factor Q1 open-access journals and collaborate with international research groups.",
        "timeline": "Continuous (12 months)"
      }
    ],
    "verificationStatus": "hod_approved"
  }
];
