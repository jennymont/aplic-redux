
export function incrementCounter(valorIncrement){
        return {
            type: 'INCREMENT',
            valorCampo: valorIncrement
        }
    }

export function decrementCounter(valorDecrement){
    return {
        type: 'DECREMENT',
        valorCampo: valorDecrement
    }
}
