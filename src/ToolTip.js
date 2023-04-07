import { useEffect, useRef } from 'react';
import './style/Tooltip.css'




const ToolTip = ({ position }) => {

    
    const spanRef = useRef()

    useEffect(() => {

         //top tooltip
        if (position === 'top') {
            spanRef.current.style.bottom = '120%';
            spanRef.current.style.left = '50%';
            spanRef.current.style.marginLeft = '-110px';     
        }

        //bottom tooltip
        if (position === 'bottom') {
            spanRef.current.style.top = '140%';
            spanRef.current.style.left = '50%';
            spanRef.current.style.marginLeft = '-110px';
           
        }

        //left tooltip
        if (position === 'left') {
            spanRef.current.style.top = '12%';
            spanRef.current.style.right = '110%';
        }

        //right tooltip
        if (position === 'right') {
            spanRef.current.style.top = '18%';
            spanRef.current.style.left = '110%';
        }



    }, [position])

    return (

        <div className="tooltip"> <div class = "main-text">Hover over me!</div> 
            <span ref={spanRef} className="tooltiptext">Thanks for hovering. I am ToolTip</span>
        </div>
    )

}

export default ToolTip;