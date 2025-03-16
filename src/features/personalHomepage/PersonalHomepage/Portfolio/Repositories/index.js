import { DefinitionValue, Description, DescriptionList, Link, LinkContainer, List, Name, RepoTile } from "./styled";

export const Repositories = ({ repositories }) => (
    <List>
        {!!repositories && repositories.map(({ id, name, description, homepage, html_url }) => (
            <RepoTile key={id}>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <DescriptionList>
                    {!!homepage && (
                        <LinkContainer>
                            <dt>Demo:</dt>
                            <DefinitionValue>
                                <Link target="_blank" rel="noreferrer noopener" href={homepage}>{homepage}</Link>
                            </DefinitionValue>
                        </LinkContainer>
                    )}
                    <LinkContainer>
                        <dt>Code:</dt>
                        <DefinitionValue>
                            <Link target="_blank" rel="noreferrer noopener" href={html_url}>{html_url}</Link>
                        </DefinitionValue>
                    </LinkContainer>
                </DescriptionList>
            </RepoTile>
        ))}
    </List >
);