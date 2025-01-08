import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as ProductReducer} from "./RecipeList/reducer"
import {thunk} from  "redux-thunk"



let rootReducder=combineReducers({
    Product:ProductReducer
})

export let store = legacy_createStore(rootReducder, applyMiddleware(thunk));