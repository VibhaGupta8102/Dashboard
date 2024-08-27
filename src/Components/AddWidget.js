import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../store/dashboardSlice";

const AddWidget = ({ onConfirm, onCancel }) => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ""
  );
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  useEffect(() => {
    const category = categories.find((cat) => cat.name === selectedCategory);
    if (category) {
      const initialWidgets = category.widgets.map((widget) => widget.heading);
      setSelectedWidgets(initialWidgets);
    }
  }, [categories, selectedCategory]);

  const handleWidgetSelection = (widgetHeading) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetHeading)
        ? prev.filter((w) => w !== widgetHeading)
        : [...prev, widgetHeading]
    );
  };

  const handleConfirm = () => {
    // Find widgets that are deselected
    const deselectedWidgets = categories
      .find((cat) => cat.name === selectedCategory)
      ?.widgets.filter((widget) => !selectedWidgets.includes(widget.heading));

    // Dispatch actions to remove deselected widgets
    deselectedWidgets.forEach((widget) =>
      dispatch(
        removeWidget({ categoryName: selectedCategory, widgetId: widget.id })
      )
    );

    // Log categories with widgets after removal
    console.log("Categories with widgets after removal:");
    console.log(categories);

    // Call onConfirm to finalize selection
    const selectedCategoryWidgets = categories
      .find((cat) => cat.name === selectedCategory)
      ?.widgets.filter((widget) => selectedWidgets.includes(widget.heading));

    const widgetsToAdd = selectedCategoryWidgets.map((widget) => ({
      ...widget,
      categoryName: selectedCategory,
    }));

    onConfirm(widgetsToAdd);
  };

  return (
    <div className="add-widget-container">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <WidgetCategory
        widgets={
          categories.find((cat) => cat.name === selectedCategory)?.widgets || []
        }
        selectedWidgets={selectedWidgets}
        handleWidgetSelection={handleWidgetSelection}
      />
      <div className="action-buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

const WidgetCategory = ({
  widgets,
  selectedWidgets,
  handleWidgetSelection,
}) => {
  return (
    <div className="widget-list">
      {widgets.map((widget) => (
        <WidgetItem
          key={widget.id}
          widget={widget}
          selected={selectedWidgets.includes(widget.heading)}
          onSelect={() => handleWidgetSelection(widget.heading)}
        />
      ))}
    </div>
  );
};

const WidgetItem = ({ widget, selected, onSelect }) => {
  return (
    <div
      className={`widget-item ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <input type="checkbox" checked={selected} readOnly />
      {widget.heading}
    </div>
  );
};

export default AddWidget;
