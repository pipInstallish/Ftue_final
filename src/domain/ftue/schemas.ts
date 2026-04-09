import { z } from "zod";

export const ftueResponseSchema = z.object({
  profileDetails: z.object({
    title: z.string().min(1),
    fullName: z.string().min(1),
    dateOfBirth: z.string().min(1),
    secondaryContactName: z.string().min(1),
    secondaryContactRelationship: z.string().min(1),
    secondaryContactPhone: z.string().min(1),
    areaPincode: z.string().min(1),
  }),
  workEducation: z.object({
    linkedInUrl: z.string(),
    academicSpecialization: z.string().min(1),
    currentJobRole: z.string().min(1),
    totalExperienceYears: z.string().min(1),
    totalExperienceMonths: z.string().min(1),
    techExperienceYears: z.string().min(1),
    techExperienceMonths: z.string().min(1),
    currentCtc: z.string().min(1),
  }),
  programmingReadiness: z.object({
    programmingLevel: z.string().min(1),
    dsaLevel: z.string().min(1),
    sqlLevel: z.string().min(1),
    taskConfidence: z.string().min(1),
  }),
  aiReadiness: z.object({
    familiarity: z.string().min(1),
    learnerTrack: z.string().min(1),
    techUsage: z.object({
      workUsageLevel: z.string(),
      toolsUsed: z.array(z.string()),
      primaryUseCases: z.array(z.string()),
      blockers: z.array(z.string()),
    }),
    nonTechUsage: z.object({
      toolsKnownOrTried: z.array(z.string()),
      usageAreas: z.array(z.string()),
      creationExperience: z.string(),
      blockers: z.array(z.string()),
    }),
  }),
  goalMission: z.object({
    selectedGoals: z.array(z.string()).min(1),
    successStatement: z.string(),
  }),
  motivation: z.object({
    selectedReasons: z.array(z.string()).min(1),
  }),
});
