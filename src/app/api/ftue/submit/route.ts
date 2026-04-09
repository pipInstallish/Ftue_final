import { NextResponse } from "next/server";
import { deriveLearnerProfile } from "@/domain/ftue/deriveLearnerProfile";
import { generatePersonalizedLetter } from "@/domain/personalization/letterTemplateEngine";
import { ftueResponseSchema } from "@/domain/ftue/schemas";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = ftueResponseSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid FTUE payload.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const derivedProfile = deriveLearnerProfile(parsed.data);
  const letter = generatePersonalizedLetter(parsed.data, derivedProfile);

  return NextResponse.json({
    derivedProfile,
    letter,
  });
}
