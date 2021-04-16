import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const ReduxProvider = ({ children, initialState = {} }) => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
