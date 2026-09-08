import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: "Bitframe Design Studio",
  description: "Premium digital design studio for ambitious startups.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
