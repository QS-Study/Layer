import type { ColorLevel, ThemePalette, ColorPalette } from "../types";

const paletterToStyle = (Level: ColorLevel, palette: ColorPalette) => {
    if (palette) {
        return Object.keys(palette)
            .map((key) => {
                return `--el-color-${Level}${key}: ${palette[key as ColorKey]}`
            })
            .join(`;\r\n`)
    }

}

const individualPalette = (themePalette: ThemePalette) => {
    if (themePalette) {
        return Object.entries(themePalette).map(([key, value]) => {
            return paletterToStyle(key as ColorLevel, value)
        })
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const title = useAppConfig()?.myLayer?.title
    const thememode = useAppConfig()?.myLayer?.thememode
    const themename = useAppConfig()?.myLayer?.themename
    // const theme = useAppConfig()?.myLayer?.theme
    // const style = individualPalette(theme)

    if (themename) {
        useHead({
            // style: [{
            //     children: `:root { ${style} }`,
            // }],
            title: `${title}`,
            htmlAttrs: [{
                class: `${thememode} ${themename}`
            }]
        })
    }
})