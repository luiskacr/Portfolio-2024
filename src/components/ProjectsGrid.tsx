import { useState } from 'react';
import { PROJECTS } from '../constants/projects'
import { ProjectGridProps, Projects, Pills } from '../interfaces';
import { PillsComponent }  from './PillsComponent';
import { ProjectModal } from './ProjectModal';
import { TranslateText } from './TranslateText';
import { FilterProjects } from './FilterProjects';
import { MainButton } from './MainButton';


export const ProjectGrid: React.FC<ProjectGridProps> = ({ max , filter }) => {
    const PROJECTS_SHOW = max === undefined ? PROJECTS :  PROJECTS.slice(0, max);
    const uniquePillTitles: Set<string> = new Set();
    const [projects, setProjects] = useState(PROJECTS_SHOW);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

    const handleProjectClick = (project: Projects) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    PROJECTS.forEach((project) => {
        project.pills.forEach((pill) => uniquePillTitles.add(pill.title ?? ''));
    });

    const filterValues: string[] = Array.from(uniquePillTitles);

    const filterProjects = (type: string, value: string) => {
        if (type === 'check') {

            setProjects(value === '' ? PROJECTS_SHOW : PROJECTS.filter((project) => {
                return project.pills.some((pill: Pills) => pill.title === value);
            }))
        } else {
            const searchText = value.toLowerCase();
            setProjects(PROJECTS_SHOW.filter((project) => {
    
            const projectTitle = project.title.toLowerCase();
            if (projectTitle.includes(searchText)) {
                return true;
            }

            return project.pills.some((pill: Pills) => pill.title.toLowerCase().includes(searchText));
        }));
        }
    };

    return (
        <div className="">
            {filter && <FilterProjects filterProjects={filterProjects} filterValues={filterValues} />}
            {showModal && selectedProject && (<ProjectModal project={selectedProject} onClose={handleCloseModal}/> )}
            
            {projects.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 pt-16">
                No se encontraron proyectos.
            </div>
            ) : (
            <div className={`${filter ? 'pt-8' : 'pt-16'} w-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4`}>
                {projects.map((project: Projects, index: number) => (
                    <div key={index} id={index.toString()} onClick={() => handleProjectClick(project)}
                        className="col-span-1 rounded-xl border border-gray-700 shadow dark:bg-gray-800/30 relative " >
                        <div className="m-auto p-4 mb-4">
                            {
                                project.images[0].type === 'video' 
                                ?  <video className="w-90 h-70 aspect-[4/3] rounded-lg  dark:shadow-lg dark:shadow-gray-800 border-2 dark:border-yonder-blue-300/10" style={{objectFit:'cover'}} poster={project.images[0].alt} autoPlay muted loop >
                                    <source src={project.images[0].url} type="video/mp4"/>
                                </video> 
                                : <img className='w-90 h-70 aspect-[4/3] rounded-lg  dark:shadow-lg dark:shadow-gray-800 border-2 dark:border-yonder-blue-300/10' src={project.images[0].url} alt={project.images[0].alt} />
                            }
                           
                        </div>
                        <div className="text-center">
                            <h3 className="p-8 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        </div>
                        <div className="m-4 flex flex-wrap justify-center gap-2 items-center text-xs h-auto lg:h-[100px] xl:h-[110px]" >
                            {project.pills.map((pills: Pills, key: number) => (
                                pills.title !== undefined || pills.title !== '' ? (
                                    <PillsComponent key={`${project.title}-${pills.title}-${key}`} index={`${project.title}-${pills.title}-${key}`}>
                                        <span>{pills.title}</span>
                                    </PillsComponent>
                                ) : null
                            ))}
                        </div>
                        <div className="my-3 md:mt-4 text-md leading-relaxed dark:text-gray-400 mb-20">
                            <p className='p-4 text-ellipsis  w-full max-h-fit break-normal '>
                                <TranslateText text={project.description} />
                            </p>
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mb-4 ">
                            <MainButton>
                                <TranslateText text="show_more" />
                            </MainButton>                
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>    
    );
};
