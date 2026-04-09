import type { PersonalizedLetter } from "@/domain/ftue/models";
import { PersonalizedLetterCard } from "@/components/personalization/PersonalizedLetterCard";

type CompletionLetterStepProps = {
  letter: PersonalizedLetter | null;
};

export function CompletionLetterStep({ letter }: CompletionLetterStepProps) {
  if (!letter) {
    return (
      <section className="stepSection">
        <div className="stepIntro">
          <h2>Preparing the personalized letter</h2>
          <p>We are shaping the final completion experience now.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="stepSection">
      <div className="stepIntro">
        <h2>You are all set, but not in a generic way.</h2>
        <p>
          This completion moment is designed to feel like the start of the learner&apos;s journey, not
          the end of a form.
        </p>
      </div>
      <PersonalizedLetterCard letter={letter} />
    </section>
  );
}
