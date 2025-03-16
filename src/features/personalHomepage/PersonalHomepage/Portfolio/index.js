import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectRepositoriesContent, selectRepositoriesStatus, startFetch } from "../../repositoriesSlice";
import { Header, Paragraph, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader/styled";
import { githubUsername } from "./githubUsername";
import { Content } from "./Content";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositoriesContent = useSelector(selectRepositoriesContent);

    useEffect(() => {
        dispatch(startFetch(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <Paragraph>My recent projects</Paragraph>
            </Header>
            <Content
                status={repositoriesStatus}
                repositories={repositoriesContent}
            />
        </Section>
    );
};