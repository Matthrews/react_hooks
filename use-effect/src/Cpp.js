import React, { useState, useEffect } from 'react';

function App() {

  const [resouceType, setResouceType] = useState('posts')

  useEffect(() => {
    console.log('resource type changed');   // A
    return () => {
      // B runs before A to clean up when resouceType changes
      // 可以用在清除上次监听器的时候以优化性能
      console.log('return from resource type change');  // B
    }
  }, [resouceType])

  return (
    <>
      <div>
        <button onClick={() => setResouceType('posts')}>Post</button>
        <button onClick={() => setResouceType('users')}>Users</button>
        <button onClick={() => setResouceType('comments')}>Comments</button>
      </div>
      <h1>{resouceType}</h1>
    </>
  );
}

export default App;
