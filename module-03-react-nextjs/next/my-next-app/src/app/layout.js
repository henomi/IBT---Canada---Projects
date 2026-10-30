
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
        url: "https://www.google.com/search?sca_esv=f2096b3927b3f13a&sxsrf=AKL5yDj4rQWG8b0YbFm17UNaiF0RelbNBw:1793348487036&udm=2&fbs=ACAhTvwdifjn2dKXmjtOfBxVFl_koHVe5RLSnJlTH2QYaq_YVdLmrLcUHX_SwxOCJnubtIIjQqxdKHlOpvi-FB4BIbv1jsqYf2MV6xjJKSekdlObJ4evA2bIusa3dW06Er_MfIjA6P1vx1gZQNwIVOLgi1285YB_Z3OGs5MKZxb5dB45JBlZjH-TcXH8afpPPi6x_NGWnIGnjhTfVbrwxyB2RdfDYkAusQ&q=mesob&sa=X&ved=2ahUKEwiCtpzcp-GXAxUoh_0HHWg7EUcQtKgLegQIFxAB&biw=638&bih=550&dpr=1.5#sv=CAMSURoyKhBlLTlzX29CZVUzdDZaTldNMg45c19vQmVVM3Q2Wk5XTToOSjVPVTV2b0Q5Y3k5dU0gBCoXCgFzEhBlLTlzX29CZVUzdDZaTldNGAEwARgHIPDw1pIESggQAhgBIAIoAQ",
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
