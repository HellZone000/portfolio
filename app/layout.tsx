import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext"; // IMPORTA QUESTO

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Lorenzo Walter Campiello | Maker Portfolio",
  description: "Mechanical Engineering Student & Digital Craftsman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-zinc-950 text-white`}>
        {/* AVVOLGI I CHILDREN CON IL PROVIDER */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}