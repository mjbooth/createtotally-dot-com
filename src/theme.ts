import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brandFuchsia: {
          50: { value: "#F2CFEF" },
          100: { value: "#EDBFEA" },
          200: { value: "#E49FDF" },
          300: { value: "#DC7FD5" },
          400: { value: "#D35FCA" },
          500: { value: "#CA3FC0" },
          600: { value: "#A42D9B" },
          700: { value: "#782172" },
          800: { value: "#4C1548" },
          900: { value: "#20091E" },
          950: { value: "#0A0309" },
        },
        brandPurple: {
          50: { value: "#faf7fd" },
          100: { value: "#f3ebfc" },
          200: { value: "#e8dbf9" },
          300: { value: "#d7bff3" },
          400: { value: "#be96ea" },
          500: { value: "#a56ddf" },
          600: { value: "#853fca" },
          700: { value: "#793cb4" },
          800: { value: "#673594" },
          900: { value: "#542c77" },
          950: { value: "#381556" },
        },
        brandNeutral: {
          50: { value: "#FFFFFF" },
          100: { value: "#FFFFFF" },
          200: { value: "#FFFFFF" },
          300: { value: "#F8F5F2" },
          400: { value: "#F6F2EE" },
          500: { value: "#F4F0EB" },
          600: { value: "#E0D5C7" },
          700: { value: "#CCBAA3" },
          800: { value: "#B89F7E" },
          900: { value: "#A4835A" },
          950: { value: "#927550" },
        },
        brandNavy: {
          50: { value: "#FFFFFF" },
          100: { value: "#FFFFFF" },
          200: { value: "#FFFFFF" },
          300: { value: "#F8F5F2" },
          400: { value: "#F6F2EE" },
          500: { value: "#001E44" },
          600: { value: "#E0D5C7" },
          700: { value: "#CCBAA3" },
          800: { value: "#000A19" },
          900: { value: "#000A19" },
          950: { value: "#000A19" },
        },
      },
      fonts: {
        body: { value: "Inter Variable, system-ui, sans-serif" },
        heading: { value: "Inter Variable, system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brandFuchsia: {
          solid: { value: "{colors.brandFuchsia.500}" },
          contrast: { value: "{colors.brandNeutral.500}" },
          fg: { value: "{colors.brandFuchsia.700}" },
          muted: { value: "{colors.brandFuchsia.50}" },
          subtle: { value: "{colors.brandFuchsia.200}" },
          emphasized: { value: "{colors.brandFuchsia.300}" },
          focusRing: { value: "{colors.brandFuchsia.500}" },
        },
        brandPurple: {
          solid: { value: "{colors.brandPurple.600}" },
          contrast: { value: "{colors.brandPurple.50}" },
          fg: { value: "{colors.brandPurple.700}" },
          muted: { value: "{colors.brandPurple.100}" },
          subtle: { value: "{colors.brandPurple.200}" },
          emphasized: { value: "{colors.brandPurple.300}" },
          focusRing: { value: "{colors.brandPurple.500}" },
        },
      },
    },
  },
  globalCss: {
    "*::selection": {
      color: "#F4F0EB",
      backgroundColor: "rgba(202, 63, 192, 0.75)", // 50% transparent pink
    },
    "*::-moz-selection": {
      color: "#F4F0EB",
      backgroundColor: "rgba(202, 63, 192, 0.75)",
    },
    h1: {
      color: "brandNavy.500",
      fontSize: "4xl",
      fontWeight: "bold",
      textAlign: "left",
      lineHeight: "1",
      mb: "8"
    },
    h2: {
      color: "brandNavy.500",
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "1.2",
      mb: "8",
      mt: "16"
    },
    h3: {
      fontSize: { base: '2xl', md: '3xl' },
      fontWeight: 'semibold',
      mt: 10,
      mb: 4,
      lineHeight: 'short',
    },
    li: {
      fontSize: 'md',
      color: "brandNavy.500",
      mb: 2,
      pl: 2,
    },
    '.prose p': {
      fontSize: "lg",
      fontWeight: "regular",
      lineHeight: "150%",
      mb: "6",
    },
    '.prose ul': {
      fontSize: "lg",
      fontWeight: "regular",
      lineHeight: "1.5",
      mb: "6",
      listStyleType: 'disc',
      paddingLeft: 6,
      marginBottom: 4,
    },
    '.prose li': {
      fontSize: "lg",
      fontWeight: "regular",
      lineHeight: "1.5",
      mb: "6",
    },
    '.prose a': {
      color: 'brandFuchsia.500',
      fontWeight: 'medium',
      textDecoration: 'underline',
      _hover: {
        color: 'brandFuchsia.200',
        textDecoration: 'none',
      },
    },
    "*::marker": {
      color: "rgba(202, 63, 192, 1)",
    }
  }
});