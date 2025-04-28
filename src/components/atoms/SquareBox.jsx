import { useState, useEffect } from "react"

export default function SquareBox(props) {

    const [clicked, setclicked] = useState(false);

    const [propnumber, setpropnumber] = useState(props.number)

    let number = propnumber;

    if (props.number !== propnumber) {
        if(clicked)
        {
            number = propnumber
        }
        if(!clicked){
            setpropnumber(props.number)
        }        
    }

    if (!clicked && props.number !== null) {
        number = props.number
    }
    function onClick(event) {
        setclicked(prev => !prev)
    }
    return (
        <>
            <button
                className={clicked ? "number-box number-box-filled" : "number-box"}
                id={props.id}
                onClick={onClick}
            >{number}</button>
        </>
    )
}