import { LanguagesContainer, ProgressBar } from "../styles/Projects"

export const Skills = () => {
    document.title = 'Skills | Joa_sss';

    return <div>
        <h1>Skills & Libraries</h1>
        <LanguagesContainer>
            <div>
                <img src="https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg" />
                <div>
                    <b>React</b>
                    <ProgressBar progress={95}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://github.com/devicons/devicon/raw/master/icons/discordjs/discordjs-original.svg" />
                <div>
                    <b>Discord.JS</b>
                    <ProgressBar progress={95}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" />
                <div>
                    <b>Express.JS</b>
                    <ProgressBar progress={80}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg" />
                <div>
                    <b>MongoDB</b>
                    <ProgressBar progress={70}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://nestjs.com/img/logo-small.svg" />
                <div>
                    <b>Nest.JS</b>
                    <ProgressBar progress={20}><div /></ProgressBar>
                </div>
            </div>
        </LanguagesContainer>
    </div>
}