import { createContext, useContext } from 'react';

import { useProvideAuth } from '../hooks';
const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};
export const AuthContext = createContext(initialState); // to store the authorization state(context)

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>; // here value provides the state to entire app.
};
