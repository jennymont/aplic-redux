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
                value: state.value + action.valorCampo
            }
        case 'DECREMENT':
            return{
               ...state,
                value: state.value - action.valorCampo
            }

        default:
            return state;

    }    
}