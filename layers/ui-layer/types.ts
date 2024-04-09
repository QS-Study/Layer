
export type ColorKey = "" | "-light-3" | "-light-5" | "-light-7" | "-light-8" | "-light-9" | "-dark-2" | "-rgb"

export interface ColorPalette {
    ['']?: string
    ['-light-3']?: string
    ['-light-5']?: string
    ['-light-7']?: string
    ['-light-8']?: string
    ['-light-9']?: string
    ['-dark-2']?: string
    ['-rgb']?: string
}

export interface ThemePalette {
    primary?: ColorPalette
    secondary?: ColorPalette
}

export type ColorLevel = keyof ThemePalette