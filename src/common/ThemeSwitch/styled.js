import styled, { css } from "styled-components";
import { ReactComponent as BrightnessIcon } from "./brightness.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    outline-offset: 5px;
    cursor: pointer;
`;

export const Label = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Track = styled.span`
    display: flex;
    align-items: center;
    padding: 3px;
    width: 48px;
    height: 26px;
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: 1px solid currentColor;
    border-radius: 14px;
    box-shadow: ${({ theme }) => theme.colors.themeSwitch.shadow};
`;

export const Thumb = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: currentColor;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: transform 0.3s;

    ${({ $shift }) => $shift && css`
        transform: translateX(100%);
    `}
`;

export const StyledBrightnessIcon = styled(BrightnessIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;