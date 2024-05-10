import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("signup");

  return (
    <AuthContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
