import { Inter } from "next/font/google";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Craig Johnson",
  description: "Created by Craig Johnson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<SpeedInsights/></body>
    </html>
  );
}
