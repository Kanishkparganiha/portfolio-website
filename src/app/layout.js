import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Kanishka Parganiha | Data Engineer",
  description:
    "Data Engineer at Amazon specializing in large-scale data pipelines, ML infrastructure, and automation systems. Processing 338M+ ASINs annually with $4.09M in savings.",
  keywords: [
    "Data Engineer",
    "Amazon",
    "AWS",
    "PySpark",
    "Machine Learning",
    "Data Pipeline",
    "Kanishka Parganiha",
  ],
  authors: [{ name: "Kanishka Parganiha" }],
  openGraph: {
    title: "Kanishka Parganiha | Data Engineer",
    description:
      "Data Engineer at Amazon building intelligent data pipelines at scale. 338M+ ASINs, $4.09M savings, 92.51% ML accuracy.",
    type: "website",
    locale: "en_US",
    siteName: "Kanishka Parganiha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishka Parganiha | Data Engineer",
    description:
      "Data Engineer at Amazon building intelligent data pipelines at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
