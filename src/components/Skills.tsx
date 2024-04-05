import { FaCode } from "react-icons/fa"
import { TranslateText } from "./TranslateText"
import { BentoSkills } from "./BentoSkills"

export const Skills = () => {
    
    return<>
    <section className="mt-24">
        <div className="flex items-center justify-center text-3xl mb-4 text-yonder-blue-600 dark:text-white">
            <FaCode />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-3"> 
                <TranslateText text="skill"/>
            </h2>
        </div>
        <div className="p-4 lg:px-24 flex justify-center">
            <p className="my-6 md:mt-4 text-xl leading-relaxed dark:text-gray-400">
                <TranslateText text={'skill_text'} />
            </p>    
        </div>  
        <div className="relative md:flex md:justify-center p-4 lg:px-24">
           <BentoSkills />
        </div>    
    </section>       
    </>
}