import {Global, css} from "@emotion/react"

const GlobalStylesTwo = () => {
  return (
    <Global styles = {
        css`
            body {
                padding: 0;
                margin: 0;
                background-color: cornflowerblue;
                min-height: 100vh;
                font-family: Arial, Helvetica, sans-serif;
            }
        `
    } />
  )
}

export default GlobalStylesTwo