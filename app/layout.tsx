import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
})

export const metadata: Metadata = {
  title: "Pour Barta",
  description: "Site spécialement fait pour Barta BOUCHERROUGUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.className} antialiased bg-linear-to-br from-rose-200 to-rose-400 w-full h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
