import { Header } from "./Header";
import { Skills } from "./Skills";
import { skills, skillsToLearn } from "./Skills/skillsData";
import { Wrapper } from "./styled";

export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <Header />
            <Skills
                header={"My skillset includes 🛠️"}
                skills={skills}
            />
            <Skills
                header={"What I want to learn next 🚀"}
                skills={skillsToLearn}
            />
        </Wrapper>
    );
};