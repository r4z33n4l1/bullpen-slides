import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bullpen Runtime Slides",
  description: "A Next.js slide deck on Bullpen, OpenClaw, and Convex as an orchestration runtime stack.",
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
