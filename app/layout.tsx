import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./lib/fontawesome";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transerg - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions. We help businesses leverage artificial intelligence to drive innovation and growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
