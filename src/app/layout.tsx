import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import LoaderProvider from "@/components/loading/LoaderProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DHACK'26 | University of Sri Jayewardenepura",
  description:
    "DHACK'26 - Sri Lanka's Premier Student Innovation Competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#050816] text-white overflow-x-hidden`}
      >
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}