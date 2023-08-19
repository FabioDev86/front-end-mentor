import Slider from "./generator/Slider";
import Checkboxes from "./generator/Checkboxes";
import Strength from "./generator/Strength";

export default function Generator(){
    return(
        <div>
            <Slider />
            <Checkboxes />
            <Strength />
            <button>Generate</button>
        </div>
    );
}