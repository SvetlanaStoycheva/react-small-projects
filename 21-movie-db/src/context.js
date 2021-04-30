import React, { useState, useContext } from 'react'
// make sure to use https

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('inception')

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
