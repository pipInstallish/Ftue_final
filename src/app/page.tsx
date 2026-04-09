import Link from "next/link";

export default function HomePage() {
  return (
    <main className="homePage">
      <div className="homeCard">
        <div className="heroPill">FTUE Prototype</div>
        <h1>New learner onboarding, built from scratch.</h1>
        <p>
          This starter app contains the new step structure, branching AI readiness logic, and a
          personalized completion letter.
        </p>
        <Link className="primaryButton linkButton" href="/ftue">
          Open FTUE journey
        </Link>
      </div>
    </main>
  );
}
