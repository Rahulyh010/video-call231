// colors: {
//   background: '#FFFFFF',
//   foreground: '#000000',
//   'card-primary': '#FFFFFF',
//   'card-primary-foreground': '#000000',
//   'card-secondary': '#FFFFFF',
//   'card-secondary-foreground': '#F2B804',
//   popover: '#FFFFFF',
//   'popover-foreground': '#424242',
//   primary: '#FFFFFF',
//   'primary-foreground': '#000000',
//   secondary: '#FFFFFF',
//   'secondary-foreground': '#424242',
//   muted: 'your-muted-color-hex',
//   'muted-foreground': '#9E9E9E',
//   accent: '#FFFFFF',
//   'accent-foreground': '#9E9E9E',
//   destructive: 'your-destructive-color-hex',
//   'destructive-foreground': 'text-on-destructive-background-hex',
//   border: '#000000',
//   input: '#FAFAFA',
//   success: '#FFFFFF',
//   'success-foreground': '#29CD39',
//   gradient1: {
//     start: '#FD2424',
//     end: '#F150FF',
//   },
//   gradient2: ['#7A2AD9', '#551ACC', '#4011C6'],
//   gradient3: ['#000000', '#394357'],
// },
// },
// },

// which u switch to dark mode, u should be able to change these values

module.exports = {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: {
        DEFAULT: '#FFFFFF',
        dark: '#484948',
      },
      foreground: {
        DEFAULT: '#000000',
        dark: '#FFFFFF',
      },
      primary: {
        DEFAULT: '#FFFFFF',
        foreground: '#FFFFFF',
        dark: '#141414',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: {height: '0'},
        to: {height: 'var(--radix-accordion-content-height)'},
      },
      'accordion-up': {
        from: {height: 'var(--radix-accordion-content-height)'},
        to: {height: '0'},
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    fontFamily: {
      inter: 'var(--font-inter)',
      alex: 'var(--font-alex)',
    },
  },
};
