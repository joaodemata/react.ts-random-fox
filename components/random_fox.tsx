import type { FunctionComponent, FC } from 'react';

//Implicito
// export const RandomFox = () => {
//     return <img />
// }

type Props = {image: string};

export const RandomFox = ({ image }: Props) : JSX.Element => {

    return <img width={320} height='auto' src={image} className='rounded'/>
}

// Declarar utilizando los tipos de la libreria

// export const RandomFox: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox: FC = () => {
//     return <img />
// }