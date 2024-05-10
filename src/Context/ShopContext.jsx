// ShopContextProvider.jsx

import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [userFullName, setUserFullName] = useState(() => {
    return localStorage.getItem("userFullName") || "";
  });

  const updateUserFullName = (fullName) => {
    setUserFullName(fullName);
    localStorage.setItem("userFullName", fullName);
  };

  const signOut = () => {
    setUserFullName(""); // Clear user full name
    localStorage.removeItem("userFullName"); // Remove from localStorage
  };

  const contextValue = {
    all_product,
    userFullName,
    updateUserFullName,
    signOut,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
