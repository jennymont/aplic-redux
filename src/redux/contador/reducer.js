/* eslint-disable import/no-anonymous-default-export */

// eslint-disable-next-line no-unused-vars
const initial_state = {
     value: 0,
     step: 1
}


export default function (state = initial_state, action){
    switch(action.type){
        case 'INCREMENT': 
            return{
                ...state,
                value: state.value + state.step
            }
        case 'DECREMENT':
            return{
               ...state,
                value: state.value - state.step
            }
        case 'STEP_CHANGED':
            return{
                ...state,
                step: +action.payload
            }

        default:
            return state;

    }    
}