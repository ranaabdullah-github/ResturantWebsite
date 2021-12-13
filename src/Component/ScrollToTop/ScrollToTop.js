import React,{useEffect,useState} from 'react'
import { useWindowScroll } from 'react-use';
import styleScroll from "./styleScroll.css";

export const ScrollToTop = () => {
    
    const {y: pageYOffset} =useWindowScroll();
    const [visible,setVisibility]=useState(false);
    useEffect(()=>{
        if(pageYOffset>400){
            setVisibility(true);
        }else{
            setVisibility(false);
        }

    },[pageYOffset]);
    const scrollToTp=() => window.scrollTo({top:0,behavior:"smooth"})
    
    if (!visible){
        return false;
    }
 
    return (
        // cursor-pointer text-center
        
        <div  className="ScrollToTop cursor-pointer text-center" onClick={scrollToTp}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}
