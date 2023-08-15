import { useRef } from 'react';

type Props = {image: string};

export const RandomFox = ({ image }: Props) : JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    
    return <img ref={node} width={320} height='auto' src={image} className='rounded'/>
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