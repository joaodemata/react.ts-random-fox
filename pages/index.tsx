import Head from "next/head";
import type { MouseEventHandler } from "react";
import {  useState } from "react";
import { random } from 'lodash';
import { LazyImage } from "@/components/random_fox"

// Generate a random number between 1 and 123
// const random = () : Number => Math.floor(Math.random() * 123) + 1;
const myRandom = () => random(1, 123);

// Generate simple unique id
const generateId = () => Math.random().toString(36).substring(2, 9);
// Esta referenciado en app.d.ts
// type ImageItem = {id: string, url: string};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox : MouseEventHandler<HTMLButtonElement> = (event) => {
    
    const newImageItem : ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`
    };

    setImages([
      ...images,
      newImageItem
    ]);

    window.plausible('add_fox');
  };

  return (

    <div>
      <Head>
        <title>RandomFox</title>
        <meta name="description" content="generated by randomFox"/>
        <link rel="icon" href="../public/favicon.ico"/>
        <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.hash.js"></script>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button onClick={(event) => addNewFox(event)}>Add new fox</button>

        {images.map((_imageItem) => (
          <div key={_imageItem.id} className="p-4">
            <LazyImage src={_imageItem.url} width={320} height='auto' className='rounded bg-gray-300' onClick={()=> {console.log('hey');}}/>
          </div>
        ))}

      </main>

      <footer>

      </footer>
    </div>
  )
}
