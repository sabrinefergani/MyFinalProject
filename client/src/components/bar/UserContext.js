import React, { createContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUser = async (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ user: currentUser, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
