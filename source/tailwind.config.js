// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                ".switch": {
                    display: "flex",
                    alignItems: "center",
                    width: theme("width.switch"),
                    height: theme("height.switch"),
                    border: `${ theme("borderWidth.2") } solid ${ theme("colors.light2") }`,
                    borderRadius: theme("borderRadius.radius10"),
                    backgroundColor: theme("colors.light3"),
                    transition: "border-color 0.3s ease, background-color 0.3s ease",
                    ".dark &": {
                        border: `${ theme("borderWidth.2") } solid ${ theme("colors.dark2") }`,
                        backgroundColor: theme("colors.dark3")
                    },
                    ".checkbox": {
                        display: "none"
                    },
                    ".icon": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: theme("width.switchIcon"),
                        height: theme("height.switchIcon"),
                        fontSize: theme("fontSize.12"),
                        border: `${ theme("borderWidth.2") } solid ${ theme("colors.light2") }`,
                        borderRadius: theme("borderRadius.radius10"),
                        backgroundColor: theme("colors.light3"),
                        transform: "translateX(-2px)",
                        transition: "border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                        ".dark &": {
                            border: `${ theme("borderWidth.2") } solid ${ theme("colors.dark2") }`,
                            backgroundColor: theme("colors.dark3")
                        },
                    },
                    "& [data-position='right']": {
                        transform: "translateX(calc(100% - 2px))",
                    }
                }
            })
        }
    ],
    theme: {
        extend: {
            borderRadius: {
                radius5: "5px",
                radius5child: "3px",
                radius10: "10px",
                radius10child: "8px",
                radius15: "15px",
                radius15child: "13px",
                radius20: "20px",
                radius20child: "18px"
            },
            borderWidth: {
                "1": "1px",
                "2": "2px",
                "3": "3px",
                "4": "4px",
                "5": "5px"
            },
            boxShadow: {
                default: "0px 0px 10px #00000090",
                hover: "0px 0px 10px #00000090"
            },
            colors: {
                accent1: "#EFD9AA",
                accent2: "#BA9C65",
                accent3: "#9A6B32",
                accent4: "#55391C",
                darkBlur: "#1F1F2090",
                dark1: "#1F1F20",
                dark2: "#242425",
                dark3: "#2A2A2A",
                dark4: "#2F2F30",
                dark5: "#343435",
                error1: "#FF8E8E",
                error2: "#E46363",
                error3: "#B63838",
                error4: "#720C0C",
                information1: "#8EDBFF",
                information2: "#4FAAD4",
                information3: "#1783B4",
                information4: "#00496B",
                lightBlur: "#F8F8F890",
                light1: "#F8F8F8",
                light2: "#F0F0F0",
                light3: "#E8E8E8",
                light4: "#E0E0E0",
                light5: "#D8D8D8",
                success1: "#8EFFBD",
                success2: "#5AD88F",
                success3: "#2BA55E",
                success4: "#0D7A3A"
            },
            dropShadow: {
                default: "0px 0px 5px #00000090",
                hover: "0px 0px 10px #00000090"
            },
            fontSize: {
                "10": "0.625rem",
                "12": "0.75rem",
                "14": "0.875rem",
                "16": "1rem",
                "18": "1.125rem",
                "20": "1.25rem",
                "22": "1.375rem",
                "24": "1.5rem",
                "26": "1.625rem",
                "28": "1.75rem",
                "30": "1.875rem",
                "32": "2rem",
                "34": "2.125rem",
                "36": "2.25rem",
                "38": "2.375rem",
                "40": "2.5rem"
            },
            height: {
                bar: "50px",
                switch: "10px",
                switchIcon: "20px"
            },
            spacing: {
                "10": "0.625rem",
                "20": "1.25rem",
                "30": "1.875rem",
                "40": "2.5rem",
                "50": "3.125rem"
            },
            translate: {
                minus2: "-2px",
                minusFull: "-100%",
                plus2: "2px",
                plusFull: "100%",
            },
            width: {
                bar: "50px",
                switch: "40px",
                switchIcon: "20px"
            }
        }
    }
};