import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 flex min-h-screen items-center justify-center bg-lightgray text-center">
      {/* Ho cambiato max-w-30 in max-w-[320px] per un controllo preciso.
          'w-full' assicura che sia responsivo su schermi molto piccoli.
      */}
      <div className="w-full max-w-[320px] rounded-[20px] p-4 flex flex-col items-center justify-center bg-white text-center shadow-lg">
        
        {/* L'immagine ora ha un rounded per seguire lo stile della card */}
        <div className="relative w-full aspect-square mb-6">
          <Image 
            src="/image-qr-code.png" 
            alt="QR Code"
            fill // Questo fa sì che l'immagine riempia il suo contenitore 'relative'
            className="rounded-[10px] object-contain"
            priority
          />
        </div>

        {/* Spaziatura interna per il testo */}
        <div className="px-2 pb-4">
          <h1 className="text-darkblue font-bold text-xl mb-3 leading-tight">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-lightgray dark:text-gray-400 text-[15px] leading-snug">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
        
      </div>
    </main>
  );
}