import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Next 14教程",
  description: "Next 14教程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-zinc-50 h-screen">
        <div className="flex h-full">
          <Navbar />
          <main className="flex-1 ml-80 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
