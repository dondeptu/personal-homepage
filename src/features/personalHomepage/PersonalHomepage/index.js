import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { skills, skillsToLearn } from "./Skills/skillsData";
import { Wrapper } from "./styled";

export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <ThemeSwitch />
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
                <Portfolio />
            </main>
            <Footer />
        </Wrapper>
    );
};