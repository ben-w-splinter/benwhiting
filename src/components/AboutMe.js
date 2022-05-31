import { Card } from './Card'
import { FadeIn } from './FadeIn'
import { StyledAboutMe } from './styles/StyledAboutMe'

export const AboutMe = () => {
    return (
        <StyledAboutMe>
        <FadeIn>
            <Card title={"Hello World!"} content = {
                "I am currently a student at Lancaster University studying Computer Science. I have had a passion for application development and software design since the age of 13. " +
                "I have worked on many software programs as part of school, university and personal projects. " + 
                "I find Computer Science fascinating due to its balance of rules and expression of creativity, as well as its enormous impact on our society (both negative and positive). "
            }/>
        </FadeIn>
        <FadeIn>
            <Card title={"Hobbies and Interests"} content = {
                "In August 2020, I built my current PC, which allowed me to explore and learn about the assembly and configuration of internal components of a computer. " + 
                "I also enjoy activities outside of Computer Science. I have played squash for the last 4 years and I also enjoy camping and hiking in the great outdoors! "
            }/>
        </FadeIn>
        <FadeIn>
            <Card title={"Future Aspirations"} content = {
                "In the future, I hope to work on user application development for both mobile and desktop environments. My passion is to bring online accessability to " +
                "small businesses and ensure that everyone has a fair chance in the online market."
            }/>
        </FadeIn>
        </StyledAboutMe>
)
}
