import React, { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import API from "../API";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState([]);
  const [marchent, setMarchent] = useState([]);
  const { data: session } = useSession();

  const requestUser = async () => {
    try {
      const res = await API.get("/getuser", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(res.data.type === 'marchent'){
          setMarchent([res.data.user])
      }
      if(res.data.type === 'customer'){
          setCustomer([res.data.user])
      }
    } catch (error) {
       setCustomer([])
       setMarchent([])
    }
  };
  useEffect(() => {
    requestUser();
    if (session) {
      setUser([session.user]);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        customerInfo: [customer],
        marchentInfo: [marchent],
        requestUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
