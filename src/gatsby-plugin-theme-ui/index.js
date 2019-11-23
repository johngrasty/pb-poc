import { tailwind } from "@theme-ui/presets"
export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    header: {
      background: `text`,
    },
    navlink: {
      fontFamily: "sans",
      fontSize: 2,
      color: "background",
      textDecoration: "none",
      ":hover": {
        color: "primary",
      },
    },
  },
}
