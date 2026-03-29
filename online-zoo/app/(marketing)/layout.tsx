import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components/layout";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/auth-context";

const montserrat = Montserrat({
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-decorative",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Zoo",
  description:
    "Explore the wonders of the animal kingdom from the comfort of your home with Online Zoo. Discover fascinating facts, watch live streams, and support wildlife conservation efforts worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} antialiased root`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
