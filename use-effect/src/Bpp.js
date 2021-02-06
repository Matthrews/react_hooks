import React, { useState, useEffect } from 'react';

function App() {

  const [windoWidth, setWindoWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindoWidth(window.innerWidth)
  }

  /**
   * Accepts a function that contains imperative, possibly effectful code.
   * @param effect — Imperative function that can return a cleanup function
   * @param deps — If present, effect will only activate if the values in the list change.
   */
  useEffect(() => {
    console.log('add a listener');
    window.addEventListener('resize', handleResize)
    return () => {
      // excute when unmount
      console.log('clean up last listener');
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {windoWidth}
    </div>
  );
}

export default App;
