
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {CartProvider} from "@/Context/cartContext";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
        <body className="">
          <CartProvider>
            <Header />
              <main className="">
                {children}
              </main>
            <Footer />
          </CartProvider>
      </body>
    </html>
  );
}
