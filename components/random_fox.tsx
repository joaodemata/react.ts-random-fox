import type { FunctionComponent, FC } from 'react';

//Implicito
// export const RandomFox = () => {
//     return <img />
// }

// Generate a random number between 1 and 123
const random = () : Number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = () : JSX.Element => {
    const image: string = `https://randomfox.ca/images/${random()}.jpg`
    return <img width={320} height='auto' src={image} className='rounded'/>
}

// Declarar utilizando los tipos de la libreria

// export const RandomFox: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox: FC = () => {
//     return <img />
// }