import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bitframedesignstudio.com"),
  title: {
    default: "Bitframe Design Studio | Websites, Branding & UX/UI",
    template: "%s | Bitframe Design Studio",
  },
  description:
    "Bitframe Design Studio creates strategic websites, brand identities, and UX/UI experiences for ambitious businesses.",
  keywords: [
    "web design studio",
    "website design",
    "branding",
    "UX/UI design",
    "digital design studio",
    "Bitframe Design Studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bitframedesignstudio.com",
    siteName: "Bitframe Design Studio",
    title: "Bitframe Design Studio | Websites, Branding & UX/UI",
    description:
      "Strategic websites, brand identities, and UX/UI experiences for ambitious businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Bitframe Design Studio | Websites, Branding & UX/UI",
    description:
      "Strategic websites, brand identities, and UX/UI experiences for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
