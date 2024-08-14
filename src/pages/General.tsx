import { useState } from "react";
import { PageContainer, Tab, TabButton, Tabs, TabsWrapper } from "../styles/General";
import { Home } from "./Home";
import { AboutMe } from "./About Me";
import { Projects } from "./Projects";
import { Languages } from "./Languages";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const General = () => {

    const [selected, setSelected] = useState(0);

    const tabs = ['Home', 'About Me', 'Projects', 'Languages', 'Skills', 'Contact'];

    const handleTabChange = (newTab: number) => {
        if (newTab > 5) setSelected(0);
        else if (newTab < 0) setSelected(5);
        else setSelected(newTab);
    }
    return (
        <>
            <PageContainer>
                {selected === 0 && <Home />}
                {selected === 1 && <AboutMe />}
                {selected === 2 && <Projects />}
                {selected === 3 && <Languages />}
                {selected === 4 && <Skills />}
                {selected === 5 && <Contact />}
            </PageContainer>

            <TabsWrapper>
                <Tabs>
                    <TabButton onClick={() => handleTabChange(selected - 1)}>{'<-'}</TabButton>
                    <Tab>{tabs[selected]}</Tab>
                    <TabButton onClick={() => handleTabChange(selected + 1)}>{'->'}</TabButton>
                </Tabs>
            </TabsWrapper>
        </>
    )
}