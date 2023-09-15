import Checkbox from "@/utility-components/Checkbox";

export default function TaskAdder(){
    return(
        <div className="flex justify-start bg-white dark:bg-slate-800 px-5 py-3 gap-3 rounded-lg">
            <Checkbox />
            <input placeholder="Create a new to do..." className="focus:outline-none border-none text-slate-800 w-full dark:text-slate-400 dark:bg-slate-800 "/>
        </div>
    );
}