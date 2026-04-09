import {
  CTC_OPTIONS,
  EXPERIENCE_MONTH_OPTIONS,
  EXPERIENCE_YEAR_OPTIONS,
  ROLE_OPTIONS,
  SPECIALIZATION_OPTIONS,
} from "@/config/ftue/fieldOptions";
import type { WorkEducation } from "@/domain/ftue/models";
import { SelectField } from "@/components/fields/SelectField";
import { TextField } from "@/components/fields/TextField";

type WorkEducationStepProps = {
  value: WorkEducation;
  onChange: (value: WorkEducation) => void;
};

export function WorkEducationStep({ value, onChange }: WorkEducationStepProps) {
  function patch<K extends keyof WorkEducation>(key: K, nextValue: WorkEducation[K]) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>Your work and education background</h2>
        <p>This information shapes both dashboard setup and personalized guidance.</p>
      </div>
      <div className="twoColumnGrid">
        <TextField
          label="LinkedIn profile"
          type="url"
          value={value.linkedInUrl}
          onChange={(nextValue) => patch("linkedInUrl", nextValue)}
          placeholder="https://linkedin.com/in/..."
        />
        <SelectField
          label="Academic specialization"
          value={value.academicSpecialization}
          onChange={(nextValue) => patch("academicSpecialization", nextValue)}
          options={SPECIALIZATION_OPTIONS}
        />
        <SelectField
          label="Current job role"
          value={value.currentJobRole}
          onChange={(nextValue) => patch("currentJobRole", nextValue)}
          options={ROLE_OPTIONS}
        />
        <SelectField
          label="Current CTC"
          value={value.currentCtc}
          onChange={(nextValue) => patch("currentCtc", nextValue)}
          options={CTC_OPTIONS}
        />
        <SelectField
          label="Total experience years"
          value={value.totalExperienceYears}
          onChange={(nextValue) => patch("totalExperienceYears", nextValue)}
          options={EXPERIENCE_YEAR_OPTIONS}
        />
        <SelectField
          label="Total experience months"
          value={value.totalExperienceMonths}
          onChange={(nextValue) => patch("totalExperienceMonths", nextValue)}
          options={EXPERIENCE_MONTH_OPTIONS}
        />
        <SelectField
          label="Tech experience years"
          value={value.techExperienceYears}
          onChange={(nextValue) => patch("techExperienceYears", nextValue)}
          options={EXPERIENCE_YEAR_OPTIONS}
        />
        <SelectField
          label="Tech experience months"
          value={value.techExperienceMonths}
          onChange={(nextValue) => patch("techExperienceMonths", nextValue)}
          options={EXPERIENCE_MONTH_OPTIONS}
        />
      </div>
    </section>
  );
}
