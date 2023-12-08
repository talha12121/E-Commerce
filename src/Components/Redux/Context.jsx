import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const updateFilteredUsers = (users) => {
    setFilteredUsers(users);
  };

  return (
    <UserContext.Provider value={{ filteredUsers, updateFilteredUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
