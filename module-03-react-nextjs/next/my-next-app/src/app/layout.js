
import "./globals.css";
import { CartProvider } from "@/Context/cartContext";

export const metadata = {
  openGraph: {
    type: "website",
    url: "https://ibt-canada-projects-als7.vercel.app/",
    title: "Addis Eatery",
    description: "A taste of Ethiopia, tradition on every plate.",
    images: [
      {
        url: "https://ibt-canada-projects-als7.vercel.app/gored-gored.jpg",
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
