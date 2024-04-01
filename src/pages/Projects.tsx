import { FaCodeBranch } from "react-icons/fa"
import { ProjectGrid } from "../components/ProjectsGrid"
import { TranslateText } from "../components/TranslateText"

export const Projects = () => {
    return <>
        <section className="pt-10 ">
            <header className="flex items-center justify-center text-3xl mb-4">
                <FaCodeBranch />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-3"> 
                    <TranslateText text="projects"/>
                </h2>
            </header>
            <div className="">
                <p className="my-6 md:mt-4 text-xl leading-relaxed dark:text-gray-400">
                    <TranslateText text={'projects_text'} />
                </p>
            </div>
            <div className="mb-20">
                <ProjectGrid  filter={true} />
            </div>
        </section>
    </>
}