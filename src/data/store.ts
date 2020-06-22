
export type Theme = "dark" | "light"
export type StoreType = {
    theme: Theme
}

export const initState: StoreType = {
    theme: "dark",
}

