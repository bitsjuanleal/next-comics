import React from "react";

export const initialState = {
  activeTab: "marvel",
  detailUrl: "",
};

export const reducer = (state, action) => {
    console.log(action)
  switch (action.tab) {
    case "marvel":
      return { activeTab: "marvel", detailUrl: action.detailUrl };
    case "dc":
      return { activeTab: "dc", detailUrl: action.detailUrl };
    case "detail":
      return { activeTab: "detail", detailUrl: action.detailUrl };
    default:
      return state;
  }
};

export const Context = React.createContext();
