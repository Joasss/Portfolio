import { ProjectsContainer } from "../styles/Projects"

export const Projects = () => {
    return <div>
        <h1>Projects</h1>
        <ProjectsContainer>
            <a href="https://quabot.net">
                <img src="https://i.imgur.com/9iJ4HEV.png" />
                <div>
                    <b>QuaBot</b>
                    <p>A verified multipurpose Discord bot.</p>
                </div>
            </a>
            <a href="https://quabot.dev">
                <img src="https://i.imgur.com/NCXQqFE.png" />
                <div>
                    <b>QuaBot Development</b>
                    <p>A platform for development projects.</p>
                </div>
            </a>
            <a href="https://quabot.dev#pb" target="_blank">
                <img src="https://i.imgur.com/EpIvKOb.png" />
                <div>
                    <b>Pasterboard</b>
                    <p>A forum to share your thoughts and feelings.</p>
                </div>
            </a>
            <a href="https://github.com/Joasss/NeoPass">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbxfA278BLt-USju2S80nIFpTgZ_qu7vqGA&s" />
                <div>
                    <b>Neopass</b>
                    <p>A simple electron-based password generator.</p>
                </div>
            </a>
        </ProjectsContainer><br />
        <p>More coming soon...</p>
    </div>
}