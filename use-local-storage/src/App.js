import React from 'react'
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger'

export default function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger('name', name)
  return (
    <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
  );
}
