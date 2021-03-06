const breakpoints = {
  xs: "@media screen and (min-width: 768px)",
  sm: "@media screen and (min-width: 1024px)",
  md: "@media screen and (min-width: 1366px)",
  lg: "@media screen and (min-width: 1920px)",
}

const colors = {
  blacks: [`#09090b`, `#16171C`, `#262730`, `#373844`, `#373844`],
  blues: [`#362A89`, `#6D58FF`, `#5C86FF`],
  white: `#f0f0f0`,
}

colors.text = {
  heading: colors.white,
  primary: `#7e7f98`,
}

colors.blues.dark = colors.blues[0]
colors.blues.med = colors.blues[1]
colors.blues.light = colors.blues[2]

const fonts = {
  body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
  var: `'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
  mono: `SF Mono, source-code-pro, Menlo, Consolas, 'Courier New', Courier,
    monospace;`,
}

const fontSizes = [14, 16, 24, 32, 40, 56, 80]

const fontWeights = {
  bold: 700,
  semi: 600,
  medium: 500,
  regular: 400,
}

const space = [0, 8, 12, 16, 24, 32, 48, 64, 80]

const grid = {
  columns: `repeat(12, 1fr)`,
  gap: space[4],
  margins: space[8],
}

export default {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  grid,
}
