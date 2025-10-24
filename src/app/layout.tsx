import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Central de Ajuda - Bionk",
  description: "A Central de Ajuda da Bionk reúne orientações detalhadas sobre o uso da plataforma. Aqui, você encontra guias, tutoriais e soluções para dúvidas comuns sobre criação de links, personalização do perfil, configurações de conta e recursos avançados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${Satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
