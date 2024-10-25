"use client";
// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { localesFallback, themesFallback } from ">_/configuration";
// Hooks --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// Types --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import type { ChangeEventHandler } from "react";
import type TSwitch from ">_/types/TSwitch";
import type { TPosition, TValue, TSwitchDebug } from ">_/types/TSwitch";
// Validators ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { isObjectEmpty } from ">_/utilities/validators";
// Switch ----------------------------------------------------------------------------------------------------------------------------------------------------- [ ACTION COMPONENT ]
const Switch = (props: TSwitch): React.JSX.Element => {
    const { defaultValue, disabled, id, icons, localeSwitcher, name, role, themeSwitcher, values } = props;
    // Hooks --------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const locale: string = useLocale();
    const pathname: string = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    // States -------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const [ value, setValue ] = useState<TValue | boolean>((themeSwitcher) ? theme || themesFallback : ((localeSwitcher) ? locale || localesFallback : defaultValue || false));
    // Handlers ------------------------------------------------------------------------------------------------------------------------------------------------------ [ COMPONENT ]
    const handleChange: ChangeEventHandler = (event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const { checked } = target;
        const selected: TValue | boolean = (checked) ? values[`right`] : values[`left`];
        setValue(selected);
        if(themeSwitcher) return setTheme(selected.toString());
    };
    // Effects ------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    useEffect(() => (localeSwitcher) ? router.push(pathname.replace(`/${ locale }`, `/${ value || localesFallback }`)) : undefined, [ value ]);
    // JSX Properties ------------------------------------------------------------------------------------------------------------------------------------------------ [ COMPONENT ]
    const position: TPosition = (value == values[`right`]) ? `right` : `left`;
    const inputProperties = { checked: position == `right`, defaultValue, disabled, id, name, onChange: handleChange, role, type: `checkbox` };
    // Debugs -------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const debug: TSwitchDebug = { checked: position == `right`, position, theme: value.toString() };
    // console.log(debug);
    // JSX ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    return <label className="switch" htmlFor={ id }>
        <input className="checkbox" { ...inputProperties }/>
        <span className="icon" data-position={ position }>
            { (!isObjectEmpty("icons")) ? <i className={ `fa-solid fa-${ icons[position] }` }/> : null }
        </span>
    </label>;
};
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default Switch;