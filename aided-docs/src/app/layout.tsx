import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aided.framework"), // Reemplazar con tu dominio real
  title: {
    default: "AIDED Framework",
    template: "%s | AIDED Framework",
  },
  description: "AI-Driven Engineering Development Framework - Metodología de Desarrollo Asistido por IA",
  openGraph: {
    title: "AIDED Framework",
    description: "AI-Driven Engineering Development Framework. Guías, procesos y tutoriales para el desarrollo asistido por IA.",
    url: "https://aided.framework",
    siteName: "AIDED Framework",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIDED Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIDED Framework",
    description: "AI-Driven Engineering Development Framework",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-neutral-950">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
