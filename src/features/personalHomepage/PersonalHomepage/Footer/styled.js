import styled from "styled-components";

const styleMarginTop = ({ $status }) => {
    if ($status === "success") {
        return "120px";
    }
    return "140px";
};

export const Wrapper = styled.footer`
    margin-top: ${styleMarginTop};
    max-width: 691px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 90px;
        max-width: 85%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        max-width: 100%;
    }
`;

export const Caption = styled.h2`
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0;
    margin: 0;
    text-transform: uppercase;
`;

export const Address = styled.address`
    font-style: normal;
`;

export const EmailBox = styled.div`
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0;
    }
`;

export const Email = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 32px;
    font-weight: 900;
    line-height: 1.0;
    text-decoration: none;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;
    margin: 0;
`;