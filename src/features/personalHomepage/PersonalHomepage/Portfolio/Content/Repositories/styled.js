import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px){
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const RepoTile = styled.li`
    background: ${({ theme }) => theme.colors.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.repoTile.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 56px;
    transition: border-color 0.3s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.repoTile.borderHover};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        padding: 24px;
    }
`;

export const Name = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.repoTile.header};
    margin: 0;
    line-height: 1.0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 16px;
    }
`;

export const Description = styled.p`
    line-height: 1.4;
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 16px 0;
    }
`;

export const DescriptionList = styled.dl`
    display: grid;
    grid-gap: 8px;
    margin: 0;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin: 16px 0;
    }
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
`;

export const DefinitionValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.2)};
    padding-bottom: 1px;
    transition: border-color 0.3s;

    &:hover {
        border-color: ${({ theme }) => α(theme.colors.primary, 0.8)};
    }
`;