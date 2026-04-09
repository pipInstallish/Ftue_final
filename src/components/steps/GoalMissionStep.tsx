import { GOAL_OPTIONS } from "@/config/ftue/fieldOptions";
import type { GoalMission } from "@/domain/ftue/models";
import { MultiSelectField } from "@/components/fields/MultiSelectField";
import { TextAreaField } from "@/components/fields/TextAreaField";

type GoalMissionStepProps = {
  value: GoalMission;
  onChange: (value: GoalMission) => void;
};

export function GoalMissionStep({ value, onChange }: GoalMissionStepProps) {
  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>Your goal entering the program</h2>
        <p>
          This is one of the strongest personalization signals in the journey. It tells us what
          success should feel like from the learner&apos;s point of view.
        </p>
      </div>
      <MultiSelectField
        label="What is your goal entering this program?"
        values={value.selectedGoals}
        onChange={(selectedGoals) => onChange({ ...value, selectedGoals })}
        options={GOAL_OPTIONS}
      />
      <TextAreaField
        label="In one line, what would make this program successful for you?"
        value={value.successStatement}
        onChange={(successStatement) => onChange({ ...value, successStatement })}
        placeholder="Example: I want to become interview-ready enough to switch into a stronger engineering role within 6 months."
      />
    </section>
  );
}
