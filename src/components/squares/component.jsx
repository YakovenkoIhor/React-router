import React from "react";

import './styles.scss';

import SquarComponent from "./square/component";

const SquarsComponent = ({number, minus, plus}) => (

    <div className='squares'>
        
        <SquarComponent
            number = {number}
            minus = {minus}
            plus = {plus}
        />
    </div>
)

export default SquarsComponent;
