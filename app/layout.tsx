import type { Metadata } from "next";
import "./globals.css";
import { asap } from "./components/font";


export const metadata: Metadata = {
  title: "The Chord You Looking For",
  description: "THE CHORD PROGRESSION YOU'RE LOOKING FOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${asap.className} text-[#FDFBE4]`}
      >
        {children}
      </body>
    </html>
  );
}
