import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          heading: "Cloud Accounts",
          type: "DoughnutChart",
          labels: ["Connected", "Not Connected"],
          datasets: [
            {
              data: [2, 1],
              backgroundColor: ["#36A2EB", "#a5cfe8"],
            },
          ],
        },
        {
          id: 2,
          heading: "Cloud Accounts Risk Assessment",
          type: "DoughnutChart",
          labels: ["Failed", "Warning", "Not Available", "Passed"],
          datasets: [
            {
              data: [2, 50, 100, 400],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "green"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Executive Dashboard",
      widgets: [
        {
          id: 1,
          heading: "Top 5 NameSpace Specific Alerts",
          // type: "BarChart",
          // labels: ["Connected", "Not Connected"],
          // datasets: [
          //   {
          //     data: [2, 1],
          //     backgroundColor: ["#36A2EB", "#a5cfe8"],
          //   },
          // ],
        },
        {
          id: 2,
          heading: "Workload Alerts",
          // type: "BarChart",
          // labels: ["Failed", "Warning", "Not Available", "Passed"],
          // datasets: [
          //   {
          //     data: [2, 50, 100, 400],
          //     backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "green"],
          //   },
          // ],
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        {
          id: 1,
          heading: "Image Risk Assessment",
          type: "StackedBarChart",
          labels: ["Critical", "High", "Moderate", "Null"],
          datasets: [
            {
              data: [1660, 1660, 1660, 1660],
              backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB", "#4BC0C0"],
            },
          ],
        },
        {
          id: 2,
          heading: "Image Security Issues",
          type: "StackedBarChart",
          labels: ["Critical", "High", "Moderate", "Null"],
          datasets: [
            {
              data: [1, 6, 3, 7],
              backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB", "#4BC0C0"],
            },
          ],
        },
      ],
    },
    // Add more categories as required...
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    // addCategory: (state, action) => {
    //   state.categories.push({ name: action.payload, widgets: [] });
    // },
    // removeCategory: (state, action) => {
    //   state.categories = state.categories.filter(
    //     (cat) => cat.name !== action.payload
    //   );
    // },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;

export default dashboardSlice.reducer;
