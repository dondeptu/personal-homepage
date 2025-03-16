import { ButtonLink } from "../../../ButtonLink/styled";
import { Paragraph, StyledWarningIcon, Title, Wrapper } from "./styled";
import { githubUsername } from "../../githubUsername";

export const Error = () => (
    <Wrapper>
        <header>
            <StyledWarningIcon />
            <Title>Ooops! Something went wrong... </Title>
        </header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer noopener">Go to Github</ButtonLink>
    </Wrapper>
);