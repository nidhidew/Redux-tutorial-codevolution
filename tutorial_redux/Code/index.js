// import redux from 'redux'
const redux = require('redux')
const createStore = redux.legacy_createStore
const combineReducer = redux.combineReducers
const applyMiddleware =  redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

//action is an object with type property and action creator is a function that returns an action

function buyCake(){
    return {
        type: BUY_CAKE,
    }
}
function buyIcecreams(){
    return {
        type: BUY_ICECREAMS,
    }
}
//(previousState, action) => newState

//for single reducer
// const initialState = {
//     numofCakes: 10,
//     numofIcecreams: 20
// }

//for multiple reducer
const initialCakeState = {
    numofCakes: 10
}

const initialIceCreamState = {
    numofIcecreams: 10
}

// const reducer = (state = initialState,action) =>{
//     switch(action.type) {
//         case BUY_CAKE:return{
//             ...state,
//             numofCakes: state.numofCakes - 1
//         }
//         case BUY_ICECREAMS:return{
//             ...state,
//             numofIcecreams: state.numofIcecreams - 1
//         }
//         default: return state
//     }
// }

const cakereducer = (state = initialCakeState,action) =>{
    switch(action.type) {
        case BUY_CAKE:return{
            ...state,
            numofCakes: state.numofCakes - 1
        }
        default: return state
    }
}

const icecreamreducer = (state = initialIceCreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAMS:return{
            ...state,
            numofIcecreams: state.numofIcecreams - 1
        }
        default: return state
    }
}

//redux store

const rootReducer = combineReducer({
    cake: cakereducer,
    icecream: icecreamreducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreams())
store.dispatch(buyIcecreams())
unsubscribe()