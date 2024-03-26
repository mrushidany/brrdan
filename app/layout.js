import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ 
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-mulish' 
});

export const metadata = {
  title: "BRRDAN !!",
  description: "BRRDAN Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable}`}>{children}</body>
    </html>
  );
}
