import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Il Mio Portfolio",
  description: "Benvenuto nel mio portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
