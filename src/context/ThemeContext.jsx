import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();
export default function Theme({children}) {

    const [theme,setTheme] = useState("light");
    function handleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <ThemeContext.Provider value={{theme,handleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
