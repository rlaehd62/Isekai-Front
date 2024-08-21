import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeadNav from "./components/HeadNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이세계 문고",
  description: "모든 소설이 생성형 AI에 의해서 제공되는 최초의 서비스!",
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
          <HeadNav />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
