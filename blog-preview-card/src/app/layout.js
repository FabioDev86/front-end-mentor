import { Figtree } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Blog Preview Card",
  description: "A Front End Mentor challenge solution using Next.js and Tailwind CSS",
};

// Configuriamo il font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "800"], // Il design usa pesi Medium (500) e ExtraBold (800)
  variable: "--font-figtree", // Definiamo il nome della variabile
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
