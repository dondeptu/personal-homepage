import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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
        word-break: break-word;
        padding-bottom: 109px;
        
        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 31px;
        }
    }
`;