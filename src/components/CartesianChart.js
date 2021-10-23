import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";

const data = [
  {
    name: "2014",
    average: 37.2,
    female: 38.8,
    male: 35.5,
  },
  {
    name: "2015",
    average: 37.5,
    female: 39.1,
    male: 35.8,
  },
  {
    name: "2016",
    average: 37.8,
    female: 39.4,
    male: 36.0,
  },
  {
    name: "2017",
    average: 38,
    female: 39.6,
    male: 36.3,
  },
  {
    name: "2018",
    average: 38.3,
    female: 39.9,
    male: 36.6,
  },
  {
    name: "2019",
    average: 38.7,
    female: 40.3,
    male: 36.9,
  },
];

const CartesianChart = () => {
  return (
    <ComposedChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ value: "Year", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Avg Age", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="male" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="female" barSize={35} fill="#413ea0" />
      <Line type="monotone" dataKey="average" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default CartesianChart;
