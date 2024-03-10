/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                'main-bg': '#FAFAFA',
            },
            width: {
                'form-w-xs': '80vw',
                'form-w-sm': '50vw',
                'form-w-md': '38vw',
                'form-w-lg': '20vw',
                'form-w-xl': '20vw',
            },
        },
        colors: {
            primary: {
                light: '#DFC2F2',
                'light-hover': '#C28AE5',
                'light-active': '#A757D9',
                normal: '#6D18A5',
                'normal-hover': '#621695',
                'normal-active': '#571384',
                dark: '#52127C',
                'dark-hover': '#410E63',
                'dark-active': '#310B4A',
                darker: '#26083A',
            },
            secondary: {
                light: '#F5F4F5',
                'light-hover': '#DADADD',
                'light-active': '#C0BFC5',
                normal: '#A4A2AD',
                'normal-hover': '#94929C',
                'normal-active': '#83828A',
                dark: '#7B7A82',
                'dark-hover': '#626168',
                'dark-active': '#4A494E',
                darker: '#39393D',
            },
            success: {
                light: '#C2F2D5',
                'light-hover': '#8AE5AE',
                'light-active': '#57D98C',
                normal: '#01CC54',
                'normal-hover': '#01B84C',
                'normal-active': '#01A343',
                dark: '#01993F',
                'dark-hover': '#017A32',
                'dark-active': '#005C26',
                darker: '#00471D',
            },
            danger: {
                light: '#F2C1C4',
                'light-hover': '#E58A90',
                'light-active': '#D9575F',
                normal: '#EA212E',
                'normal-hover': '#D31E29',
                'normal-active': '#BB1A25',
                dark: '#B01923',
                'dark-hover': '#8C141C',
                'dark-active': '#690F15',
                darker: '#520C10',
            },
            warning: {
                light: '#F2E0C2',
                'light-hover': '#E5C28A',
                'light-active': '#D9A757',
                normal: '#F09602',
                'normal-hover': '#D88702',
                'normal-active': '#C07802',
                dark: '#B47102',
                'dark-hover': '#905A01',
                'dark-active': '#6C4401',
                darker: '#543501',
            },
        },
    },
    plugins: [],
}
