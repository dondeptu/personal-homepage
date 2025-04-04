import styled from "styled-components";
import { SubHeader } from "../SubHeader/styled";
import { ReactComponent as Dot } from "./dot.svg";

export const Section = styled.section`
    margin-top: 72px;
    padding: 32px;
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

    @media(max-width: ${({ theme }) => theme.breakpoints.tableteMax}px) {
        padding-bottom: 12px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 88px;
    padding: 0;
    margin-top: 32px;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktopMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        margin-top: 12px;
        font-size: 14px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 8px;
        line-height: 1.0;
    }
`;

export const StyledDot = styled(Dot)`
    width: 9px;
    height: auto;
    color: ${({ theme }) => theme.colors.primary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 6px;
        min-width: 6px;
    }
`;