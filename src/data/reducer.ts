import { ActionType, ThemeAction } from "./action"
import { initState, StoreType } from "./store"

const themeReducer = (state: StoreType = initState, action: ThemeAction) => {
    const s = action.type === ActionType.changeTheme ? { theme: action.theme } : state
    return s
}

export const rootReducer = themeReducer
