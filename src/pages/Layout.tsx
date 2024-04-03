import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Layout = () => {
    return<>
        <div className="absolute top-0 z-[-2] w-screen bg-grey-50 dark:bg-[#0e0e11]
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(52,204,255,0.5),rgba(255,255,255,0.9))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(0,0,0,1))] ">
            <div id="animate-area" className="flex flex-col ">
                <Header/>
                    <main className="container mx-auto mt-32 px-8 dark:text-white">  
                        <Outlet />
                    </main>
                <Footer />
            </div>
        </div>
    </>
}