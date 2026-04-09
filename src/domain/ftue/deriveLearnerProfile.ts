import type { GoalCategory, LearnerTrack, SkillBand, SkillLevel } from "@/domain/ftue/enums";
import type { DerivedLearnerProfile, FTUEResponse } from "@/domain/ftue/models";

const TECH_ROLE_KEYWORDS = [
  "engineer",
  "developer",
  "software",
  "frontend",
  "backend",
  "full stack",
  "data",
  "analyst",
  "qa",
  "sdet",
  "devops",
  "cloud",
  "ml",
  "ai",
  "tech",
];

const GOAL_MAP: Record<string, GoalCategory> = {
  "Switch jobs": "JOB_SWITCH",
  "Grow in current role": "ROLE_GROWTH",
  "Salary jump": "SALARY_JUMP",
  "Become interview-ready": "INTERVIEW_PREP",
  "Get strong in DSA": "FOUNDATIONS",
  "Become AI-ready engineer": "AI_READINESS",
  "Move into tech": "MOVE_TO_TECH",
  "Build stronger projects": "PROJECT_DEPTH",
  "Gain confidence": "CONFIDENCE",
  Other: "OTHER",
};

function toTrack(workRole: string, techExperienceYears: string): LearnerTrack {
  const normalizedRole = workRole.trim().toLowerCase();
  const isTechRole = TECH_ROLE_KEYWORDS.some((keyword) =>
    normalizedRole.includes(keyword),
  );

  if (isTechRole || Number(techExperienceYears) > 0) {
    return "TECH";
  }

  return "NON_TECH";
}

function scoreSkillLevel(level: SkillLevel | ""): number {
  const scoreMap: Record<SkillLevel, number> = {
    beginner: 1,
    basic: 2,
    comfortable: 3,
    strong: 4,
    advanced: 5,
  };

  if (!level) {
    return 0;
  }

  return scoreMap[level];
}

function toBand(score: number): SkillBand {
  if (score <= 2) {
    return "LOW";
  }

  if (score <= 3.5) {
    return "MEDIUM";
  }

  return "HIGH";
}

export function deriveLearnerProfile(response: FTUEResponse): DerivedLearnerProfile {
  const learnerTrack = toTrack(
    response.workEducation.currentJobRole,
    response.workEducation.techExperienceYears,
  );

  const totalYears = Number(response.workEducation.totalExperienceYears);
  const experienceBand =
    totalYears <= 0
      ? "STUDENT"
      : totalYears <= 2
        ? "EARLY_CAREER"
        : totalYears <= 6
          ? "MID_CAREER"
          : "EXPERIENCED";

  const programmingAverage =
    (scoreSkillLevel(response.programmingReadiness.programmingLevel) +
      scoreSkillLevel(response.programmingReadiness.dsaLevel) +
      scoreSkillLevel(response.programmingReadiness.sqlLevel)) /
    3;

  const aiMaturitySeed =
    response.aiReadiness.familiarity === "heavy"
      ? 5
      : response.aiReadiness.familiarity === "regular"
        ? 4
        : response.aiReadiness.familiarity === "occasional"
          ? 3
          : response.aiReadiness.familiarity === "casual"
            ? 2
            : 1;

  const primaryGoal = response.goalMission.selectedGoals[0] ?? "Other";

  return {
    learnerTrack,
    experienceBand,
    programmingBand: toBand(programmingAverage),
    aiMaturityBand: toBand(aiMaturitySeed),
    primaryGoalCategory: GOAL_MAP[primaryGoal] ?? "OTHER",
    recommendedDashboardTrack:
      learnerTrack === "TECH" && aiMaturitySeed <= 2
        ? "AI_WORKFLOW_STARTER"
        : learnerTrack === "TECH"
          ? "INTERVIEW_ACCELERATOR"
          : "FOUNDATIONS",
  };
}
