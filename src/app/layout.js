import { Inter } from "next/font/google";
import "./globals.css"; 
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer"; 
import { AuthProvider } from "./context/AuthContext";
import { SolicitudProvider } from "./context/solicitudContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <AuthProvider>
          <SolicitudProvider>

          <Header />
          <main className="flex-grow">
            {children}
          </main>
          </SolicitudProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
