import Image from "next/image";

export default function Checkbox(props){
    console.log(props.ischecked);
    return(
        <div className={"w-[25px] h-[25px] shrink-0 border-2 rounded-[50%] pt-1 pl-1 dark:border-slate-700 " + (props.ischecked ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-sky-500" : "")} >            
            {props.ischecked ? <Image width={15} height={15} src="/icon-check.svg" /> : ""}
        </div>
    );
}