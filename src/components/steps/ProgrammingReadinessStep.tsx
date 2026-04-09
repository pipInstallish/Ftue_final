import {
  SKILL_LEVEL_OPTIONS,
  TASK_CONFIDENCE_OPTIONS,
} from "@/config/ftue/fieldOptions";
import type { ProgrammingReadiness } from "@/domain/ftue/models";
import { SelectField } from "@/components/fields/SelectField";

type ProgrammingReadinessStepProps = {
  value: ProgrammingReadiness;
  onChange: (value: ProgrammingReadiness) => void;
};

export function ProgrammingReadinessStep({
  value,
  onChange,
}: ProgrammingReadinessStepProps) {
  function patch<K extends keyof ProgrammingReadiness>(
    key: K,
    nextValue: ProgrammingReadiness[K],
  ) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>Your programming readiness</h2>
        <p>
          We are keeping this lightweight so the learner experience stays fast while still giving
          us an honest skill signal.
        </p>
      </div>
      <div className="twoColumnGrid">
        <SelectField
          label="Programming proficiency"
          value={value.programmingLevel}
          onChange={(nextValue) => patch("programmingLevel", nextValue)}
          options={SKILL_LEVEL_OPTIONS}
        />
        <SelectField
          label="DSA proficiency"
          value={value.dsaLevel}
          onChange={(nextValue) => patch("dsaLevel", nextValue)}
          options={SKILL_LEVEL_OPTIONS}
        />
        <SelectField
          label="SQL / Databases proficiency"
          value={value.sqlLevel}
          onChange={(nextValue) => patch("sqlLevel", nextValue)}
          options={SKILL_LEVEL_OPTIONS}
        />
        <SelectField
          label="When solving technical tasks today"
          value={value.taskConfidence}
          onChange={(nextValue) => patch("taskConfidence", nextValue)}
          options={TASK_CONFIDENCE_OPTIONS}
        />
      </div>
    </section>
  );
}
