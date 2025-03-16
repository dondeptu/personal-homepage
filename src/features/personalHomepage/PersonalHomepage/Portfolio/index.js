import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectRepositoriesContent, startFetch } from "../../repositoriesSlice";
import { Header, Paragraph, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader/styled";
import { githubUsername } from "./githubUsername";
import { Repositories } from "./Repositories";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Portfolio = () => {
    const dispatch = useDispatch();
    //const repositoriesStatus = useSelector(selectRepositoriesStatus);
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
            {/* <Repositories repositories={repositoriesContent} /> */}
            {/* <Loading /> */}
            <Error />
        </Section>
    );
};