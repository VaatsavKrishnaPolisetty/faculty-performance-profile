import { FacultyRecord } from '../types';

export function computeDepartmentAnalytics(facultyList: FacultyRecord[]) {
  const totalFaculty = facultyList.length;
  if (totalFaculty === 0) return null;

  const totalRawScores = facultyList.reduce((acc, f) => acc + f.verifiedScores.total, 0);
  const avgRawScore = Math.round(totalRawScores / totalFaculty);

  const totalWeightedPct = facultyList.reduce((acc, f) => acc + f.weightedPercentage, 0);
  const avgWeightedPct = parseFloat((totalWeightedPct / totalFaculty).toFixed(1));

  const totalAdjustedPct = facultyList.reduce((acc, f) => acc + f.contextAdjustedPercentage, 0);
  const avgAdjustedPct = parseFloat((totalAdjustedPct / totalFaculty).toFixed(1));

  // Grade distribution
  const gradeCounts: Record<string, number> = { 'A+': 0, 'A': 0, 'B++': 0, 'B+': 0, 'B': 0, 'C': 0 };
  const adjustedGradeCounts: Record<string, number> = { 'A+': 0, 'A': 0, 'B++': 0, 'B+': 0, 'B': 0, 'C': 0 };

  facultyList.forEach((f) => {
    gradeCounts[f.grade] = (gradeCounts[f.grade] || 0) + 1;
    adjustedGradeCounts[f.contextAdjustedGrade] = (adjustedGradeCounts[f.contextAdjustedGrade] || 0) + 1;
  });

  // Dimension averages
  const avgTeaching = Math.round(facultyList.reduce((acc, f) => acc + f.verifiedScores.teaching, 0) / totalFaculty);
  const avgResearch = Math.round(facultyList.reduce((acc, f) => acc + f.verifiedScores.research, 0) / totalFaculty);
  const avgGovernance = Math.round(facultyList.reduce((acc, f) => acc + f.verifiedScores.governance, 0) / totalFaculty);

  // Administrative burden distribution
  const highAdminFaculty = facultyList.filter((f) => f.context.administrativeBurdenHours >= 12);
  const elevatedByContext = facultyList.filter((f) => f.contextAdjustedGrade !== f.grade);

  return {
    totalFaculty,
    avgRawScore,
    avgWeightedPct,
    avgAdjustedPct,
    gradeCounts,
    adjustedGradeCounts,
    dimensionAverages: {
      teaching: avgTeaching,
      research: avgResearch,
      governance: avgGovernance,
    },
    highAdminCount: highAdminFaculty.length,
    elevatedByContextCount: elevatedByContext.length,
  };
}
