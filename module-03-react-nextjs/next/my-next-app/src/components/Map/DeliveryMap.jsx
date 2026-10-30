"use client";
// import dynamic from "next/dynamic";

// const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
//   ssr: false,
// });

export default function DeliveryMap() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Delivery Tracking
      </h1>
      <p className="mb-8 text-lg font-medium text-slate-400">
        Track your order and get notified when it arrives.
      </p>
      {/* <DeliveryMap {...props} /> */}
    </div>
  );
}