import { useEffect, useRef } from "react";
import { Pills, ProjectModalProps } from "../interfaces";
import { Carrusel } from "./Carrusel";
import { MainButton } from "./MainButton";
import { PillsComponent } from "./PillsComponent";
import { TranslateText } from "./TranslateText";



export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    
    const ModalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            if (ModalRef.current && !ModalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [onClose, ModalRef]);


    return (
        <div id={project.title}  className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center 
            p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-black/70" >
            <div className="relative w-full max-w-4xl max-h-full rounded-lg border border-gray-700" ref={ModalRef}>
                <div className="relative bg-white rounded-lg shadow 
                    dark:bg-black dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_-5%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <button type="button" onClick={onClose}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <Carrusel images={project.images} />
                    </div>
                    <div  className="overflow-visible animate-area-vertical">
                        <div className="text-center mt-4">
                            <h3 className="p-4 text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">{project.title }</h3>       
                        </div>
                        <div className="mt-6 p-4 md:p-2 flex flex-wrap justify-center gap-2 items-center text-sm ">
                            {
                                project.pills.map((pills:Pills, i: number)=> (
                                    <PillsComponent key={i} index={i} >
                                        <span>{pills.title}</span>
                                    </PillsComponent>
                                )) 
                            }
                        </div>
                        <div className="my-3 md:mt-4 p-12 text-md leading-relaxed dark:text-gray-400 ">
                            <p className="p-4">
                                <TranslateText text={project.description} />
                            </p>
                            <p className="">
                                <TranslateText text={project.technical} />
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-4 m-auto space-x-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <MainButton onClick={onClose}>
                                <TranslateText text="close" />
                            </MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}