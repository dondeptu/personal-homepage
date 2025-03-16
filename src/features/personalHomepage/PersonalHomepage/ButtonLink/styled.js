import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background: ${({ theme }) => theme.colors.primary};
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow 0.3s;

    &:hover, &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadowFocus};
    }

    &:active {
        box-shadow: 0 2px ${({ theme }) => theme.colors.buttonLink.shadowSelected} inset;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;