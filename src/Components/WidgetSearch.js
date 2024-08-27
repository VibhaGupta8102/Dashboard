import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../index.css";

const WidgetSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch all categories from the Redux store
  const categories = useSelector((state) => state.dashboard.categories);

  // Filter widgets based on the search term
  const filteredWidgets = searchTerm
    ? categories.flatMap((category) =>
        category.widgets.filter((widget) =>
          widget.heading.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : []; // No widgets if searchTerm is empty

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="NavBar">
        <h2>Dashboard</h2>
        <div className="searchbox">
          <img
            src="https://img.icons8.com/?size=20&id=59878&format=png&color=000000"
            alt="icon"
          />
          <input
            type="text"
            placeholder="Search Widgets..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm ? (
            <div className="search-item">
              {filteredWidgets.length > 0 ? (
                filteredWidgets.map((widget) => (
                  <div key={widget.id} className="widget-item">
                    {widget.heading}
                  </div>
                ))
              ) : (
                <p>No widgets found</p>
              )}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default WidgetSearch;
