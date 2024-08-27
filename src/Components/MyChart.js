import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StackedHorizontalBarChart = ({ chartData }) => {
  // Transform the data according to the received props
  const transformedData = [
    chartData.labels.reduce(
      (acc, label, index) => {
        acc[label] = chartData.datasets[0].data[index];
        return acc;
      },
      { name: chartData.heading }
    ),
  ];

  const colors = chartData.datasets[0].backgroundColor;

  const renderCustomLegend = (props) => {
    const { payload } = props;

    return (
      <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0" }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ marginBottom: 5 }}>
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                backgroundColor: colors[index],
                marginRight: 10,
              }}
            />
            {`${entry.value} (${transformedData[0][entry.value]})`}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        layout="vertical"
        data={transformedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />
        <Legend content={renderCustomLegend} />
        {chartData.labels.map((label, index) => (
          <Bar
            key={label}
            dataKey={label}
            stackId="a"
            fill={colors[index]}
            radius={[20, 10, 20, 20]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedHorizontalBarChart;
