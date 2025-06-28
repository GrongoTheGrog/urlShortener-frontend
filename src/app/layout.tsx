import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/context/ToastProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Url Shortener",
  description: "Url Shortener App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${poppins.variable} antialiased`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
