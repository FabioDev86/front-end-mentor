'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Header(){
    const [ip, setIp] = useState();

    const [valid, setValid] = useState(false);
    const [focus, setFocus] = useState(false);

    return(
        <div className='flex flex-col items-center gap-10 p-10'> 
            <h1 className="text-white text-3xl font-bol">IP Address Tracker</h1>
            <form className='flex flex-col'>                
                <div className='flex'>
                    <input id="ip_address" onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}} onChange={(e) => {setIp(e.target.value)}} placeholder="Search for any IP address or domain" className={'rounded-l-lg p-3 w-[30rem] focus:outline-none ' + (valid ? '' : 'focus:bg-red-400 focus:placeholder-gray-800')}></input>
                    <button className='bg-black py-3 px-5 rounded-r-lg'>
                        <Image
                            src="/icon-arrow.svg"
                            width={10}
                            height={10}
                            alt="Arrow"
                        />
                    </button>                    
                </div>
                <label htmlFor='ip_address' className={valid ? 'invisible' : focus ? 'text-red-600' : 'invisible'}>Insert a valid IP address</label>                
            </form>
        </div>
    );
}

