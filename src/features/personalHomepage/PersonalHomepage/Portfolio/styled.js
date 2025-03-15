import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const Header = styled.header`
    text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
        height: 32px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-top: 16px;
    }
`;