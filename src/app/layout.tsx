import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const Poppinss = Poppins({ 
  subsets: ["latin"],
  weight:['400','600','700']
 });
 

export const metadata: Metadata = {
  title: "Abay sankar s",
  description: "FRontend developer with next js , react and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppinss.className }`}>{children}</body>
    </html>
  );
}
