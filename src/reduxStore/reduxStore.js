import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'


const storeData = localStorage.getItem("proveit")? JSON.parse(localStorage.getItem("proveit")):{};

export default function storeConfig (){
    const saver = (store) => next => action => {
        const result = next(action)
        console.log("result", result)
        const storeDetail = store.getState()

        localStorage.setItem("proveit", JSON.stringify(storeDetail))

    }
    return createStore(rootReducer,storeData, compose(applyMiddleware(...[thunk, saver])))
}
