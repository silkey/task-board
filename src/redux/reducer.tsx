import { combineReducers, Reducer, Action } from "redux"
import { StoreType } from "./store"
import { ActionType } from "./action"

type CommonReducer = Reducer<StoreType | undefined, Action<ActionType>>

const reducerA: CommonReducer = (state, action) => {
    return state
}

export const rootReducer = combineReducers(reducerA)
