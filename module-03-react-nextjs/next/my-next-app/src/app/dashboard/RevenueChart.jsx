"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueChart({ revenue }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={revenue}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <XAxis dataKey="area" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#39ff88" />
      </BarChart>
    </ResponsiveContainer>
  );
}