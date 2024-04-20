import { createContext, useContext, useReducer } from "react";
import { messagesData } from "data/messagesData";
import React from "react";
import { collectionData, marketData } from "data/itemsData";
import { generalData, walletData } from "data/walletData";
import { activityData } from "data/ordersData";

const initialState = {
  messages: {
    messagesData: messagesData,
    selectedMessageIndex: 0,
  },
  globalitems: {
    activeData: marketData?.filter((item) => Date.now() < item?.timeLeft),
    marketData: marketData,
    trendingData: marketData?.filter((item) => item?.trending == true),
    collectionData: collectionData,
    walletData: walletData,
  },

  globalSavedData: {
    savedData: marketData?.filter((item) => item?.saved == true),
  },

  globalActivityData: {
    activityData: activityData,
  },

  globalData: {
    generalData: generalData,
  },
};

const UPDATE_STATE = "UPDATE_STATE";

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = (newState) => {
    dispatch({ type: UPDATE_STATE, payload: newState });
  };

  return (
    <UserContext.Provider value={{ ...state, updateState }}>
      {children}
    </UserContext.Provider>
  );
}
