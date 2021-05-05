import React from "react";

export default function hobbyReducer(state, action) {
  switch (action.type) {
    case "ADD_HOBBY":
      break;
    case "SET_ACTIVE_HOBBY":
      break;

    default:
      return state;
  }

  return <div></div>;
}
