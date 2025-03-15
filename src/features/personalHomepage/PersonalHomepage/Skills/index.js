import { StyledDot, Item, List, StyledHeader, Section } from "./styled"

export const Skills = ({ header, skills }) => (
    <Section>
        <StyledHeader>{header}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <StyledDot />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);  