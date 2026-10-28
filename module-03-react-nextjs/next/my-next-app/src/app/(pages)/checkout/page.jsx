import CheckoutForm from "@/components/Checkout/CheckoutForm";


// export const dynamic = "force-dynamic";
export default function Checkout() {
  

  return (
    <div className="min-h-screen bg-[#0b132b] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
      <CheckoutForm />
    </div>
  );
}