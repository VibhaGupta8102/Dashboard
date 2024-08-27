import React, { useState } from "react";

const AddWidgetModal = ({ onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = () => {
    const newWidget = {
      id: `widget-${Date.now()}`,
      heading: widgetName,
      text: widgetText,
    };
    onAdd(newWidget);
  };

  return (
    <div className="Widget-form">
      <h3>Add Widget</h3>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddWidgetModal;
