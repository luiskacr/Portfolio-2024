import { FaCodeBranch } from "react-icons/fa"
import { TranslateText } from "./TranslateText"
import { ProjectGrid } from "./ProjectsGrid"
import { MainButton } from "./MainButton"

export const ProjectSection = () => {
    return <>
        <section className="mt-24">
            <header className="flex items-center justify-center text-3xl mb-4">
                <FaCodeBranch />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-3"> 
                    <TranslateText text="projects"/>
                </h2>
            </header>
            <div className="p-4 lg:px-24">
                <p className="my-6 md:mt-4 text-xl leading-relaxed dark:text-gray-400">
                    <TranslateText text={'projects_text'} />
                </p>
                <div className="">
                    <ProjectGrid max={3} filter={false} />
                </div> 
                <div className="flex justify-center">
                    <MainButton href="/projects" >
                        <TranslateText text="all" />
                    </MainButton>
                </div>     
            </div>  
        </section>
    </>
}