import { useSelector } from "react-redux";
import { Address, Caption, Email, EmailBox, Paragraph, SocialIcons, Wrapper } from "./styled";
import { selectRepositoriesStatus } from "../../repositoriesSlice";

export const Footer = () => {
    const status = useSelector(selectRepositoriesStatus);

    return (
        <Wrapper $status={status}>
            <Caption>Let’s talk!</Caption>
            <Address>
                <EmailBox>
                    <Email href="mailto:dondeptu@gmail.com">dondeptu@gmail.com</Email>
                </EmailBox>
                <Paragraph>
                    I'm open to new opportunities in Frontend Development. To me, it's&nbsp;not just about writing
                    code&nbsp;—&nbsp;it’s about making things simple and enjoyable for real people. If you're looking for
                    an&nbsp;enthusiastic developer ready to grow and contribute, let's&nbsp;connect! 🌸
                </Paragraph>
                <SocialIcons>

                </SocialIcons>
            </Address>
        </Wrapper>
    );
};