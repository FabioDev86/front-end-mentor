import Image from 'next/image'
export default function Header(){
    return(
        <div className='flex flex-col items-center'> 
            <h1 className="text-white">Ip Address Tracker</h1>
            <div className='flex justify-center'>
                <input placeholder="Search for any IP address or domain" className='p-3 w-[30rem]'></input>
                <button className='bg-black py-3 px-5 rounded-r-lg'><Image
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

