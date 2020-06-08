import * as R from "ramda"

export const emptyThen = (v: any, alt: any) => R.isEmpty(v) ? alt : v