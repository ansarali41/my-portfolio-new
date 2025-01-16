import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MD Ansar Ali - Software Engineer",
  description: "Portfolio of MD Ansar Ali - A passionate Software Engineer specializing in back-end development and building scalable applications.",
  keywords: ["Software Engineer", "Back-end Developer", "Full Stack Developer", "Node.js", "React", "TypeScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
