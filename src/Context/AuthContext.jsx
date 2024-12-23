import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData); 
  };

  const value = {
    user,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
