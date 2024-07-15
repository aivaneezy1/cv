import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
