import { useRef, useEffect, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = {src: string};

type ImageNative= ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, ...imgProps }: Props) : JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(()=>{
        // Nuevo observador 
        const observer = new window.IntersectionObserver((entries)=>{
            // OnIntersection => console.log
        entries.forEach(_entry => {
            if(_entry.isIntersecting){
                console.log('Hey you');
                setCurrentSrc(src)
            }
        })
        });
        // Observer node 
        if(node.current){
            observer.observe(node.current);
        }

        return () => {
            observer.disconnect()
        }
    }, [src])

  
    // Desconectar
    return <img ref={node} src={currentSrc} {...imgProps}/>
}

// import type { FunctionComponent, FC } from 'react';

//Implicito
// export const RandomFox = () => {
//     return <img />
// }


// Declarar utilizando los tipos de la libreria

// export const RandomFox: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox: FC = () => {
//     return <img />
// }