import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEmail } from "@/components/EmailProvider";


export default function Confirmation(){
    const router = useRouter();
    const {email} = useEmail();
    const handler = () => {
        router.push("/");
    }
    return(
        <div>
            <Image
                src="/icon-success.svg"
                width={200}
                height={200}
                alt="Success illustration"
             />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={handler}>Dismiss message</button>
        </div>
    );
}