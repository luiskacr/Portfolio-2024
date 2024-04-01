import { ReactTyped } from "react-typed";
import { TranslateText } from "./TranslateText";
import { GrDocumentDownload } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import Avatar from "../assets/avatar.webp"
import { Badge } from "./Badge";
import { MainButton } from "./MainButton";
import { useTranslation } from "react-i18next";


export const Hero = () => {
    const { t } = useTranslation();
    
    const words = [t('software_dev'), t('tpm'), t('bi')];

    return <article className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="mx-auto lx:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
                <div className="order-2 md:order-none">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ">
                        <TranslateText text="hello" /> Luis Carlos
                    </h1>
                    <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-4">
                        <ReactTyped strings={words}  backSpeed={40} typeSpeed={100} loop />
                    </h2>
                    <Badge>
                        <TranslateText text="available" />
                    </Badge>
                    <p className="my-3 md:mt-4 text-xl leading-relaxed dark:text-gray-400 ">
                        <TranslateText text="aboutMe" />
                    </p>
                    <div className="mb-20 mt-3 md:mt-4 flex flex-col items-center lg:block">
                        <MainButton onClick={() => console.log('Button clicked')}>
                            <GrDocumentDownload style={{marginRight:'0.4rem'}} />
                            <TranslateText text="resume" />
                        </MainButton>
                        <MainButton href="https://www.linkedin.com/in/luiskacr/" target="_blank">
                            <ImLinkedin /> 
                            <span>LinkedIn</span>
                        </MainButton>
                    </div>
                </div>
                <div className="flex justify-center items-center order-1 md:order-none mb-8">
                    <img className="m-4 rounded-full h-[300px] lg:h-[400px] xl:h-[450px] w-[300px] lg:w-[400px] xl:w-[450px]
                    dark:shadow-lg dark:shadow-gray-800 border-2 border-yonder-blue-300/10" 
                    src={Avatar} alt="avatar" />
                </div>
            </div>
        </div>
    </article>
};