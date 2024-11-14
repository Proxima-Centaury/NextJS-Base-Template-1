/** @type {import('tailwindcss').Config} */
const settingsButtonComponent = (theme: any) => {
    return {
        ".settingsButton": {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            width: `20px`,
            height: theme(`height.full`),
            marginLeft: `auto`,
            border: `${ theme(`borderWidth.2`) } solid ${ theme(`colors.light1`) }`,
            backgroundColor: theme(`colors.light2`),
            transition: `border-color 0.3s ease, background-color 0.3s ease`,
            "&:hover": {
                color: theme(`colors.light5`),
                borderColor: theme(`colors.information1`),
                backgroundColor: theme(`colors.information2`)
            },
            ".dark &": {
                borderColor: theme(`colors.dark1`),
                backgroundColor: theme(`colors.dark2`),
                "&:hover": {
                    borderColor: theme(`colors.information3`),
                    backgroundColor: theme(`colors.information4`)
                }
            }
        }
    };
};

export default settingsButtonComponent;