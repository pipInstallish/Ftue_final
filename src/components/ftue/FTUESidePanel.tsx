type FTUESidePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FTUESidePanel({ eyebrow, title, description }: FTUESidePanelProps) {
  return (
    <aside className="ftueSidePanel">
      <div className="sideBadge">{eyebrow}</div>
      <div className="sideOrb" />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="sideQuote">
        This onboarding is designed to understand who the learner is today, what they want next,
        and how AI changes the way we prepare them.
      </div>
    </aside>
  );
}
