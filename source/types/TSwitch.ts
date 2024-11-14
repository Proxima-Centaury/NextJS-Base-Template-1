type TPosition = `left` | `right`;
type TValue =  number | string;

type TSwitch = {
    defaultValue?: TValue,
    disabled?: boolean,
    icons: { left: string, right: string },
    id: string,
    localeSwitcher?: boolean,
    name: string,
    role?: string,
    themeSwitcher?: boolean,
    values: { left: TValue | false, right: TValue | true }
};

export default TSwitch;
export type { TPosition, TValue };