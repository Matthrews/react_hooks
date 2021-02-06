import React, { Component } from 'react'
import { ThemeContext } from './App'

/**
 * Class Component使用Context
 * 写法很复杂
 */
export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        console.log('render');
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}