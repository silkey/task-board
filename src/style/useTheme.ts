import { createMuiTheme } from "@material-ui/core"
import { StoreType, Theme } from "data/store"
import { useSelector } from "react-redux"
import { themeSelector } from "./mui-theme"

export const useCurrentTheme = () => {
  const theme = useSelector<StoreType, Theme>(s => s.theme)
  return createMuiTheme(themeSelector(theme))
}