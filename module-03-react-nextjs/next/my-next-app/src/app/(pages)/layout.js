import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// import from '@/context/CartContext';

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
        <main className="min-h-screen bg-[#0b132b] text-white">
          {children}
        </main>
      <Footer />
    </>
  );
}