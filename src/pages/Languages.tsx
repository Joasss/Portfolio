import { LanguagesContainer, ProgressBar } from "../styles/Projects"

export const Languages = () => {
    document.title = 'Languages | Joa_sss';

    return <div>
        <h1>Languages</h1>
        <LanguagesContainer>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                <div>
                    <b>Javascript</b>
                    <ProgressBar progress={100}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
                <div>
                    <b>Typscript</b>
                    <ProgressBar progress={80}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png" />
                <div>
                    <b>HTML & CSS</b>
                    <ProgressBar progress={75}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://education.oracle.com/file/general/p-80-java.png" />
                <div>
                    <b>Java</b>
                    <ProgressBar progress={30}><div /></ProgressBar>
                </div>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png" />
                <div>
                    <b>Python</b>
                    <ProgressBar progress={20}><div /></ProgressBar>
                </div>
            </div>
        </LanguagesContainer>
    </div>
}