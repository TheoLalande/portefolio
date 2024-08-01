import Navbar from "./components/common/Navbar";
import "./globals.css";

export const metadata = {
  title: "THEO LALANDE",
  description: "Portefolio de Théo Lalande - Developpeur full-stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container">
        <div className="h-screen w-screen bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
