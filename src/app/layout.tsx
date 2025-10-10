import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/resources/landing/navbar";
import { Footer } from "@/components/resources/landing/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Equilíbrio - Psicologia e Saúde Mental",
  description:
    "Clínica de psicologia especializada em psicoterapia individual, terapia de casal, psicologia infantil e terapia em grupo. Cuide da sua saúde mental com profissionais qualificados e atendimento humanizado.",
  keywords: [
    "psicologia",
    "psicoterapia",
    "saúde mental",
    "terapia individual",
    "terapia de casal",
    "psicologia infantil",
    "clínica de psicologia",
  ],
  authors: [{ name: "Clínica Equilíbrio" }],
  creator: "Clínica Equilíbrio",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Clínica Equilíbrio - Psicologia e Saúde Mental",
    description:
      "Clínica de psicologia com atendimento humanizado. Psicoterapia individual, terapia de casal e muito mais.",
    siteName: "Clínica Equilíbrio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
