type MultiSelectFieldProps = {
  label: string;
  values: string[];
  options: string[];
  onChange: (values: string[]) => void;
};

export function MultiSelectField({
  label,
  values,
  options,
  onChange,
}: MultiSelectFieldProps) {
  function toggleOption(option: string) {
    if (values.includes(option)) {
      onChange(values.filter((value) => value !== option));
      return;
    }

    onChange([...values, option]);
  }

  return (
    <div className="field">
      <span className="fieldLabel">{label}</span>
      <div className="chipGrid">
        {options.map((option) => {
          const selected = values.includes(option);
          return (
            <button
              key={option}
              type="button"
              className={`chip ${selected ? "chipSelected" : ""}`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
