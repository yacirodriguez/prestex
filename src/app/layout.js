
import { Inter } from "next/font/google";
import "./globals.css"; 
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer"; 
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <body>
      <AuthProvider>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      </AuthProvider>
    </body>
      
  </html>      
      
      
      
  );
}
