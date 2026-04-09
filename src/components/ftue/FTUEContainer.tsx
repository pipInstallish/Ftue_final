"use client";

import { useMemo, useState, useTransition } from "react";
import { ftueSteps, type FTUEStepId } from "@/config/ftue/stepConfig";
import { deriveLearnerProfile } from "@/domain/ftue/deriveLearnerProfile";
import {
  emptyFTUEResponse,
  type FTUEResponse,
  type PersonalizedLetter,
} from "@/domain/ftue/models";
import { FTUENavigation } from "@/components/ftue/FTUENavigation";
import { FTUEProgressBar } from "@/components/ftue/FTUEProgressBar";
import { FTUESidePanel } from "@/components/ftue/FTUESidePanel";
import { AIReadinessStep } from "@/components/steps/AIReadinessStep";
import { CompletionLetterStep } from "@/components/steps/CompletionLetterStep";
import { GoalMissionStep } from "@/components/steps/GoalMissionStep";
import { MotivationStep } from "@/components/steps/MotivationStep";
import { ProfileDetailsStep } from "@/components/steps/ProfileDetailsStep";
import { ProgrammingReadinessStep } from "@/components/steps/ProgrammingReadinessStep";
import { WelcomeStep } from "@/components/steps/WelcomeStep";
import { WorkEducationStep } from "@/components/steps/WorkEducationStep";

const INPUT_STEP_IDS: FTUEStepId[] = [
  "welcome",
  "profile",
  "work",
  "programming",
  "ai",
  "goal",
  "motivation",
];

const PANEL_COPY: Record<FTUEStepId, { title: string; description: string }> = {
  welcome: {
    title: "A premium intake, not just a form",
    description:
      "We are building this FTUE to collect mandatory data, understand readiness, and personalize the experience from the first session.",
  },
  profile: {
    title: "Profile details",
    description:
      "This stage preserves all the important audit and compliance fields while keeping the experience cleaner.",
  },
  work: {
    title: "Work and education",
    description:
      "We use role, experience, and academic context to power personalization and route-specific guidance.",
  },
  programming: {
    title: "Programming readiness",
    description:
      "This captures self-reported confidence without turning the FTUE into a heavy skill assessment.",
  },
  ai: {
    title: "AI readiness",
    description:
      "This is where the new journey becomes meaningfully future-facing through tech and non-tech branching.",
  },
  goal: {
    title: "Goal and mission",
    description:
      "The completion experience should sound like it understands why the learner actually joined.",
  },
  motivation: {
    title: "Motivation",
    description:
      "Emotional purchase signals help the final letter feel more human and grounded in the learner's decision.",
  },
  completion: {
    title: "Personalized letter",
    description:
      "The generic success message gives way to a more premium completion moment that sets expectations clearly.",
  },
};

function getInitialTrack(response: FTUEResponse) {
  if (response.aiReadiness.learnerTrack) {
    return response.aiReadiness.learnerTrack;
  }

  return deriveLearnerProfile(response).learnerTrack;
}

export function FTUEContainer() {
  const [stepIndex, setStepIndex] = useState(0);
  const [response, setResponse] = useState<FTUEResponse>(emptyFTUEResponse);
  const [letter, setLetter] = useState<PersonalizedLetter | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const activeStep = ftueSteps[stepIndex];
  const panelCopy = PANEL_COPY[activeStep.id];
  const currentInputStepNumber = Math.min(stepIndex, INPUT_STEP_IDS.length);

  const responseWithDerivedTrack = useMemo(() => {
    if (response.aiReadiness.learnerTrack) {
      return response;
    }

    const derivedTrack = getInitialTrack(response);
    return {
      ...response,
      aiReadiness: {
        ...response.aiReadiness,
        learnerTrack: derivedTrack,
      },
    };
  }, [response]);

  function goBack() {
    setSubmitError(null);
    setStepIndex((current) => Math.max(0, current - 1));
  }

  function validateCurrentStep(): string | null {
    switch (activeStep.id) {
      case "welcome":
        return null;
      case "profile":
        if (
          !response.profileDetails.title ||
          !response.profileDetails.fullName ||
          !response.profileDetails.dateOfBirth ||
          !response.profileDetails.secondaryContactName ||
          !response.profileDetails.secondaryContactRelationship ||
          !response.profileDetails.secondaryContactPhone ||
          !response.profileDetails.areaPincode
        ) {
          return "Please complete all profile details before continuing.";
        }
        return null;
      case "work":
        if (
          !response.workEducation.academicSpecialization ||
          !response.workEducation.currentJobRole ||
          !response.workEducation.totalExperienceYears ||
          !response.workEducation.totalExperienceMonths ||
          !response.workEducation.techExperienceYears ||
          !response.workEducation.techExperienceMonths ||
          !response.workEducation.currentCtc
        ) {
          return "Please complete all required work and education fields.";
        }
        return null;
      case "programming":
        if (
          !response.programmingReadiness.programmingLevel ||
          !response.programmingReadiness.dsaLevel ||
          !response.programmingReadiness.sqlLevel ||
          !response.programmingReadiness.taskConfidence
        ) {
          return "Please capture all programming readiness inputs before continuing.";
        }
        return null;
      case "ai": {
        if (
          !responseWithDerivedTrack.aiReadiness.familiarity ||
          !responseWithDerivedTrack.aiReadiness.learnerTrack
        ) {
          return "Please complete the AI familiarity inputs first.";
        }

        if (responseWithDerivedTrack.aiReadiness.learnerTrack === "TECH") {
          const { workUsageLevel, toolsUsed, primaryUseCases, blockers } =
            responseWithDerivedTrack.aiReadiness.techUsage;

          if (
            !workUsageLevel ||
            toolsUsed.length === 0 ||
            primaryUseCases.length === 0 ||
            blockers.length === 0
          ) {
            return "Please answer all tech AI readiness questions before continuing.";
          }
        } else {
          const { toolsKnownOrTried, usageAreas, creationExperience, blockers } =
            responseWithDerivedTrack.aiReadiness.nonTechUsage;

          if (
            toolsKnownOrTried.length === 0 ||
            usageAreas.length === 0 ||
            !creationExperience ||
            blockers.length === 0
          ) {
            return "Please answer all non-tech AI readiness questions before continuing.";
          }
        }
        return null;
      }
      case "goal":
        if (response.goalMission.selectedGoals.length === 0) {
          return "Please select at least one learner goal before continuing.";
        }
        return null;
      case "motivation":
        if (response.motivation.selectedReasons.length === 0) {
          return "Please select at least one motivation before submitting.";
        }
        return null;
      case "completion":
        return null;
      default:
        return null;
    }
  }

  function goNext() {
    const validationError = validateCurrentStep();
    setSubmitError(validationError);

    if (validationError) {
      return;
    }

    if (activeStep.id === "motivation") {
      startTransition(async () => {
        try {
          const payload = responseWithDerivedTrack;
          const result = await fetch("/api/ftue/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!result.ok) {
            throw new Error("Unable to generate personalized letter.");
          }

          const data = (await result.json()) as { letter: PersonalizedLetter };
          setLetter(data.letter);
          setResponse(payload);
          setStepIndex(ftueSteps.findIndex((step) => step.id === "completion"));
        } catch (error) {
          setSubmitError(
            error instanceof Error
              ? error.message
              : "Something went wrong while submitting the FTUE.",
          );
        }
      });
      return;
    }

    setStepIndex((current) => Math.min(ftueSteps.length - 1, current + 1));
  }

  function renderStep() {
    switch (activeStep.id) {
      case "welcome":
        return <WelcomeStep />;
      case "profile":
        return (
          <ProfileDetailsStep
            value={response.profileDetails}
            onChange={(profileDetails) => setResponse({ ...response, profileDetails })}
          />
        );
      case "work":
        return (
          <WorkEducationStep
            value={response.workEducation}
            onChange={(workEducation) => {
              const nextResponse = { ...response, workEducation };
              const derivedTrack = getInitialTrack(nextResponse);
              setResponse({
                ...nextResponse,
                aiReadiness: {
                  ...nextResponse.aiReadiness,
                  learnerTrack: derivedTrack,
                },
              });
            }}
          />
        );
      case "programming":
        return (
          <ProgrammingReadinessStep
            value={response.programmingReadiness}
            onChange={(programmingReadiness) =>
              setResponse({ ...response, programmingReadiness })
            }
          />
        );
      case "ai":
        return (
          <AIReadinessStep
            value={responseWithDerivedTrack.aiReadiness}
            onChange={(aiReadiness) => setResponse({ ...response, aiReadiness })}
          />
        );
      case "goal":
        return (
          <GoalMissionStep
            value={response.goalMission}
            onChange={(goalMission) => setResponse({ ...response, goalMission })}
          />
        );
      case "motivation":
        return (
          <MotivationStep
            value={response.motivation}
            onChange={(motivation) => setResponse({ ...response, motivation })}
          />
        );
      case "completion":
        return <CompletionLetterStep letter={letter} />;
      default:
        return null;
    }
  }

  return (
    <main className="ftuePageShell">
      <div className="ftueBackgroundGlow ftueBackgroundGlowLeft" />
      <div className="ftueBackgroundGlow ftueBackgroundGlowRight" />
      <div className="ftueLayout">
        <FTUESidePanel
          eyebrow={activeStep.eyebrow}
          title={panelCopy.title}
          description={panelCopy.description}
        />
        <section className="ftueMainPanel">
          <div className="topMetaRow">
            <div>
              <div className="topMetaLabel">{activeStep.eyebrow}</div>
              <div className="topMetaTitle">{activeStep.label}</div>
            </div>
            {activeStep.id !== "completion" ? (
              <div className="stepCounter">
                {Math.max(currentInputStepNumber, 1)} / {INPUT_STEP_IDS.length}
              </div>
            ) : (
              <div className="stepCounter">Complete</div>
            )}
          </div>
          <FTUEProgressBar
            current={activeStep.id === "completion" ? INPUT_STEP_IDS.length : currentInputStepNumber}
            total={INPUT_STEP_IDS.length}
          />
          <div className="stepContent">{renderStep()}</div>
          {submitError ? <p className="errorText">{submitError}</p> : null}
          {activeStep.id !== "completion" ? (
            <FTUENavigation
              canGoBack={stepIndex > 0}
              isLastInputStep={activeStep.id === "motivation"}
              isSubmitting={isPending}
              onBack={goBack}
              onNext={goNext}
            />
          ) : null}
        </section>
      </div>
    </main>
  );
}
