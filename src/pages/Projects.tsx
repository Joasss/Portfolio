import { ProjectsContainer } from "../styles/Projects";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export const Projects = () => {
    document.title = 'Projects | Joa_sss';

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
            <a href="https://quabot.dev#pb" target="_blank" rel="noreferrer">
                <img src="https://i.imgur.com/EpIvKOb.png" />
                <div>
                    <b>Pasterboard</b>
                    <p>A forum to share your thoughts and feelings.</p>
                </div>
            </a>
            <a href="https://snipvault.dev" target="_blank" rel="noreferrer">
                <MdOutlineContentPasteSearch color="#a0d5fd" size={25} />
                <div>
                    <b>SnipVault</b>
                    <p>An easy way to manage snippets of code.</p>
                </div>
            </a>
            <a href="https://quabot.dev">
                <img src="https://i.imgur.com/NCXQqFE.png" />
                <div>
                    <b>QuaBot Development</b>
                    <p>A platform for development projects.</p>
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