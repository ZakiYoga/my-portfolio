import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/scrollProgress/scrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/homepage/Footer";

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "explore my portfolio to discover my best work, showcasing my skills and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}
