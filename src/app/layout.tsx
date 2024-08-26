import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeadNav from "./components/HeadNav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isekai Books",
  description: "First AI Web-Novel Service, I've never seen in this world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div className="flex">
            <HeadNav />
          </div>
          
          <div className="flex flex-1 min-h-screen">
            {children}
          </div>

          <div className="flex relative h-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
