import React,{useState} from "react";
import CounterDisplay from "./CounterDisplay";
import css from './Counter.module.scss'

export interface IState {
    count: number;
};

export default function Counter() {
    const [count, setCounter] = useState(0);

    const increment = (): any => {
        setCounter(count+1);  
    };
      
    const decrement = (): any => {
        setCounter(count-1);
    };

    const reset = (): any => {
        setCounter(0);
    }

    return (
        <div className={css.container}>
            <button className={css.counterButton} onClick={decrement}>-</button>
            <CounterDisplay count={count} />
            <button className={css.counterButton} onClick={increment}>+</button>

            <button className={css.counterButton + " " + css.reset} onClick={reset}> Reset</button>
        </div>
    )
}