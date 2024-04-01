import { SKILLS } from '../constants/skills';
import { Skills, Technology } from '../interfaces';
import { PillsComponent } from './PillsComponent';
import { TranslateText } from './TranslateText';

export const BentoSkills: React.FC = () => {

    const boxStyle:string = "row-span-1 rounded-xl border border-gray-700 shadow dark:bg-gray-800/30 hover:scale-105 dark:hover:bg-gray-800/50 transition duration-500";

    return (
        <div className={`w-full grid lg:grid-cols-4 lg:auto-rows-[350px] gap-4 `}>
            {SKILLS.map((skill: Skills, index: number) => (
                <div key={skill.title} id={skill.title} className={`${boxStyle} 
                    ${index === 0 || index === 4 || index === 5  || index === 6 ? "lg:col-span-2" : ""} 
                    ${index === 2 ? "lg:row-span-2" : ""}` 
                }>
                    <div className="text-center">
                        <h3 className="my-8 md:my-4 text-3xl  font-bold text-gray-900 dark:text-white sm:p-8 ">
                            <TranslateText text={skill.title}/>
                        </h3>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-3 px-8 mb-12 lg:mb-2">
                        {skill.technologies.map((technology: Technology) => (
                            <PillsComponent key={`${skill.title}-${technology.name}`} index={`${skill.title}-${technology.name}`}>
                                <p className="flex justify-center items-center gap-1 text-lg font-semibold">
                                    <img className='w-5 h-5' alt={`${technology.name} Logo`} src={technology.icon} />
                                    <span>{technology.name}</span>
                                </p>
                            </PillsComponent>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
