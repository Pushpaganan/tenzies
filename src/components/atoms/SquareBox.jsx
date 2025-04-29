import { useState, useEffect } from "react"

export default function SquareBox(props) {

    const [clicked, setclicked] = useState(false);

    const [propnumber, setpropnumber] = useState(props.number)

    let number = propnumber;

    if (props.number !== propnumber) {
        if (clicked) {
            number = propnumber
        }
        if (!clicked) {
            setpropnumber(props.number)
        }
    }

    if (!clicked && props.number !== null) {
        number = props.number
    }

    function getClickedValue() {
        const clickedElements = document.querySelectorAll('[data-isclicked="true"]');
        let clickedNumber = clickedElements.length > 0 ? clickedElements[0].textContent : 'None-Clicked';
        return clickedNumber
    }

    function onClick(event) {

        const clickedNumber = getClickedValue();        
        if (clickedNumber == 'None-Clicked' || clickedNumber == event.target.textContent || clicked) {
            setclicked(prev => !prev)
        }
        else{
            alert("You cannot select different numbers. Unselect and reselect")
        }

    }
    return (
        <>
            <button
                className={clicked ? "number-box number-box-filled" : "number-box"}
                id={props.id}
                onClick={onClick}
                data-isclicked={clicked}
            >{number}</button>
        </>
    )
}