import React, { useState } from 'react'
import ThemeContext from './createThemeContext';

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
