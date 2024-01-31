'use client'


import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { ArrowLeftToLine } from "lucide-react";
import { ArrowRightToLine } from "lucide-react"
import { PauseCircle } from "lucide-react"
import { useRef } from "react";
import { useState } from "react";
export default function Home() {

  const audio = useRef(null)
  const [valores, Setvalores] = useState(0)
  function Iniciar() {

    if (audio.current.paused) {

      audio.current.play();
      Setvalores(1)
    } else {

      audio.current.pause();
      Setvalores(0)
    }

  }
  return (
    <main className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center gap-4">
       
        <Image
          src="/mau.jpg"
          width={300}
          height={300}
          alt="Livro mau comeco" />
        
        <audio 
        ref={audio} 
        src={'/cap1.mp3'} />
         <p>Capitulo 1</p>
        <div 
        
        className="mb-32  flex justify-center items-center gap-3">

        <ArrowLeftToLine 
        size={35}
         />
         
          <button onClick={Iniciar}>
            {valores === 0 ? <PlayCircle size={35} /> : <PauseCircle size={35} />}
          </button>

        <ArrowRightToLine size={35} />
        </div>
      
      </div>

    </main>
  );
}
