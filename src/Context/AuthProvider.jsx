import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {


    const Authinfo = {
        

    }
  return <AuthContext.Provider value={Authinfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
