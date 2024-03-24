import { createContext, useContext, useReducer } from "react";
import { messagesData } from "data/data";
import React from "react";

// Define the initial state
const initialState = {
  messages: {
    messagesData: messagesData,
    selectedMessageIndex: 0,
  },
};

// Define action types
const UPDATE_STATE = "UPDATE_STATE";

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// Create context
const UserContext = createContext(null);

// Custom hook for using the context
export function useUserContext() {
  return useContext(UserContext);
}

// Context provider component
export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the updateState function
  const updateState = (newState) => {
    dispatch({ type: UPDATE_STATE, payload: newState });
  };

  return (
    <UserContext.Provider value={{ ...state, updateState }}>
      {children}
    </UserContext.Provider>
  );
}
