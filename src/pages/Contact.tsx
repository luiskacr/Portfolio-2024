import { IoMdContact } from "react-icons/io"
import { TranslateText } from "../components/TranslateText"

export const Contact = () => {
    return <>
        <section className="pt-10 ">
            <header className="flex items-center justify-center text-3xl mb-4">
                <IoMdContact />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-3"> 
                    <TranslateText text="contact"/>
                </h2>
            </header>
            <div className="mb-20">
    
            </div>
        </section>
    </>
}