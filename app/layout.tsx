import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sans = Lora({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paula & Jesús",
  description: "Wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        sans.variable,
        heading.variable
      )}
    >
      <body className="min-h-full bg-stone-100 font-sans text-stone-800">
        {children}
      </body>
    </html>
  );
}