import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4D03F] flex items-center justify-center p-6">
      {/* Questa è la nostra Card */}
      <article className="bg-white p-6 rounded-2xl border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-[384px]">
        
        {/* Immagine Principale ottimizzata */}
        <div className="rounded-xl overflow-hidden mb-6">
          <Image 
            src="/illustration-article.svg" 
            alt="HTML & CSS foundations" 
            width={336} // Dimensioni basate sul design
            height={200}
            className="w-full h-auto"
            priority // Carica subito questa immagine essendo sopra la piega
          />
        </div>

        {/* Contenuto Testuale */}
        <div className="flex flex-col gap-3">
          <span className="bg-[#F4D03F] font-extrabold py-1 px-3 rounded text-sm w-fit">
            Learning
          </span>
          
          <p className="text-sm font-medium">Published 21 Dec 2023</p>
          
          <h1 className="text-2xl font-extrabold hover:text-[#F4D03F] cursor-pointer transition-colors">
            HTML & CSS foundations
          </h1>
          
          <p className="text-gray-500 leading-relaxed">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>

        {/* Footer con Avatar ottimizzato */}
        <div className="flex items-center gap-3 mt-6">
          <Image 
            src="/image-avatar.webp" 
            alt="Greg Hooper" 
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-extrabold text-[14px]">Greg Hooper</span>
        </div>

      </article>
    </main>
  );
}
