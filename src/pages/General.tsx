import { useState } from "react";
import { PageContainer, Tab, TabButton, Tabs } from "../styles/General";
import { Home } from "./Home";
import { AboutMe } from "./About Me";
import { Projects } from "./Projects";

export const General = () => {

    const [selected, setSelected] = useState(0);

    const tabs = ['Home', 'About Me', 'Projects', 'Languages', 'Contact'];

    const handleTabChange = (newTab: number) => {
        if (newTab > 4) setSelected(0);
        else if (newTab < 0) setSelected(4);
        else setSelected(newTab);
    }
    return (
        <>
            <PageContainer>
                {selected === 0 && <Home />}
                {selected === 1 && <AboutMe />}
                {selected === 2 && <Projects />}
            </PageContainer>

            <Tabs>
                <TabButton onClick={() => handleTabChange(selected - 1)}>{'<-'}</TabButton>
                <Tab>{tabs[selected]}</Tab>
                <TabButton onClick={() => handleTabChange(selected + 1)}>{'->'}</TabButton>
            </Tabs>
        </>
    )
}