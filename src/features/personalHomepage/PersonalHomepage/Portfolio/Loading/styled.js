import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from "./spinner.svg";

const loaderAnimation = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;
    margin-top: 88px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px){
        margin-top: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 17px;
        margin-top: 34px;
    }
`;

export const StyledLoader = styled(Loader)`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 48px;
    height: auto;
    animation-name: ${loaderAnimation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktopMax}px){
        width: 140px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px){
        margin-top: 40px;
        width: 100px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 34px;
        width: 60px;
    }
`;