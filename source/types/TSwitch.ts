// Type ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
type TSwitchDebug = { checked?: boolean, position: `left` | `right`, theme?: string };
// Type ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
type TSwitchValues = { left: number | string | true, right: number | string | false };
// Type ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
type TSwitch = {
    checked?: boolean,
    disabled?: boolean,
    icons: { left: string, right: string },
    id: string,
    isThemeSwitcher?: boolean,
    name: string,
    role?: string,
    values: TSwitchValues
};
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default TSwitch;
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export type { TSwitchDebug, TSwitchValues };