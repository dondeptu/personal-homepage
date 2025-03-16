import { email } from "../email";
import donataDeptulaAvatar from "./avatar.jpg";
import { About, Name, IntroText, ProfileImage, Wrapper, StyledEnvelopeIcon, StyledButtonLink } from "./styled";

export const Header = () => (
    <Wrapper>
        <ProfileImage src={donataDeptulaAvatar} alt="Donata Deptula" />
        <div>
            <IntroText>This is</IntroText>
            <Name>Donata Deptuła</Name>
            <About>
                👩🏼‍💻 I'm a Frontend Developer growing in React, looking to gain experience in a professional environment.
                If you're looking for someone who is dedicated and eager to learn – I would love to join your team!
            </About>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <StyledEnvelopeIcon />
                Hire Me
            </StyledButtonLink>
        </div>
    </Wrapper>
);