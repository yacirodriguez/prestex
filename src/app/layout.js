import { Inter } from "next/font/google";
import "./globals.css"; 
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
