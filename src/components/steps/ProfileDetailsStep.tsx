import { RELATIONSHIP_OPTIONS, TITLE_OPTIONS } from "@/config/ftue/fieldOptions";
import type { ProfileDetails } from "@/domain/ftue/models";
import { SelectField } from "@/components/fields/SelectField";
import { TextField } from "@/components/fields/TextField";

type ProfileDetailsStepProps = {
  value: ProfileDetails;
  onChange: (value: ProfileDetails) => void;
};

export function ProfileDetailsStep({ value, onChange }: ProfileDetailsStepProps) {
  function patch<K extends keyof ProfileDetails>(key: K, nextValue: ProfileDetails[K]) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>Your profile details</h2>
        <p>We keep this complete because these fields are part of core learner and audit records.</p>
      </div>
      <div className="twoColumnGrid">
        <SelectField label="Title" value={value.title} onChange={(nextValue) => patch("title", nextValue)} options={TITLE_OPTIONS} />
        <TextField label="Full name" value={value.fullName} onChange={(nextValue) => patch("fullName", nextValue)} placeholder="Enter learner name" />
        <TextField label="Date of birth" type="date" value={value.dateOfBirth} onChange={(nextValue) => patch("dateOfBirth", nextValue)} />
        <TextField
          label="Guardian / secondary contact name"
          value={value.secondaryContactName}
          onChange={(nextValue) => patch("secondaryContactName", nextValue)}
          placeholder="Enter secondary contact"
        />
        <SelectField
          label="Relationship"
          value={value.secondaryContactRelationship}
          onChange={(nextValue) => patch("secondaryContactRelationship", nextValue)}
          options={RELATIONSHIP_OPTIONS}
        />
        <TextField
          label="Secondary contact phone"
          type="tel"
          value={value.secondaryContactPhone}
          onChange={(nextValue) => patch("secondaryContactPhone", nextValue)}
          placeholder="Enter phone number"
        />
        <TextField
          label="Area pincode"
          value={value.areaPincode}
          onChange={(nextValue) => patch("areaPincode", nextValue)}
          placeholder="Enter area pincode"
        />
      </div>
    </section>
  );
}
