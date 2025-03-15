import { StyledLoader, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        <span>Please wait, projects are being loaded...</span>
        <StyledLoader />
    </Wrapper>
);