/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                darkbg: '#141515',
                darknav: '#222323',
                red: '#F44A4A',
                orange: '#F4954A',
                yellow: '#EFE65C',
                green: '#7BF042',
                teal: '#42F0C3',
                cyan: '#4ACDE5',
                blue: '#4A80E5',
                purple: '#8A4AE5',
                magenta: '#D83CF2',
                pink: '#F188E4'
            }
        },
        fontFamily: {
            sans: ['articulat-cf', 'sans-serif']
        }
    },
    plugins: []
};
