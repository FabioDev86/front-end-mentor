import Checkbox from "@/utility-components/Checkbox";

export default function TaskAdder(){
    return(
        <div className="flex justify-start bg-white dark:bg-slate-800 px-5 py-3 gap-3 rounded-lg">
            <Checkbox />
            <p className="dark:text-slate-600">Create a new to do...</p>
        </div>
    );
}