type SelectOption = {
  value: string;
  label?: string;
};

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<string | SelectOption>;
  placeholder?: string;
};

export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}: SelectFieldProps) {
  return (
    <label className="field">
      <span className="fieldLabel">{label}</span>
      <select className="fieldInput" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => {
          const normalized =
            typeof option === "string" ? { value: option, label: option } : option;

          return (
            <option key={normalized.value} value={normalized.value}>
              {normalized.label ?? normalized.value}
            </option>
          );
        })}
      </select>
    </label>
  );
}
