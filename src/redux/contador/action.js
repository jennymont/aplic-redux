
export function incrementCounter(){
        return {
            type: 'INCREMENT'
        }
    }

export function decrementCounter(){
    return {
        type: 'DECREMENT'
    }
}
export function stepChanged (e){
    return{
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}