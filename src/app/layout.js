import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ananya's portfolio",
  description: `Miss Ananya Saetae's portfolio website is created with a homepage (Home),
  an About page, a Skills page, an Education page, and a Contact page.
   The website is built using Next.js and Tailwind CSS,
    and it is designed to be fully responsive.`,
  keywords: `Ananya Saetae,Ananya portfolio, Ananya Saetae website,
        portfolio website, portfolio, JavaScript ,React, Next.js,Tailwind CSS,Apply for jobs,
        Resume building,Co-op work experience,Co-op internships,Co-op job search,Internship opportunities,
        co-op program`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
