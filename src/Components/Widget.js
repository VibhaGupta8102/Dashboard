import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import MyChart from "./MyChart";
import MyDoughnutChart from "./MyDoughnutChart";

// Register Chart.js components
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Widget = ({ widget }) => {
  const renderChart = () => {
    if (!widget.labels || !widget.datasets) {
      return <div className="empty">Data missing for this chart</div>;
    }

    switch (widget.type) {
      case "DoughnutChart":
        return <MyDoughnutChart widget={widget} />;
      case "BarChart":
        return (
          <Bar data={{ labels: widget.labels, datasets: widget.datasets }} />
        );

      case "StackedBarChart":
        return <MyChart chartData={widget} />;
      default:
        return <div className="empty">No chart available</div>;
    }
  };

  return (
    <>
      <div className="card">
        <h4>{widget.heading}</h4>
        {renderChart()}
        {/* <button onClick={handleRemoveWidget}>Remove Widget</button> */}
      </div>
    </>
  );
};

export default Widget;
