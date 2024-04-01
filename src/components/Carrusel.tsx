import { CarruselProps } from "../interfaces";
import { useState } from "react";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";


export const Carrusel:React.FC<CarruselProps> = ({ images })  => {

    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(images.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === images.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
          <div className={`flex transition ease-out duration-40`} style={{transform: `translateX(-${current * 100}%)`}}>
            {
                images.map((image, index:number) => {
                    return <img key={index} className="h-auto w-3/4 mx-auto aspect-[4/3] rounded-lg" src={image.url} alt={image.alt} />;
                })
            }
          </div>
    
          <div className="absolute top-0 h-full w-full justify-between items-center flex  px-10 text-3xl">
            <button type="button" onClick={previousSlide} disabled={images.length === 1} 
                className={`${images.length === 1 ? 'text-gray-500' : 'text-white'}`} >
              <BsFillArrowLeftCircleFill /> 
            </button>
            <button type="button" onClick={nextSlide} disabled={images.length === 1} 
                className={`${images.length === 1 ? 'text-gray-500' : 'text-white'}`} >
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {images.map((_image, i) => {
              return (
                <div onClick={() => { setCurrent(i);}} key={"circle" + i}
                   className={`rounded-full w-5 h-5 cursor-pointer  ${ i == current ? "bg-white" : "bg-gray-500"}`}>  
                </div>
              );
            })}
          </div>
        </div>
      );
}