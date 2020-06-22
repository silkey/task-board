import { InputAdornment, TextField } from "@material-ui/core"
import SearchSharpIcon from "@material-ui/icons/SearchSharp"
import React from "react"

export type SearchFieldProps = {}
export const SearchField = (p: SearchFieldProps) => {
    return (
        <div>
            <TextField
                // variant="filled"
                placeholder="search..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchSharpIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}
