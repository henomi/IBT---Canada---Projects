"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { db } from "@/lib/db";
import "leaflet/dist/leaflet.css";

export default function TrackMap() {
    const orders = db.order.findMany();
    const BOLE = [8.9950, 38.789];

<MapContainer center={BOLE} zoom={12}>
    style={{ height: "400px" }}
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
    <Marker position={BOLE}>
        <Popup>
            {/* {orders.customer.name} */}abebe
        </Popup>
    </Marker>
</MapContainer>
}