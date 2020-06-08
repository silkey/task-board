import { createStore } from "redux"
import { rootReducer } from "./reducer"

export type StoreType = {
    msgs: []
}

export const store = createStore(rootReducer)
