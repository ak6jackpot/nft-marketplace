import { createContext, useContext, useReducer } from "react";
import { messagesData } from "data/messagesData";
import React from "react";
import { collectionData, marketData } from "data/itemsData";
import { walletData } from "data/walletData";

// Define the initial state
const initialState = {
  messages: {
    messagesData: messagesData,
    selectedMessageIndex: 0,
  },
  globalitems: {
    savedData: marketData?.filter((item) => item?.saved == true),
    activeData: marketData?.filter((item) => Date.now() < item?.timeLeft),
    marketData: marketData,
    trendingData: marketData?.filter((item) => item?.trending == true),
    collectionData: collectionData,
    walletData: walletData,
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
