
import React, { useMemo } from 'react'; 

export const CounterValue = ({value}) => {
    const getResult = useMemo(() => {
        return value === 5 ? 'Это 5 :)' : 'Это не 5 :('
    }, [value])
    return <h2>{getResult}</h2>
}