import donataDeptulaAvatar from "./avatar.jpg";
import { ButtonLink, About, Name, IntroText, ProfileImage, Wrapper, StyledEnvelopeIcon } from "./styled";

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
            <ButtonLink href="mailto:dondeptu@gmail.com" title="dondeptu@gmail.com">
                <StyledEnvelopeIcon />
                Hire Me
            </ButtonLink>
        </div>
    </Wrapper>
);