import type { DerivedLearnerProfile, FTUEResponse, PersonalizedLetter } from "@/domain/ftue/models";

function summarizeGoals(response: FTUEResponse): string {
  const goals = response.goalMission.selectedGoals;

  if (goals.length === 0) {
    return "build momentum with clarity and consistency";
  }

  if (goals.length === 1) {
    return goals[0].toLowerCase();
  }

  return `${goals[0].toLowerCase()} and ${goals[1].toLowerCase()}`;
}

function buildAIExpectation(response: FTUEResponse, derived: DerivedLearnerProfile): string {
  if (derived.learnerTrack === "TECH") {
    return `AI has changed what strong engineering looks like. It is no longer enough to just write code manually. You will need to learn how to prompt well, review AI output critically, debug confidently, and ship with judgment.`;
  }

  if (response.aiReadiness.nonTechUsage.creationExperience === "vibe_projects") {
    return `AI has already started moving you from experimentation into creation. The next step is turning scattered tool usage into repeatable workflows that solve real problems in your work and career.`;
  }

  return `AI is becoming a core professional advantage, even outside deeply technical roles. The opportunity now is to move from curiosity to capability by learning where AI helps, how to guide it, and how to judge its output well.`;
}

function buildFocusAreas(derived: DerivedLearnerProfile): string[] {
  if (derived.learnerTrack === "TECH" && derived.aiMaturityBand === "LOW") {
    return [
      "Use AI to explain concepts and compare different approaches instead of using it only for answers.",
      "Practice reviewing and debugging AI-generated code so you build judgment alongside speed.",
      "Create a weekly routine around DSA, core problem solving, and one applied project track.",
    ];
  }

  if (derived.learnerTrack === "TECH") {
    return [
      "Use AI to accelerate execution, but keep architecture, trade-offs, and debugging decisions in your hands.",
      "Deepen one high-value technical strength while keeping your interview and project story sharp.",
      "Treat consistency like a non-negotiable part of the program, not something you add when convenient.",
    ];
  }

  return [
    "Pick one or two AI tools and use them consistently enough to build real fluency.",
    "Turn recurring work problems into small repeatable AI workflows instead of one-off experiments.",
    "Build confidence through visible outputs so your learning compounds into momentum.",
  ];
}

export function generatePersonalizedLetter(
  response: FTUEResponse,
  derived: DerivedLearnerProfile,
): PersonalizedLetter {
  const name = response.profileDetails.fullName || "there";
  const role = response.workEducation.currentJobRole || "your current role";
  const specialization =
    response.workEducation.academicSpecialization || "your background";
  const goalSummary = summarizeGoals(response);
  const successStatement = response.goalMission.successStatement.trim();

  const paragraphs = [
    `You are entering this journey as someone with a background in ${specialization.toLowerCase()} and a current context rooted in ${role.toLowerCase()}. More importantly, you are here to ${goalSummary}, and that intent matters because it gives direction to everything that follows.`,
    `The next few months are likely to feel stretching in the best way. There will be periods of intensity, moments where your confidence rises quickly, and moments where your old ways of learning stop feeling sufficient. That is not a sign that you are behind. It is usually a sign that real growth has begun.`,
    buildAIExpectation(response, derived),
    successStatement
      ? `If this journey is successful for you, it should move you closer to this outcome: "${successStatement}". That means showing up with consistency, practicing when it is inconvenient, and staying honest about where you need to improve.`
      : `What will matter most from here is consistency, ownership, and a willingness to keep showing up even when progress feels uneven. The learners who compound fastest are usually the ones who keep moving even through friction.`,
  ];

  return {
    title: "A letter for your journey ahead",
    greeting: `Hi ${name},`,
    paragraphs,
    focusAreas: buildFocusAreas(derived),
    closing:
      "You do not need to become perfect overnight. You do need to stay committed, coachable, and deliberate. If you do that, this program can become a real turning point in your journey.",
  };
}
