import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", serif;
        background: ${({ theme }) => theme.colors.page.background};
        color: ${({ theme }) => theme.colors.page.text};
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        padding-bottom: 109px;
        
        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 31px;
        }
    }
`;