import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant-upright",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biryani Bar",
  description: "Biryani Bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.variable} ${openSans.variable} antialiased bg-[url("/assets/wave_element.svg")] bg-black bg-cover bg-center bg-no-repeat`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
