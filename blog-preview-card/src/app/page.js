import Image from 'next/image';

export default function Home() {
  return (
    // 1. IL CONTENITORE ESTERNO: Centra la card e imposta lo sfondo giallo
    <main className="min-h-screen bg-fm-yellow flex items-center justify-center p-6 font-figtree">
      
      {/* 2. LA CARD: Sfondo bianco, bordo nero e l'ombra "brutalista" che abbiamo creato */}
      <article className="bg-white p-6 rounded-[20px] border border-fm-black shadow-brutal max-w-[384px] flex flex-col gap-6">
        
        {/* 3. L'IMMAGINE DI TESTATA: Usiamo il componente Image di Next.js */}
        <div className="relative w-full rounded-[10px] overflow-hidden">
          <Image 
            src="/illustration-article.svg" 
            alt="Illustrazione articolo" 
            width={336} 
            height={200}
            className="w-full h-auto object-cover"
            priority 
          />
        </div>

        {/* 4. IL CONTENUTO TESTUALE: Organizzato in una colonna con spaziature precise */}
        <div className="flex flex-col gap-3">
          
          {/* Il Badge "Learning" */}
          <span className="bg-fm-yellow font-extrabold py-1 px-3 rounded-[4px] text-[14px] w-fit">
            Learning
          </span>
          
          {/* La Data */}
          <p className="text-[14px] font-medium text-fm-black">
            Published 21 Dec 2023
          </p>
          
          {/* Il Titolo con effetto hover */}
          <h1 className="text-2xl font-extrabold cursor-pointer hover:text-fm-yellow transition-colors duration-200">
            HTML & CSS foundations
          </h1>
          
          {/* La Descrizione */}
          <p className="text-fm-grey text-[16px] leading-relaxed font-medium">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>

        {/* 5. IL FOOTER: Foto dell'autore e nome */}
        <div className="flex items-center gap-3">
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