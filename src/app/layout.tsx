import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import SortedFooter from "@/components/common/SortedFooter";
import { GlobalProvider } from "@/context/GlobalContext";
import { Providers } from "@/context/Provider";
import { getConfig } from "@/utils/wagmi";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airdrop | UCC Chain",
  description: "Airdrop website for UCC coin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const cookieheader = headerList.get("cookie");
  const initialState = cookieToInitialState(getConfig(), cookieheader);
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060606]`}
      >
        <Providers initialState={initialState}>
          <GlobalProvider>
            <Header />
            <div>
              {children}
              <Toaster />
            </div>
            <SortedFooter />
          </GlobalProvider>
        </Providers>
      </body>
    </html>
  );
}
