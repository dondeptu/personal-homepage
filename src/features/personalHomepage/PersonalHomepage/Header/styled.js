import styled from "styled-components";
import { ButtonLink } from "../ButtonLink/styled";
import { ReactComponent as EnvelopeIcon } from "./envelopeIcon.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-gap: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const ProfileImage = styled.img`
    width: 30vw;
    max-width: 398px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width: 128px;
    }
`;

export const IntroText = styled.span`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0;
    text-transform: uppercase;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const About = styled.p`
    font-size: 20px;
    line-height: 1.4;
    max-width: 633px;
    margin: 35px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktopMax}px) {
        max-width: 90%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        max-width: 95%;
        margin-top: 16px;
    }
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    margin-top: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 24px;
    }
`;

export const StyledEnvelopeIcon = styled(EnvelopeIcon)`
    width: 24px;
    height: 24px;
    margin-right: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 20px;
        height: 20px;
        margin-right: 12px;
    }
`;