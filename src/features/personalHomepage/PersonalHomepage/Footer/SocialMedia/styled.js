import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 24px;
    margin: 56px 0 0 0;
    padding: 0;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 40px 0 0 0;
        gap: 16px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const styleIcon = Icon => styled(Icon)`
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 44px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
    }
`;