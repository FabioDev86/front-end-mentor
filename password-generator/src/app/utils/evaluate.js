import zxcvbn from "zxcvbn";

export default function evaluate(password) {
    const result = zxcvbn(password);
    if(password.length < 1) return "";
    else if( result.score < 2) return "Weak";
    else if(result.score < 4) return"Medium";
    else return "Strong";
}

       