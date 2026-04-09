import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FTUE Journey",
  description: "Mandatory onboarding flow with personalization and AI readiness capture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
