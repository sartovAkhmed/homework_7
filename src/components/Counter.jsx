import React, { useRef, useState } from 'react'; 
import { CounterValue } from './CounterValue';

export const Counter = React.memo(() => {
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [value, setValue] = useState(0)
    const handlerAdedNumber = React.useCallback(() => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1])
    }, [numbers])
    return (
        <div>
            <ul>
                {numbers.map((number) => (
                    <li>{number}</li>
                ))}
            </ul>
            <button onClick={handlerAdedNumber}>Aded number</button>
            <CounterValue value={value}/>
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
        </div>
    )
})