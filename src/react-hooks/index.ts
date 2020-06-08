import { useState } from "react"

export const useNonEmptyState = <T>(defaultValue: T): [T, (v: T) => any] => {
    const [state, setState] = useState(defaultValue)
    return [state, (v: T) => v ? setState(v) : undefined]
}