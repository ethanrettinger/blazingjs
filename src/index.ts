// import tailwind colors
const colors: any = {
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
};
document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        // get #info-preview
        // add the tailwind color 'red' class

        const preview = document.getElementById('info-preview') as HTMLElement;

        // get the data-color of the hovered item
        const color = item.getAttribute('data-color') || 'red';

        preview.style.borderColor = colors[color] || colors['red'];
    });
});
