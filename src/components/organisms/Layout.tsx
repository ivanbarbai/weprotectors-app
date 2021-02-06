import React from 'react'

//Styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'

const GlobalStyle = createGlobalStyle`
* {
    text-decoration: none;
}

body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.backgroundColor};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = () => {
    return (

        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
        </ThemeProvider>
    )
}


export default Layout
