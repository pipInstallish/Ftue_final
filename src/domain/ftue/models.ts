import type {
  AICreationExperience,
  AIFamiliarity,
  AIWorkUsageLevel,
  ExperienceBand,
  GoalCategory,
  LearnerTrack,
  SkillBand,
  SkillLevel,
  TechnicalTaskConfidence,
} from "@/domain/ftue/enums";

export type ProfileDetails = {
  title: string;
  fullName: string;
  dateOfBirth: string;
  secondaryContactName: string;
  secondaryContactRelationship: string;
  secondaryContactPhone: string;
  areaPincode: string;
};

export type WorkEducation = {
  linkedInUrl: string;
  academicSpecialization: string;
  currentJobRole: string;
  totalExperienceYears: string;
  totalExperienceMonths: string;
  techExperienceYears: string;
  techExperienceMonths: string;
  currentCtc: string;
};

export type ProgrammingReadiness = {
  programmingLevel: SkillLevel | "";
  dsaLevel: SkillLevel | "";
  sqlLevel: SkillLevel | "";
  taskConfidence: TechnicalTaskConfidence | "";
};

export type TechAIUsage = {
  workUsageLevel: AIWorkUsageLevel | "";
  toolsUsed: string[];
  primaryUseCases: string[];
  blockers: string[];
};

export type NonTechAIUsage = {
  toolsKnownOrTried: string[];
  usageAreas: string[];
  creationExperience: AICreationExperience | "";
  blockers: string[];
};

export type AIReadiness = {
  familiarity: AIFamiliarity | "";
  learnerTrack: LearnerTrack | "";
  techUsage: TechAIUsage;
  nonTechUsage: NonTechAIUsage;
};

export type GoalMission = {
  selectedGoals: string[];
  successStatement: string;
};

export type Motivation = {
  selectedReasons: string[];
};

export type FTUEResponse = {
  profileDetails: ProfileDetails;
  workEducation: WorkEducation;
  programmingReadiness: ProgrammingReadiness;
  aiReadiness: AIReadiness;
  goalMission: GoalMission;
  motivation: Motivation;
};

export type DerivedLearnerProfile = {
  learnerTrack: LearnerTrack;
  experienceBand: ExperienceBand;
  programmingBand: SkillBand;
  aiMaturityBand: SkillBand;
  primaryGoalCategory: GoalCategory;
  recommendedDashboardTrack: string;
};

export type PersonalizedLetter = {
  title: string;
  greeting: string;
  paragraphs: string[];
  focusAreas: string[];
  closing: string;
};

export const emptyFTUEResponse: FTUEResponse = {
  profileDetails: {
    title: "",
    fullName: "",
    dateOfBirth: "",
    secondaryContactName: "",
    secondaryContactRelationship: "",
    secondaryContactPhone: "",
    areaPincode: "",
  },
  workEducation: {
    linkedInUrl: "",
    academicSpecialization: "",
    currentJobRole: "",
    totalExperienceYears: "",
    totalExperienceMonths: "",
    techExperienceYears: "",
    techExperienceMonths: "",
    currentCtc: "",
  },
  programmingReadiness: {
    programmingLevel: "",
    dsaLevel: "",
    sqlLevel: "",
    taskConfidence: "",
  },
  aiReadiness: {
    familiarity: "",
    learnerTrack: "",
    techUsage: {
      workUsageLevel: "",
      toolsUsed: [],
      primaryUseCases: [],
      blockers: [],
    },
    nonTechUsage: {
      toolsKnownOrTried: [],
      usageAreas: [],
      creationExperience: "",
      blockers: [],
    },
  },
  goalMission: {
    selectedGoals: [],
    successStatement: "",
  },
  motivation: {
    selectedReasons: [],
  },
};
