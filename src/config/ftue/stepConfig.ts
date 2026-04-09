export type FTUEStepId =
  | "welcome"
  | "profile"
  | "work"
  | "programming"
  | "ai"
  | "goal"
  | "motivation"
  | "completion";

export type FTUEStepConfig = {
  id: FTUEStepId;
  label: string;
  eyebrow: string;
};

export const ftueSteps: FTUEStepConfig[] = [
  { id: "welcome", label: "Founder Welcome", eyebrow: "Step 0" },
  { id: "profile", label: "Profile Details", eyebrow: "Step 1" },
  { id: "work", label: "Work & Education", eyebrow: "Step 2" },
  { id: "programming", label: "Programming Readiness", eyebrow: "Step 3" },
  { id: "ai", label: "AI Readiness", eyebrow: "Step 4" },
  { id: "goal", label: "Goal & Mission", eyebrow: "Step 5" },
  { id: "motivation", label: "Motivation", eyebrow: "Step 6" },
  { id: "completion", label: "Personalized Letter", eyebrow: "Complete" },
];
