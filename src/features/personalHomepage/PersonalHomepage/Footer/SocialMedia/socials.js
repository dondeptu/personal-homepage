import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedIn.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { styleIcon } from "./styled";

export const socials = [
    {
        title: "GitHub",
        url: "https://github.com/dondeptu",
        Icon: styleIcon(GithubIcon),
    },
    {
        title: "Facebook",
        url: "https://facebook.com/donata.deptula",
        Icon: styleIcon(FacebookIcon),
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com/in/donata-deptuła-438b8420a",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        title: "Instagram",
        url: "https://instagram.com/trocheslonca_/",
        Icon: styleIcon(InstagramIcon),
    },
];