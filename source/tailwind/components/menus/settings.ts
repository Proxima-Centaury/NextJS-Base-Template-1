const settingsMenuComponent = (theme: any) => {
    return {
        ".settingsMenu": {
            display: `flex`,
            flexDirection: `column`,
            width: theme(`width.settings`),
            height: theme(`height.settings`),
            position: `fixed`,
            top: theme(`height.bar`),
            right: `0px`,
            transform: `translateX(${ theme(`width.settings`) })`,
            border: `${ theme(`borderWidth.2`) } solid ${ theme(`colors.light1`) }`,
            backgroundColor: theme(`colors.light2`),
            transition: `border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease`,
            "&[aria-hidden=false]": {
                transform: `translateX(0px)`,
            },
            ".dark &": {
                borderColor: theme(`colors.dark1`),
                backgroundColor: theme(`colors.dark2`),
            },
            "label": {
                fontSize: theme(`fontSize.14`)
            },
            "> label": {
                width: theme(`width.full`),
                height: `fit-content`,
                padding: theme(`spacing.10`),
                textTransform: `uppercase`,
                fontSize: theme(`fontSize.16`),
                color: theme(`colors.mute`),
                borderBottom: `${ theme(`borderWidth.2`) } solid ${ theme(`colors.light1`) }`,
                transition: `border-color 0.3s ease`,
                ".dark &": {
                    borderColor: theme(`colors.dark1`)
                }
            }
        }
    };
};

export default settingsMenuComponent;