import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Impactar Treinamentos - Transforme sua Carreira em 90 Dias",
  description: "Treinamentos de elite que já transformaram 14.847 carreiras. Aumento médio de 347% na renda. Elite Tech, Marketing Magnético e CEO Excellence Program. 99% de satisfação comprovada.",
  keywords: [
    "treinamentos online",
    "transformação de carreira", 
    "desenvolvimento profissional",
    "elite tech mastery",
    "marketing magnético",
    "ceo excellence program",
    "liderança executiva",
    "impactar treinamentos",
    "cursos tecnologia",
    "marketing digital",
    "gestão empresarial",
    "aumento de renda",
    "certificação internacional"
  ],
  authors: [{ name: "Impactar Treinamentos", url: "https://impactar-treinamentos.vercel.app" }],
  creator: "Impactar Treinamentos",
  publisher: "Impactar Treinamentos",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Impactar Treinamentos - Transforme sua Carreira em 90 Dias",
    description: "Treinamentos de elite com resultados comprovados. Junte-se a 14.847 profissionais que multiplicaram sua renda em até 347%.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Impactar Treinamentos",
    images: [
      {
        url: "/impactar.jpeg",
        width: 1200,
        height: 630,
        alt: "Impactar Treinamentos - Landing Page",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@impactartreinamentos",
    creator: "@impactartreinamentos",
    title: "Impactar Treinamentos - Transforme sua Carreira em 90 Dias",
    description: "Treinamentos de elite com resultados comprovados. Aumento médio de 347% na renda. 99% de satisfação.",
    images: [
      {
        url: "/impactar.jpeg",
        alt: "Impactar Treinamentos",
      }
    ],
  },
  verification: {
    // google: "código_de_verificação_google_search_console",
    // other: {
    //   facebook: "código_facebook_domain_verification",
    // },
  },
  icons: {
    icon: [
      { url: "/impactar.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/impactar.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [
      { url: "/impactar.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/impactar.jpeg",
        color: "#22c55e",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "education",
};

export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
