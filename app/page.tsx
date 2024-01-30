import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { ArrowLeftToLine } from "lucide-react";
import { ArrowRightToLine } from "lucide-react";
import { ThumbsUp } from "lucide-react";
export default function Home() {
  return (
   <main className="h-full w-full">
 <div className="h-full w-full flex flex-col justify-center items-center gap-4">
<Image
   src="/mau.jpg"
   width={300}
   height={300}
   alt="Livro mau comeco"/>
  
<div className="mb-32  flex justify-center items-center gap-3">
<button style={{ color: "#fff" }}>
      <ThumbsUp />
      Like
    </button>
<ArrowLeftToLine size={35}/>
<PlayCircle size={35}/>
<ArrowRightToLine size={35}/>
</div>
</div>

   </main>
  );
}
