import { FaBriefcase } from "react-icons/fa"
import { TranslateText } from "./TranslateText"
import { EXPERIENCE } from "../constants/experience"
import { DateRange } from "./DateRange";
import { Experience } from "../interfaces";

export const Experiences = () => {
    
    return<>
        <section className="mt-24">
            <div className="flex items-center justify-center text-3xl mb-4">
                <FaBriefcase />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-3"> 
                    <TranslateText text="experience"/>
                </h2>
            </div>  
            <div className="relative md:flex md:justify-center p-4 lg:px-24">
                <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-8">                  
                    {
                    EXPERIENCE.map((experience: Experience, index: number) => {
                        const isFirstItem:boolean = index === 0 || experience.tittle !== EXPERIENCE[index - 1].tittle;
                            return (
                                <li className="mb-10 ms-6" id={experience.tittle} key={index}>
                                    {isFirstItem ?
                                    <>
                                        <span className="mt-1 absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 
                                        ring-8 ring-white dark:ring-gray-900 dark:bg-yonder-blue-900 animate-heartbeat animate-duration-1000"
                                        style={{animationIterationCount: 'infinite', animationDuration: '3000ms', }}>
                                        <FaBriefcase />
                                        </span>
                                        <h3 className="mx-2  text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">{experience.tittle}</h3>
                                    </>
                                    :
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900
                                    dark:bg-gray-700"></div>
                                    }
                                    <h4 className="m-4 text- font-semibold text-gray-900 dark:text-white">{experience.position}</h4>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <DateRange startDate={experience.startDate} endDate={experience.endDate}/>
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        <TranslateText text={experience.description} />
                                    </p>
                                </li> 
                            )               
                        })
                    }
                </ol> 
            </div>
        </section>
    </>
}