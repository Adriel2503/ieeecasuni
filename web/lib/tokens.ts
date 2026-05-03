// Color tokens — single source of truth for hex values used in JS/SVG.
// Mirrors the @theme palette in app/globals.css. Update both in sync.
export const colors = {
  primary: {
    50:  '#F0FAF6',
    100: '#CCE7DC',
    300: '#339F75',
    400: '#008752',
    500: '#006C42',
    600: '#005131',
  },
  secondary: {
    100: '#FDE6D3',
    200: '#FABC89',
    300: '#F79140',
    400: '#E26909',
    600: '#98460A',
    700: '#7F3C05',
  },
  tertiary: {
    100: '#FFF3D8',
    300: '#FFCA54',
    700: '#7C5600',
  },
  quaternary: {
    100: '#DFF7FE',
    300: '#1BC7F6',
    400: '#0792B9',
    700: '#03485B',
  },
  purple: {
    500: '#6B46C1',
  },
  gray: {
    50:  '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
  // Off-palette but referenced in JSX (HeroSection chip body).
  primaryTint: '#E8F5EF',
  primaryTintAlt: '#A7D4B9',
} as const
