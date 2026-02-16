/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                white: '#ffffff',
                gray: {
                    primary: '#ffffff',
                    secondary: '#888888', // Adjust as needed based on design
                }
            },
            borderRadius: {
                'card': '12px',
                'button': '8px',
            },
            spacing: {
                'unit': '4px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                // We will likely use framer-motion for complex animations, 
                // but can add simple ones here if needed.
            }
        },
    },
    plugins: [],
}
