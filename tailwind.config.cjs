/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#f3f3f3",
                secondary: "#28364c",
                gjcgreen: "#4a7200",
                dark: "#191919",
            },
            boxShadow: {
                card: "0px 10px 50px -15px #211e35",
            },
            screens: {
                xs: "450px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.jpg')",
            },
        },
    },
    plugins: [],
};
