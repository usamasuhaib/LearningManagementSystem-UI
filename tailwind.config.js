/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Add custom scrollbar styles here
      scrollbar: {
        'thin': '8px',
        'rounded': '4px',
        'track-color': 'rgba(255, 255, 255, 0.1)',
        'thumb-color': 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
        // Require the plugin for custom scrollbar
        require('tailwind-scrollbar'),
  ],
}

