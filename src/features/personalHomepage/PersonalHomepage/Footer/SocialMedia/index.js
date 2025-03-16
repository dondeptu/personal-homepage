import { socials } from "./socials";
import { Link, List } from "./styled";

export const SocialMedia = () => (
    <List>
        {socials.map(({ title, url, Icon }) => (
            <li key={title}>
                <Link href={url} title={title} target="_blank" rel="noreferrer noopener">
                    <Icon />
                </Link>
            </li>
        ))}
    </List>
);