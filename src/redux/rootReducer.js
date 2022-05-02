import {combineReducers} from 'redux'
import counterReducer from './contador/reducer'

const rootReducer = combineReducers({
    contador: counterReducer
})

export default rootReducer