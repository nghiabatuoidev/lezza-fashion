import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/user/header";
import Footer from "@/components/user/footer";
import dataLayout from "@/data/layout.json"; // Import file JSON

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Thêm các trọng lượng bạn muốn sử dụng
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeaZa - Thời Trang Mùa Đông",
  description: "Thời trang cho mùa thu đông",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${quicksand.className} antialiased`}>
        <Header data={dataLayout.header} />
        {children}
        <Footer data={dataLayout.footer} />
      </body>
    </html>
  );
}
