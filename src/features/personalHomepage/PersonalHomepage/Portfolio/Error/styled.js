import styled from "styled-components";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const Wrapper = styled.article`
    margin-top: 88px;
    display: grid;
    justify-items: center;
    text-align: center;
    grid-gap: 32px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px){
        margin-top: 66px;
        grid-gap: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 36px;
        grid-gap: 24px;
    }
`;

export const StyledWarningIcon = styled(WarningIcon)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 44px;
        height: 44px;
        margin-bottom: 14px;
    }
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    line-height: 1.0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 17px;
    }
`;