import { ContextualParameters } from '../types';
import { getScoringBand } from './scoreCalculator';

export interface ContextualAdjustmentResult {
  baselinePercentage: number;
  adjustedPercentage: number;
  adjustedScore: number;
  gradeDelta: number; // positive if grade boosted
  baselineGrade: string;
  adjustedGrade: string;
  factors: {
    teachingLoadBonus: number;
    courseDifficultyBonus: number;
    sectionEntryAbilityBonus: number;
    administrativeBurdenBonus: number;
    totalCompensation: number;
  };
  explanation: string[];
}

export function evaluateContextualEquity(
  rawTotalScore: number,
  weightedPercentage: number,
  context: ContextualParameters
): ContextualAdjustmentResult {
  // 1. Teaching Load factor (contact hours above 14 hrs baseline)
  const excessHours = Math.max(0, context.teachingHoursPerWeek - 14);
  const prepFactor = Math.max(0, context.distinctPreparations - 1) * 0.8;
  const teachingLoadBonus = (excessHours * 0.5) + prepFactor;

  // 2. Course Difficulty factor (courses rated > 3.0 out of 5.0)
  const excessDifficulty = Math.max(0, context.courseDifficultyIndex - 3.0);
  const courseDifficultyBonus = excessDifficulty * 2.2;

  // 3. Section Entry Ability factor (accounts for lower baseline ability/remedial density)
  const remedialFactor = (context.remedialStudentPercent / 100) * 4.5;
  const entryDeficit = Math.max(0, (65 - context.sectionEntryPercentile) * 0.1);
  const sectionEntryAbilityBonus = remedialFactor + entryDeficit;

  // 4. Administrative Burden factor (heavy non-classroom duties > 6 hrs/week)
  const excessAdmin = Math.max(0, context.administrativeBurdenHours - 6);
  const roleFactor = Math.min(4.0, context.administrativeRoles.length * 1.0);
  const administrativeBurdenBonus = (excessAdmin * 0.45) + roleFactor;

  // Sum total compensation
  const rawTotalCompensation = teachingLoadBonus + courseDifficultyBonus + sectionEntryAbilityBonus + administrativeBurdenBonus;
  // Damped to avoid inflation
  const totalCompensation = Math.min(18.0, parseFloat(rawTotalCompensation.toFixed(2)));

  const adjustedPercentage = Math.min(99.0, parseFloat((weightedPercentage + totalCompensation).toFixed(2)));
  const adjustedScore = Math.min(999, Math.round((adjustedPercentage / 100.0) * 999));

  const baseBand = getScoringBand(weightedPercentage);
  const adjBand = getScoringBand(adjustedPercentage);

  const explanation: string[] = [];
  if (administrativeBurdenBonus > 2.0) {
    explanation.push(`Carries significant administrative load (${context.administrativeBurdenHours} hrs/wk in ${context.administrativeRoles.join(', ')}), reducing available research bandwidth.`);
  }
  if (teachingLoadBonus > 2.0) {
    explanation.push(`High instructional contact load (${context.teachingHoursPerWeek} contact hrs/wk across ${context.distinctPreparations} distinct preparations).`);
  }
  if (courseDifficultyBonus > 2.0) {
    explanation.push(`Assigned high-rigor curriculum (difficulty index ${context.courseDifficultyIndex}/5.0) with challenging analytical learning outcomes.`);
  }
  if (sectionEntryAbilityBonus > 2.0) {
    explanation.push(`Instructed cohort with ${context.remedialStudentPercent}% remedial intake, requiring extensive supplemental learning intervention.`);
  }

  return {
    baselinePercentage: weightedPercentage,
    adjustedPercentage,
    adjustedScore,
    gradeDelta: adjBand.minScore > baseBand.minScore ? 1 : 0,
    baselineGrade: baseBand.grade,
    adjustedGrade: adjBand.grade,
    factors: {
      teachingLoadBonus: parseFloat(teachingLoadBonus.toFixed(2)),
      courseDifficultyBonus: parseFloat(courseDifficultyBonus.toFixed(2)),
      sectionEntryAbilityBonus: parseFloat(sectionEntryAbilityBonus.toFixed(2)),
      administrativeBurdenBonus: parseFloat(administrativeBurdenBonus.toFixed(2)),
      totalCompensation,
    },
    explanation,
  };
}
