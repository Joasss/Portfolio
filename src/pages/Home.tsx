import { HomeContactTitle, HomeContactWrapper, HomeHeightWrapper, HomeLanguage, HomeMarginWrapper, HomeSubtitle, HomeTitle, HomeWrapper } from "../styles/Home"
import { FaDiscord, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { useState } from "react";

export const Home = () => {

    const [selected, setSelected] = useState(0);

    (function loop() {
        setTimeout(function () {
            setSelected(selected+1);
            if (selected === 5) setSelected(0);
            loop();
        }, 3500);
    })();

    return (
        <HomeMarginWrapper>
            <HomeHeightWrapper>
                <HomeWrapper>
                    <div>
                        <HomeTitle>Hi, I'm <span>Joa_sss</span>,</HomeTitle>
                        <HomeSubtitle>A developer & learning graphic designer from the Netherlands.</HomeSubtitle>
                    </div>

                    <div>
                        <HomeLanguage className={selected === 0 ? 'active' : ''}>Developer</HomeLanguage>
                        <HomeLanguage className={selected === 1 ? 'active' : ''}>Designer</HomeLanguage>
                        <HomeLanguage className={selected === 2 ? 'active' : ''}>Javascript</HomeLanguage>
                        <HomeLanguage className={selected === 3 ? 'active' : ''}>Typescript</HomeLanguage>
                        <HomeLanguage className={selected === 4 ? 'active' : ''}>HTML/CSS</HomeLanguage>
                        <HomeLanguage className={selected === 5 ? 'active' : ''}>Java</HomeLanguage>
                    </div>
                </HomeWrapper>
            </HomeHeightWrapper>

            <HomeContactWrapper>
                <HomeContactTitle>Contact me:</HomeContactTitle>
                <FaDiscord onClick={() => window.location.href = 'https://discord.com/users/486563467810308096'} size={25} color={'#A2A2A2'} />
                <FaEnvelope onClick={() => window.location.href = 'mailto:joas@quabot.net'} size={25} color={'#A2A2A2'} />
                <FaTwitter onClick={() => window.location.href = 'https://twitter.com/Joa_sssss'} size={25} color={'#A2A2A2'} />
                <FaGithub onClick={() => window.location.href = 'https://github.com/Joasss'} size={25} color={'#A2A2A2'} />
            </HomeContactWrapper>
        </HomeMarginWrapper>
    )
}