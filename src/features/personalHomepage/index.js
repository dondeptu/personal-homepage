import { Header } from "./PersonalHomepage/Header";
import { Skills } from "./PersonalHomepage/Skills";
import { skills, skillsToLearn } from "./PersonalHomepage/Skills/skillsData";
import { Wrapper } from "./styled";

export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <Skills
                    header={"My skillset includes 🛠️"}
                    skills={skills}
                />
                <Skills
                    header={"What I want to learn next 🚀"}
                    skills={skillsToLearn}
                />
            </main>
        </Wrapper>
    );
};