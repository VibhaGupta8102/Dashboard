import React from "react";
import { Doughnut } from "react-chartjs-2";

const MyDoughnutChart = ({ widget }) => {
  const chartData = {
    labels: widget.labels,
    datasets: [
      {
        data: widget.datasets[0].data,
        backgroundColor: widget.datasets[0].backgroundColor,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Ensures the chart is not distorted
    responsive: false, // Disable responsiveness to apply custom sizes
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <div
        style={{
          width: "250px",
          height: "190px",
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {chartData.labels.map((label, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                  marginRight: "10px",
                }}
              ></span>
              {label}: {widget.datasets[0].data[index]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyDoughnutChart;
