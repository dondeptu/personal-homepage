import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startFetch } from "../../repositoriesSlice";
import { Header, Paragraph, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader/styled";

export const Portfolio = () => {
    const githubUsername = "dondeptu";

    const dispatch = useDispatch();
    //const repositoriesStatus = useSelector(selectRepositoriesStatus);
    //const repositoriesContent = useSelector(selectRepositoriesContent);

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
            
        </Section>
    );
};