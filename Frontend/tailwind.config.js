// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include your project source files
    './node_modules/flowbite-react/lib/esm/**/*.js', // Include flowbite-react components
  ],
  theme: {
    extend: {
      // Extend or customize Tailwind CSS theme here
    },
  },
  plugins: [
    // Include required Tailwind CSS plugins here
    require('flowbite/plugin'), // Assuming this is the correct way to include flowbite plugin
  ],
};
