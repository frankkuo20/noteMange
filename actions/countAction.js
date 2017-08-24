import { ADD_COUNT, SUB_COUNT } from '../constants/actionTypes'


export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}

export const subCount = () => {
    return {
        type: SUB_COUNT
    }
    
}