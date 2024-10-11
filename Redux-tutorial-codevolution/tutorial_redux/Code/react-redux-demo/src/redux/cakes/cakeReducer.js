import { BUY_CAKE } from "./cakeTypes"

const intialState = {
    numOfCakes: 10
}

export const cakeReducer = (state=intialState, action) => {
    switch (action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state
    }
}