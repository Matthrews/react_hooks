
import React, { useEffect, useState, useMemo } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // 不用useMemo --> 程序运行后，每次交互都会触发slowFunction
  // const doubleNumber = slowFunction(number)
  // 使用场景1：调用一个很慢的函数的时候
  const doubleNumber = useMemo(() => slowFunction(number), [number])

  // 使用场景2：对象相等(referential equality)
  // 我们知道，JavaScript中的任意连个对象都不下相同
  // 可以使用useEffect试试
  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // };

  // 使用useMemo包裹我们的对象，dark不变，我们的对象不变(同一个引用)
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    };
  }, [dark])

  useEffect(() => {
    // 每次number变化的时候themeStyles都会变
    // 解决：我们应该用useMemo实现themeStyles
    console.log('Theme Changed');
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 1000000000000000000000000; i++) {
    return num * 2
  }
}


