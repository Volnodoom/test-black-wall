import { defaultTheme } from "themes/default-theme"

export type DefaultThemeParametersType = {
  [P in keyof typeof defaultTheme]: typeof defaultTheme[P]
}

export type ThemeParametersType = {
  theme: DefaultThemeParametersType,
}

export type ButtonProps = {
  $back?: string,
  $color?: string,
  $size?: string,
  $padding?: string,
  $radius?: string,
  $border?: string,
  disabled?: boolean,
}

export type DataColumnType = {
  $width?: number;
}

export type CardContentWrapperType = {
  $isComment?: boolean;
}
