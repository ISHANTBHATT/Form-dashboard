import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <AuthProvider>
    //   <html lang="en">
    //     <body className={inter.className}>
    //       <Navbar />
    //       {children}
    //     </body>
    //   </html>
    // </AuthProvider>
    <AuthProvider>
      <div className={inter.className}>
        <Navbar />
        {children}
      </div>
    </AuthProvider>
  );
}
