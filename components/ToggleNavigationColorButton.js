import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";


function ToggleNavigationColorButton(){
    const {color,toggleColor}=useContext(HeaderContext)
    return(
        <button onClick={()=>{
            color ==="nay"?toggleColor("yeah"):toggleColor("nay")
        }}>
            Toggle Navigation Color
        </button>
    )

}

export default ToggleNavigationColorButton