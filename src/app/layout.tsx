import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/globals/Navbar";
import { Sidebar } from "@/components/globals/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TraversyPress",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[350px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
