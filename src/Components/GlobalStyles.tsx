import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
 
    return (
    <Global 
    styles= { css`
        body {
            font-family: Arial, Helvetica, Arial, Helvetica, sans-serif;
            padding: 0;
            margin: 0;
            min-height: 100vh;
            background-color: aliceblue;
        }
        
    `} />



    )
}

export default GlobalStyles