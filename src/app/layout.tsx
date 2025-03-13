import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Axolotl-Logic",
  description:
    "We build and maintain software that users are in control of. Dedicated to serving the users that are our life blood, we will remain open source and make ourselves easy to replace should we turn evil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-slate-950 text-neutral-100 bg-[url(/images/background.png)] flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
