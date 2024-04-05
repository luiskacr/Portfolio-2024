import { ReactTyped } from "react-typed";
import { TranslateText } from "./TranslateText";
import { GrDocumentDownload } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { MainButton } from "./MainButton";
import { useTranslation } from "react-i18next";
import { FaGithubSquare } from "react-icons/fa";
import  openToWork  from "../assets/openToWork.webp";


export const Hero = () => {
    const currentLanguage = useTranslation().i18n.language;
    console.log(currentLanguage);
    const { t } = useTranslation();
    const words = [t('software_dev'), t('tpm'), t('bi')];

    const downloadPdf = () => {
        const pdfUrl =  currentLanguage === 'es' 
            ? "./pdf/CV_ES.pdf" 
            : "./pdf/CV_EN.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = t('file');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return <article className="overflow-hidden pt-16">
        <div className="mx-auto px-4 lx:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-none mt-12 md:mt-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap items-center gap-4">
                        <TranslateText text="hello" />
                        <p className="animate-tada" 
                            style={{animationIterationCount:'infinite', animationDuration:'3000ms', animationDelay:'6000ms' }}>
                            👋
                        </p>
                        <TranslateText text="i_am" />
                        <span className=" text-yonder-blue-600 dark:text-yonder-blue-300 dark:drop-shadow-[0_1.2px_3px_rgba(0,0,0,1)]">Luis Carlos</span>
                    </h1>
                    <h2 className="text-yonder-blue-600 dark:text-white text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-4 lg:my-4">
                        <ReactTyped strings={words}  backSpeed={40} typeSpeed={100} loop />
                    </h2>
                    <p className="my-6 md:mt-4 text-xl leading-relaxed dark:text-gray-400 ">
                        <TranslateText text="aboutMe" />
                    </p>
                    <div className="mb-20 mt-3 md:mt-4  p-4 flex flex-col items-center justify-center lg:block">
                        <MainButton onClick={() => downloadPdf()}>
                            <GrDocumentDownload style={{marginRight:'0.4rem'}} />
                            <TranslateText text="resume" />
                        </MainButton>
                        <MainButton href="https://www.linkedin.com/in/luiskacr/" target="_blank">
                            <ImLinkedin /> 
                            <span>LinkedIn</span>
                        </MainButton>
                        <MainButton href="https://github.com/luiskacr" target="_blank">
                            <FaGithubSquare />
                            <span>GitHub</span>
                        </MainButton>
                    </div>
                </div>
                <div className="flex justify-center items-center order-1 lg:order-none m-auto">
                    <img className="m-4 rounded-full h-[300px] lg:h-[400px] xl:h-[400px] w-[300px] lg:w-[400px] xl:w-[400px]
                    shadow-lg shadow-gray-800 dark:border-2 dark:border-yonder-blue-300/10" 
                    src={openToWork} alt="avatar" />
                </div>
            </div>
        </div>
    </article>
};