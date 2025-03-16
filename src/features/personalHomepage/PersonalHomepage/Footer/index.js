import { useSelector } from "react-redux";
import { Address, Caption, Email, EmailBox, Paragraph, Wrapper } from "./styled";
import { selectRepositoriesStatus } from "../../repositoriesSlice";
import { SocialMedia } from "./SocialMedia";
import { email } from "../email";

export const Footer = () => {
    const status = useSelector(selectRepositoriesStatus);

    return (
        <Wrapper $status={status}>
            <Caption>Let’s talk!</Caption>
            <Address>
                <EmailBox>
                    <Email href={`mailto:${email}`}>{email}</Email>
                </EmailBox>
                <Paragraph>
                    I'm open to new opportunities in Frontend Development. To me, it's&nbsp;not just about writing
                    code&nbsp;—&nbsp;it’s about making things simple and enjoyable for real people. If you're looking for
                    an&nbsp;enthusiastic developer ready to grow and contribute, let's&nbsp;connect! 🌸
                </Paragraph>
                <SocialMedia />
            </Address>
        </Wrapper>
    );
};