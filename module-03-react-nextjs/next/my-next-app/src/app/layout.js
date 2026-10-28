
import "./globals.css";
import { CartProvider } from "@/Context/cartContext";

export const metadata = {
  logo:"🍴",
  title: "Addis Eatery",
  description: "A taste of Ethiopia, tradition on every plate.",
  openGraph: {
    type: "website",
    url: "https://adis-eatery.vercel.app/",
    title: "Addis Eatery",
    description: "A taste of Ethiopia, tradition on every plate.",
    images: [
      {
        url: "https://adis-eatery.vercel.app/images/adis-eatery-banner.png",
        width: 1200,
        height: 630,
        alt: "Adis Eatery",
      },
    ],
    siteName: "Adis Eatery",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
        <body>
            <CartProvider>
              <main>{children}</main>
            </CartProvider>
        </body>
    </html>
  );
}
