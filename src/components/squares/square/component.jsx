import React from "react";

import NumberComponent from "./number/component";
import PlusComponent from "./plus/component";
import MinusComponent from "./minus/component";

const SquarComponent = ({number, minus, plus}) => (

    <div className='square'>

            <NumberComponent 
                number = {number}
            />

            <PlusComponent
                plus = {plus}
            />

            <MinusComponent
                minus = {minus}
            />
    </div>
)

export default SquarComponent;
