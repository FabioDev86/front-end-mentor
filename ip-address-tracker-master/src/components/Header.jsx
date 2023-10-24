'use client'

import check_valid_ip from '@/util/check_valid_ip';
import Image from 'next/image'
import { useState } from 'react';
import { useIp } from '@/util/IpContext';

export default function Header(){
    const [ip, setIp] = useState();
    const {setIp_address} = useIp();
    const [valid, setValid] = useState(false);
    const [focus, setFocus] = useState(false);

    function handleChange(event){
        if(check_valid_ip(event.target.value)){
            setValid(true);
        }
        else{
            setValid(false);
        }
        setIp(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        if(valid) setIp_address(ip);            
    }

    return(
        <div className='flex flex-col items-center gap-10 p-[4rem] max-[660px]:px-[1rem]'> 
            <h1 className="text-white text-3xl font-bol">IP Address Tracker</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>                
                <div className='flex'>
                    <input id="ip_address" onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}} onChange={handleChange} placeholder="Search for any IP address or domain" className={'rounded-l-lg p-3 w-[60vw] focus:outline-none ' + (valid ? '' : 'focus:bg-red-400 focus:placeholder-gray-800')}></input>
                    <button className='bg-black py-3 px-5 rounded-r-lg' type='submit'>
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

