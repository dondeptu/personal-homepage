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
        padding-top: 119px;
        padding-bottom: 109px;
        transition: background 0.3s;

        @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktopMax}px) {
            padding-top: 68px;
            padding-bottom: 78px;
        }

        @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
            padding-top: 56px;
            padding-bottom: 42px;
        }
        
        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            font-size: 14px;
            padding-top: 34px;
            padding-bottom: 31px;
        }
    }
`;