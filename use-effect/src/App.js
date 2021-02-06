import React, { useState, useEffect } from 'react';

function App() {

  const [resouceType, setResouceType] = useState('posts')
  const [items, setItems] = useState([])

  console.log('render');  // run twice

  // every time when resouceType changes, the component renders
  useEffect(() => {
    console.log('resource type changed');   // run once
    fetch(`https://jsonplaceholder.typicode.com/${resouceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resouceType])  // 如果依赖为空数组或者常量数组，则只运行一次，类似于didMount

  return (
    <>
      <div>
        <button onClick={() => setResouceType('posts')}>Post</button>
        <button onClick={() => setResouceType('users')}>Users</button>
        <button onClick={() => setResouceType('comments')}>Comments</button>
      </div>
      <h1>{resouceType}</h1>
      {
        items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })
      }
    </>
  );
}

export default App;
