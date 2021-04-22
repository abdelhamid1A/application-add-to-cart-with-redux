import{createStore,applyMiddleware,compose,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import cartReducer from './reducers/index'
import throttle from 'lodash.throttle'
import { composeWithDevTools } from 'redux-devtools-extension';

function loadState() {
    const state = localStorage.getItem('cart');
    if(state !== null){
        return JSON.parse(state)
    }
    return {
        cart : []
    }
}
function saveState(state){
    console.log('state changed');
    localStorage.setItem('cart',JSON.stringify(state))
}
// const initialState = {
    
//     };

// function reducer(state){
//     return state
// }
const appReducerd = combineReducers({
    cart:cartReducer,
})
const store = createStore(appReducerd,loadState(),compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
store.subscribe(throttle(()=>{
    saveState(store.getState())
}),2000)


export default store