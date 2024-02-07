import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userID, setUserID] = useState(null);
  const [brannch, SetBranch] = useState();

  const setUser = (type, id) => {
    setUserType(type);
    setUserID(id);
  };

  const setBrannch = (branchID) => {
    SetBranch(branchID);
  };

  return (
    <UserContext.Provider
      value={{ userType, userID, setUser, brannch, setBrannch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
