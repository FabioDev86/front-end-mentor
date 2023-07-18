import Image from 'next/image';

export default function Score(props){
    return(
        <div>
            <Image src={props.ico} alt="icon" width={20} height={20}/>
            <p>{props.cat}</p>
            <p>{props.sco}</p>
        </div>
    )
}