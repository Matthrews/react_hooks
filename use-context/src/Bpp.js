import React from 'react'
import FunctionContextComponentWithProvider from './FunctionContextComponentWithProvider'
import { ThemeProvider } from './ThemeContext'
// export const ThemeContext = React.createContext()
/**
 * 优化ClassContextComponent写法
 */
function Bpp() {
  // const [darkTheme, setDarkTheme] = useState(true)

  // const toogleTheme = () => {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  return (
    <>
      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <ClassContextComponent />
      </ThemeContext.Provider> */}
      <ThemeProvider>
        <FunctionContextComponentWithProvider />
      </ThemeProvider>
    </>
  );
}

export default Bpp;
