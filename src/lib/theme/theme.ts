import merge from "lodash.merge";

import { ThemableButtonOptions } from "../components/Button/Button";

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ThemableColors {
  primary?: ColorPalette;
  dark?: ColorPalette;
  neutral?: ColorPalette;
  success?: ColorPalette;
  info?: ColorPalette;
  warning?: ColorPalette;
  danger?: ColorPalette;
}

export interface ThemableComponents {
  Button?: ThemableButtonOptions;
}

export interface Theme {
  colors?: ThemableColors;
  components?: ThemableComponents;
}

export type SemanticColor = keyof ThemableColors;

export type SemanticSize = "xs" | "sm" | "md" | "lg" | "xl";

const defaultColors: Required<ThemableColors> = {
  primary: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  dark: {
    50: "#c1c2c5",
    100: "#a6a7ab",
    200: "#909296",
    300: "#5c5f66",
    400: "#373a40",
    500: "#2c2e33",
    600: "#25262b",
    700: "#1a1b1e",
    800: "#141517",
    900: "#101113",
  },
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  info: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  danger: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
};

export const defaultTheme: Theme = {
  colors: defaultColors,
};

export function extendTheme(themeOverride: Theme): Theme {
  return merge(defaultTheme, themeOverride);
}

export function addColorCSSVariablesToStyleSheet(colors: ThemableColors = defaultColors) {
  const sheet = document.styleSheets[0];

  const rules: string[] = [];

  for (const [colorKey, colorValue] of Object.entries(colors)) {
    for (const [key, value] of Object.entries(colorValue as ColorPalette)) {
      // Push all css variables in the array
      rules.push(`--hope-color-${colorKey}-${key}:${value}`);
    }
  }

  // Add all rules from the array separated by a `;`
  sheet.insertRule(`:root {${rules.join(";")}}`, 0);
}
