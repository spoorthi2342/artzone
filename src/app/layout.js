
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";



export const metadata = {
  title: "ArtZone App",
  description: "ArtZone is a vibrant online platform that serves as a hub for art enthusiasts, collectors, and creators alike. Boasting an eclectic array of artworks spanning various genres, mediums, and styles, ArtZone offers a dynamic marketplace where art is both showcased and celebrated.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className=" bg-purple-100"  >
      <Navbar/>
        {children}</body>
    </html>
  );
}
