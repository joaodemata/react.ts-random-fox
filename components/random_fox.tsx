import { useRef, useEffect, useState, use } from 'react';

type Props = {image: string};

export const RandomFox = ({ image }: Props) : JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(()=>{
        // Nuevo observador 
        const observer = new window.IntersectionObserver((entries)=>{
            // OnIntersection => console.log
        entries.forEach(_entry => {
            if(_entry.isIntersecting){
                console.log('Hey you');
                setSrc(image)
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
    }, [image])

  
    // Desconectar
    return <img ref={node} width={320} height='auto' src={src} className='rounded bg-gray-300'/>
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