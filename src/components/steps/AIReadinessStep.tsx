import {
  AI_FAMILIARITY_OPTIONS,
  NON_TECH_AI_BLOCKER_OPTIONS,
  NON_TECH_AI_CREATION_OPTIONS,
  NON_TECH_AI_TOOL_OPTIONS,
  NON_TECH_AI_USAGE_OPTIONS,
  TECH_AI_BLOCKER_OPTIONS,
  TECH_AI_TOOL_OPTIONS,
  TECH_AI_USE_CASE_OPTIONS,
  TECH_AI_WORK_USAGE_OPTIONS,
} from "@/config/ftue/fieldOptions";
import type { AIReadiness } from "@/domain/ftue/models";
import { MultiSelectField } from "@/components/fields/MultiSelectField";
import { SelectField } from "@/components/fields/SelectField";

type AIReadinessStepProps = {
  value: AIReadiness;
  onChange: (value: AIReadiness) => void;
};

export function AIReadinessStep({ value, onChange }: AIReadinessStepProps) {
  function patch(nextValue: Partial<AIReadiness>) {
    onChange({ ...value, ...nextValue });
  }

  function patchTech<K extends keyof AIReadiness["techUsage"]>(
    key: K,
    nextValue: AIReadiness["techUsage"][K],
  ) {
    onChange({
      ...value,
      techUsage: { ...value.techUsage, [key]: nextValue },
    });
  }

  function patchNonTech<K extends keyof AIReadiness["nonTechUsage"]>(
    key: K,
    nextValue: AIReadiness["nonTechUsage"][K],
  ) {
    onChange({
      ...value,
      nonTechUsage: { ...value.nonTechUsage, [key]: nextValue },
    });
  }

  const isTech = value.learnerTrack === "TECH";

  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>Your AI readiness</h2>
        <p>
          This step is intentionally role-aware. It asks different questions for technical and
          non-technical learners so the signals stay relevant.
        </p>
      </div>
      <div className="twoColumnGrid">
        <SelectField
          label="How familiar are you with AI tools today?"
          value={value.familiarity}
          onChange={(nextValue) => patch({ familiarity: nextValue as AIReadiness["familiarity"] })}
          options={AI_FAMILIARITY_OPTIONS}
        />
        <SelectField
          label="Learner track"
          value={value.learnerTrack}
          onChange={(nextValue) => patch({ learnerTrack: nextValue as AIReadiness["learnerTrack"] })}
          options={[
            { value: "TECH", label: "Tech learner" },
            { value: "NON_TECH", label: "Non-tech learner" },
          ]}
        />
      </div>

      {isTech ? (
        <div className="stackSpace">
          <div className="twoColumnGrid">
            <SelectField
              label="How much of your coding or work currently involves AI?"
              value={value.techUsage.workUsageLevel}
              onChange={(nextValue) => patchTech("workUsageLevel", nextValue as AIReadiness["techUsage"]["workUsageLevel"])}
              options={TECH_AI_WORK_USAGE_OPTIONS}
            />
          </div>
          <MultiSelectField
            label="Which AI tools have you used?"
            values={value.techUsage.toolsUsed}
            onChange={(nextValue) => patchTech("toolsUsed", nextValue)}
            options={TECH_AI_TOOL_OPTIONS}
          />
          <MultiSelectField
            label="What do you use AI for most often?"
            values={value.techUsage.primaryUseCases}
            onChange={(nextValue) => patchTech("primaryUseCases", nextValue)}
            options={TECH_AI_USE_CASE_OPTIONS}
          />
          <MultiSelectField
            label="What is the biggest issue you face with AI today?"
            values={value.techUsage.blockers}
            onChange={(nextValue) => patchTech("blockers", nextValue)}
            options={TECH_AI_BLOCKER_OPTIONS}
          />
        </div>
      ) : (
        <div className="stackSpace">
          <MultiSelectField
            label="Which AI tools are you aware of or have tried?"
            values={value.nonTechUsage.toolsKnownOrTried}
            onChange={(nextValue) => patchNonTech("toolsKnownOrTried", nextValue)}
            options={NON_TECH_AI_TOOL_OPTIONS}
          />
          <MultiSelectField
            label="What have you used AI for so far?"
            values={value.nonTechUsage.usageAreas}
            onChange={(nextValue) => patchNonTech("usageAreas", nextValue)}
            options={NON_TECH_AI_USAGE_OPTIONS}
          />
          <div className="twoColumnGrid">
            <SelectField
              label="Have you created anything with AI yet?"
              value={value.nonTechUsage.creationExperience}
              onChange={(nextValue) => patchNonTech("creationExperience", nextValue as AIReadiness["nonTechUsage"]["creationExperience"])}
              options={NON_TECH_AI_CREATION_OPTIONS}
            />
          </div>
          <MultiSelectField
            label="What is the biggest blocker for you today?"
            values={value.nonTechUsage.blockers}
            onChange={(nextValue) => patchNonTech("blockers", nextValue)}
            options={NON_TECH_AI_BLOCKER_OPTIONS}
          />
        </div>
      )}
    </section>
  );
}
