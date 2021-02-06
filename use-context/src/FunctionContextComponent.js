import React, { useContext } from 'react'
import { ThemeContext } from './App'

/**
 * Function Component使用Context
 */
export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    console.log('darkTheme', darkTheme);
    return (
        <div style={themeStyles}>Function Theme</div>
    )
}