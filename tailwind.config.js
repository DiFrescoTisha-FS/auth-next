/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
        pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '4': 'repeat(4, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    }
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}