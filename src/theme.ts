import { createSystem, defaultConfig } from "@chakra-ui/react"

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
          500: { value: "#F4F0EB" },
          600: { value: "#E0D5C7" },
          700: { value: "#CCBAA3" },
          800: { value: "#B89F7E" },
          900: { value: "#A4835A" },
          950: { value: "#927550" },
        },
      },
      fonts: {
        body: { value: "Inter Variable, system-ui, sans-serif" },
        heading: { value: "Inter Variable, system-ui, sans-serif" },
      },
    },
  },
})