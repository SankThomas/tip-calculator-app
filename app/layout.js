import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], weights: ["400", "600"] });

export const metadata = {
  title: "Tip Calculator App | Frontend Mentor Challenge",
  description: "Tip Calculator App | Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${font.className}`}>{children}</body>
    </html>
  );
}
