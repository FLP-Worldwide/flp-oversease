import tailwindPostcss from '@tailwindcss/postcss';

export default {
  plugins: [
    tailwindPostcss(),
    require('autoprefixer'),
  ],
};
