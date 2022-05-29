import React from 'react'
import {IState} from "./Counter"
import css from './CounterDisplay.module.scss'

export default function CounterDisplay({count}:IState) {
    let cssValue = css.value;
    
    if (count < 0) {
        cssValue += " " + css.negative;
    }

    return (
        <div className={css.counterDisplay}>
            <div className={css.label}>Current value:</div>
            <div className={cssValue} >{count}</div> 
        </div>
    )
}