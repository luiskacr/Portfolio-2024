import { Hero } from "../components/Hero"
import { Experiences } from "../components/Experiences"
import { ProjectSection } from "../components/ProjectSection"
import { Skills } from "../components/Skills"

export const Home = () => {
    return <>
        <Hero/>
        <Experiences />
        <Skills />
        <ProjectSection />
    </>
}