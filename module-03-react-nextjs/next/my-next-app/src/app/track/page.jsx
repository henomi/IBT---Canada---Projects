"use client";

import dynamic from "next/dynamic";

// const DeliveryMap = dynamic(
//   () => import("@/components/Map/DeliveryMap"),
//   {
//     ssr: false,
//     loading: () => <p>Loading delivery map...</p>,
//   }
// );

const TrackMap = dynamic(
  () => import("@/components/Map/TrackMap"),
  {
    ssr: false,
    loading: () => <p>Loading delivery map...</p>,
  }
);

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-[#0b132b] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-[#39ff88]">
          Track Your Delivery
        </h1>
        {/* <DeliveryMap /> */}
      </div>
      <div>
        <TrackMap/>
      </div>
    </main>
  );
}