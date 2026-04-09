type FTUENavigationProps = {
  canGoBack: boolean;
  isLastInputStep: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
};

export function FTUENavigation({
  canGoBack,
  isLastInputStep,
  isSubmitting,
  onBack,
  onNext,
}: FTUENavigationProps) {
  return (
    <div className="navRow">
      <button type="button" className="secondaryButton" onClick={onBack} disabled={!canGoBack}>
        Back
      </button>
      <button type="button" className="primaryButton" onClick={onNext} disabled={isSubmitting}>
        {isLastInputStep ? (isSubmitting ? "Generating letter..." : "Submit") : "Continue"}
      </button>
    </div>
  );
}
