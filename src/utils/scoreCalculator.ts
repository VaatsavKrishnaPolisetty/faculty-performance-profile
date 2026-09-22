import { INSTITUTIONAL_RUBRIC } from '../data/rubricData';
import { FacultyLevel, ClaimedItem } from '../types';

export function calculateDimensionScores(items: ClaimedItem[]) {
  let teaching = 0;
  let research = 0;
  let governance = 0;

  for (const item of items) {
    const points = item.status === 'rejected' ? 0 : item.verifiedPoints;
    if (item.dimension === 'teaching') teaching += points;
    else if (item.dimension === 'research') research += points;
    else if (item.dimension === 'governance') governance += points;
  }

  // Cap each dimension at 333
  teaching = Math.min(333, Math.round(teaching));
  research = Math.min(333, Math.round(research));
  governance = Math.min(333, Math.round(governance));

  // Cap aggregate at 999
  const total = Math.min(999, teaching + research + governance);

  return { teaching, research, governance, total };
}

export function computeWeightedPercentage(
  scores: { teaching: number; research: number; governance: number; total: number },
  level: FacultyLevel
) {
  const weights = INSTITUTIONAL_RUBRIC.levelWeights[level] || INSTITUTIONAL_RUBRIC.levelWeights['Level 10-'];
  
  const teachingPct = (scores.teaching / 333.0) * 100.0;
  const researchPct = (scores.research / 333.0) * 100.0;
  const governancePct = (scores.governance / 333.0) * 100.0;

  const weighted = (weights.teaching * teachingPct) + (weights.research * researchPct) + (weights.governance * governancePct);
  return Math.min(100, Math.max(0, parseFloat(weighted.toFixed(2))));
}

export function getScoringBand(percentage: number) {
  for (const band of INSTITUTIONAL_RUBRIC.scoringBands) {
    if (percentage >= band.minScore && percentage <= band.maxScore) {
      return band;
    }
  }
  return INSTITUTIONAL_RUBRIC.scoringBands[INSTITUTIONAL_RUBRIC.scoringBands.length - 1];
}
