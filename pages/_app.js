import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

const GlobalStyle = createGlobalStyle`
   html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 10px;
    position: relative;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.contrastText};
  }
`

const theme = {
  colors: {
    primary: '#fec63e',
    black: '#3c4658',
    gray: '#565555'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
