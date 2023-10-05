import Image from 'next/image'
export default function Header(){
    return(
        <div className='flex flex-col items-center gap-10 p-10'> 
            <h1 className="text-white text-3xl font-bold	">IP Address Tracker</h1>
            <div className='flex justify-center'>
                <input placeholder="Search for any IP address or domain" className='rounded-l-lg p-3 w-[30rem]'></input>
                <button className='bg-black py-3 px-5 rounded-r-lg'>
                        <Image
                            src="/icon-arrow.svg"
                            width={10}
                            height={10}
                            alt="Arrow"
                        />
                </button>
            </div>
        </div>
    );
}

