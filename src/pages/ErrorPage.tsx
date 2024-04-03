

export const ErrorPage = () => {
    return <>
        <div className="flex justify-center  p-20  font-mono text-white" 
            style={{backgroundColor: '#71717a'}}>
            <div className="flex flex-col gap-12 justify-center items-center max-w-6xl">
                <h1 className="text-6xl  md:text-8xl font-bold drop-shadow-[0_1.2px_3px_rgba(0,0,0,1)] ">Page 404</h1>
                <h2 className="text-4xl  md:text-6xl font-semibold drop-shadow-[0_1.2px_3px_rgba(0,0,0,1)]">Not Found</h2>
                <img className="h-auto max-w-full" src="./meme.png"  alt="computer meme"/>
                <h3 className="text-6xl md:text-6xl text-center font-bold drop-shadow-[0_1.2px_3px_rgba(0,0,0,1)]">I Wasn't Looking for page 404</h3>  
                <a href="/" className="">
                    Go Home
                </a>
            </div>  
        </div>
    </>
}