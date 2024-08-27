import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/dashboardSlice";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category, selectedWidgets }) => {
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddWidget = (newWidget) => {
    dispatch(addWidget({ categoryName: category.name, widget: newWidget }));
    setShowAddWidgetModal(false);
  };

  // Display all widgets for the category
  const widgetsToDisplay = category.widgets;

  return (
    <div>
      <h2>{category.name}</h2>
      <div className="widgets">
        {widgetsToDisplay.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="34"
            height="34"
            color="#000000"
            fill="none"
            style={{
              display: "block",
              margin: "7.5em 16em",
              cursor: "pointer",
            }}
            onClick={() => setShowAddWidgetModal(true)}
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {showAddWidgetModal && (
        <AddWidgetModal
          onClose={() => setShowAddWidgetModal(false)}
          onAdd={handleAddWidget}
        />
      )}
    </div>
  );
};

export default Category;
