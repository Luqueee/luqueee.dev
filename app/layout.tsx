import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/app/components/theme-provider";

import "./globals.css";
import NavBar from "./components/NavBar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Luqueee Portfolio",
  description: "Mi portfolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} antialiased relative text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
