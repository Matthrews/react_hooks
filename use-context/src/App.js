import React, { useContext, useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

export const ThemeContext = React.createContext()

// useContext
// is's kind of a global state for all of the children of the provider
function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toogleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
