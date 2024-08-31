"use client";
// Hooks --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// Styles -------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import SwitchStyles from ">_/actions/switch/component.module.css";
// Types --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import type { ChangeEventHandler } from "react";
import type TSwitch from ">_/types/TSwitch";
import type { TSwitchDebug } from ">_/types/TSwitch";
import type TTheme from ">_/types/TTheme";
// Validators ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { isTheme } from ">_/validators/custom";
import { isObjectEmpty } from ">_/validators/default";
// Switch ----------------------------------------------------------------------------------------------------------------------------------------------------- [ ACTION COMPONENT ]
const Switch = ({ checked, disabled, icons, id, name, role, values }: TSwitch): React.JSX.Element => {
    // Hooks --------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const { theme, setTheme } = useTheme();
    // States -------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const [ position, setPosition ] = useState<`left` | `right`>((checked) ? `right` : `left`);
    // Properties ---------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const { left, right } = values;
    checked = (isTheme(left) && isTheme(right)) ? theme == right : checked;
    // Handlers ------------------------------------------------------------------------------------------------------------------------------------------------------ [ COMPONENT ]
    const handleChange: ChangeEventHandler = (event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const selectedPosition: `left` | `right` = (target.checked) ? `right` : `left`;
        setPosition(selectedPosition);
        if(isTheme(left) && isTheme(right)) return setTheme(values[selectedPosition] as TTheme);
    };
    // Effects ------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    useEffect(() => (isTheme(left) && isTheme(right)) ? setPosition(((checked) ? `right` : `left`)) : undefined, [ theme ]);
    // Debugs -------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const debug: TSwitchDebug = { checked, position: (checked) ? `right` : `left`, theme };
    // console.log(debug);
    // JSX Properties ------------------------------------------------------------------------------------------------------------------------------------------------ [ COMPONENT ]
    const inputProperties = { checked, disabled, id, name, onChange: handleChange, role, type: `checkbox` };
    // JSX ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    return <label className={ SwitchStyles.container } htmlFor={ id }>
        <input { ...inputProperties }/>
        <span className={ SwitchStyles.icon } data-position={ position }>
            { (!isObjectEmpty(icons)) ? <i className={ `fa-solid fa-${ icons[position] }` }/> : null }
        </span>
    </label>;
};
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export default Switch;