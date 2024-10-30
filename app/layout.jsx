import "./globals.css";
import { Footer, Nav } from "@/components";

export const metadata = {
  title: "Tachi Galletas",
  description: "En Tachi Galletas y Tortas Personalizadas mejoramos tus eventos con postres y bocaditos hechos para la ocasión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="font-teachers">
        <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
