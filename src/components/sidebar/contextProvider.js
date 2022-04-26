import React from 'react';

export const Context = React.createContext<any>(null);

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState<Boolean>(false);

  return (
    <Context.Provider
      value={{
        menuOpen,
        setMenuOpen
      }}
    >
      {children}
    </Context.Provider>
  );
};