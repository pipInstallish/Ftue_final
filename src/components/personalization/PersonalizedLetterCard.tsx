import type { PersonalizedLetter } from "@/domain/ftue/models";

type PersonalizedLetterCardProps = {
  letter: PersonalizedLetter;
};

export function PersonalizedLetterCard({ letter }: PersonalizedLetterCardProps) {
  return (
    <section className="letterCard">
      <div className="letterMeta">Personalized for this learner</div>
      <h2 className="letterTitle">{letter.title}</h2>
      <p className="letterGreeting">{letter.greeting}</p>
      <div className="letterBody">
        {letter.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="focusAreaBlock">
        <h3>Your first focus areas</h3>
        <ul>
          {letter.focusAreas.map((focusArea) => (
            <li key={focusArea}>{focusArea}</li>
          ))}
        </ul>
      </div>
      <p className="letterClosing">{letter.closing}</p>
    </section>
  );
}
