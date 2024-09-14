import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kpop Profile",
  description: "Kpop Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.rubik.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
