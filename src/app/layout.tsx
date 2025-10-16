import type { Metadata } from "next";

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
  return children;
}
