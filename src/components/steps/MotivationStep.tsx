import { MOTIVATION_OPTIONS } from "@/config/ftue/fieldOptions";
import type { Motivation } from "@/domain/ftue/models";
import { MultiSelectField } from "@/components/fields/MultiSelectField";

type MotivationStepProps = {
  value: Motivation;
  onChange: (value: Motivation) => void;
};

export function MotivationStep({ value, onChange }: MotivationStepProps) {
  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>What got you excited about Scaler?</h2>
        <p>
          This tells us what the learner emotionally bought into, which helps the completion letter
          feel more personal.
        </p>
      </div>
      <MultiSelectField
        label="Select all that apply"
        values={value.selectedReasons}
        onChange={(selectedReasons) => onChange({ selectedReasons })}
        options={MOTIVATION_OPTIONS}
      />
    </section>
  );
}
