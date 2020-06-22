import { Theme } from "./store"

export enum ActionType {
    changeTheme = 'change_theme',
}

export type Action<Payload> = { type: ActionType } & Payload

export type ThemeAction = Action<{ theme: Theme }>