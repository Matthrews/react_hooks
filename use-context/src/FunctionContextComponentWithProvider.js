import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'
/**
 * Function Component使用Context
 * 
 * 定制hooks
 */
export default function FunctionContextComponentWithProvider() {
    const darkTheme = useTheme()
    const toogleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    console.log('darkTheme', darkTheme);
    return (
        <>
            <button onClick={toogleTheme}>Toogle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}