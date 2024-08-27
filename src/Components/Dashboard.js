import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import AddWidget from "./AddWidget";

const Dashboard = () => {
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const categories = useSelector((state) => state.dashboard.categories);

  const handleConfirm = (widgets) => {
    setSelectedWidgets(widgets);
    setShowAddWidget(false); // Close the AddWidget page
  };

  const handleCancel = () => {
    setShowAddWidget(false); // Close the AddWidget page without changes
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2>CNAPP Dashboard</h2>
        <div className="btn">
          <button onClick={() => setShowAddWidget(true)}>Add widget </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#9b9b9b"
            fill="none"
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="category">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            selectedWidgets={selectedWidgets}
          />
        ))}
      </div>
      {showAddWidget && (
        <AddWidget onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Dashboard;
