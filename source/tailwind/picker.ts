import switchComponent from "./components/switch";
import settingsButtonComponent from "./components/buttons/settings";
import settingsMenuComponent from "./components/menus/settings";

const componentPicker = (name: string, theme: any) => {
    switch(name) {
        case `switch` :
            return switchComponent(theme);
        case `settingsButton` :
            return settingsButtonComponent(theme);
        case `settingsMenu` :
            return settingsMenuComponent(theme);
    };
};

export default componentPicker;