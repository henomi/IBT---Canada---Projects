
import DeliveryMap from "../../components/Map/DeliveryMap";
import TrackMap from "../../components/Map/TrackMap";

export default function TrackPage() {
  return (
    <main>
      <h1>
        Delivery Tracking
      </h1>

      <section>
        <h2>
          Delivery Map
        </h2>
        <DeliveryMap />
      </section>

      <section>
        <h2>
          Track Your Order
        </h2>
        <TrackMap />
      </section>
    </main>
  );
}
