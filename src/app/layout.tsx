import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import { Calistoga } from "next/font/google";
// import { Cagliostro } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter= Inter({
  subsets: ['latin'],
  variable:"--font-sans",
  weight: ['300', '400', '500', '700', '900'],
})

const calistoga= Calistoga({
  subsets: ['latin'],
  variable:"--font-serif",
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Ajala John Portfolio",
  description: "Minimalist & Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge( inter.variable, calistoga.variable, "bg-black text-white antialiased font-sans"

      )}>{children}</body>
    </html>
  );
}
