import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Белый Кот | Ветеринарная клиника",
  description:
    "Забота о здоровье ваших питомцев — от первого осмотра до сложного лечения.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-white text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}
