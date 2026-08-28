import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} — Houston Event & Entertainment Center`,
  description:
    "BH Ranch is an 11-acre Southwest Houston event venue with a covered pavilion, gazebo, full kitchen, and stage — hosting weddings, quinceañeras, reunions, and celebrations for 50–500 guests.",
  keywords:
    "event venue Houston, wedding venue Houston, quinceanera venue Houston, BH Ranch, party venue Southwest Houston, family reunion venue",
  openGraph: {
    title: `${COMPANY.name} — Houston Event & Entertainment Center`,
    description:
      "11-acre event venue in Southwest Houston for weddings, quinceañeras, reunions, and celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
