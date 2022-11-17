import React, {useState} from 'react';

import SquarsComponent from "./component";

const Squares = () => {

    const [number, setNumber] = useState('0')

    const minus =() => {

        setNumber(number-1)
    }

    const plus =() => {

        setNumber(Number(number)+1)
    }

    return(

        <SquarsComponent
            number = {number}
            minus = {minus}
            plus = {plus}
        />
    )
    
}

export default Squares;