import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavigationMenu";
import { Toaster } from "sonner";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'UBCMA',
  description: 'Welcome to MA!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <div className="fixed w-full top-0 z-50">
          <NavBar />
        </div>
        <div>
          {children}
          <Toaster richColors/>
        </div>
      </body>
    </html>
  );
}
