const switchComponent = (theme: any) => {
    return {
        ".switch": {
            display: `flex`,
            alignItems: `center`,
            width: theme(`width.switch`),
            height: theme(`height.switch`),
            cursor: `pointer`,
            border: `${ theme(`borderWidth.2`) } solid ${ theme(`colors.light4`) }`,
            borderRadius: theme(`borderRadius.radius10`),
            backgroundColor: theme(`colors.light5`),
            transition: `border-color 0.3s ease, background-color 0.3s ease`,
            "&:hover": {
                borderColor: theme(`colors.information1`),
                backgroundColor: theme(`colors.information2`),
                "> .icon": {
                    color: theme(`colors.light5`),
                    borderColor: theme(`colors.information1`),
                    backgroundColor: theme(`colors.information2`)
                }
            },
            ".dark &": {
                borderColor: theme(`colors.dark4`),
                backgroundColor: theme(`colors.dark5`),
                "&:hover": {
                    borderColor: theme(`colors.information3`),
                    backgroundColor: theme(`colors.information4`),
                    "> .icon": {
                        borderColor: theme(`colors.information3`),
                        backgroundColor: theme(`colors.information4`)
                    }
                }
            },
            "> .checkbox": {
                display: `none`
            },
            "> .icon": {
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                width: theme(`width.switchIcon`),
                height: theme(`height.switchIcon`),
                fontSize: theme(`fontSize.10`),
                border: `${ theme(`borderWidth.2`) } solid ${ theme(`colors.light4`) }`,
                borderRadius: theme(`borderRadius.radius10`),
                backgroundColor: theme(`colors.light5`),
                transform: `translateX(-2px)`,
                transition: `color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease`,
                ".dark &": {
                    borderColor: theme(`colors.dark4`),
                    backgroundColor: theme(`colors.dark5`)
                }
            },
            "& [data-position='right']": {
                transform: `translateX(calc(100% - 2px))`
            }
        }
    };
};

export default switchComponent;