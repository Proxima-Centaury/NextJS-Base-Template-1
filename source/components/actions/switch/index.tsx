"use client";

import { isObjectEmpty } from ">_/utilities/validators";
import { localesFallback, themesFallback } from ">_/configuration";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { ChangeEventHandler, InputHTMLAttributes } from "react";
import type { TPosition, TValue } from ">_/types/TSwitch";
import type TSwitch from ">_/types/TSwitch";

const Switch = (props: TSwitch): React.JSX.Element => {
    const { defaultValue, disabled, icons, id, localeSwitcher, name, role, themeSwitcher, values } = props;

    const locale: string = useLocale();
    const pathname: string = usePathname();
    const router: AppRouterInstance = useRouter();
    const { theme, setTheme } = useTheme();

    const [ value, setValue ] = useState<TValue | boolean>((themeSwitcher) ? theme || themesFallback : ((localeSwitcher) ? locale || localesFallback : defaultValue || false));

    const handleChange: ChangeEventHandler = (event) => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const { checked } = target;
        const selected: TValue | boolean = (checked) ? values[`right`] : values[`left`];
        setValue(selected);
        if(themeSwitcher) return setTheme(selected.toString());
    };

    useEffect(() => (localeSwitcher) ? router.push(pathname.replace(`/${ locale }`, `/${ value || localesFallback }`)) : undefined, [ value ]);

    const position: TPosition = (value == values[`right`]) ? `right` : `left`;
    const inputProps: InputHTMLAttributes<HTMLInputElement> = { checked: position == `right`, defaultValue, disabled, id, name, onChange: handleChange, role, type: `checkbox` };

    return <label className="switch" htmlFor={ id }>
        <input className="checkbox" { ...inputProps }/>
        <span className="icon" data-position={ position }>
            { (!isObjectEmpty("icons")) ? <i className={ `fa-solid fa-${ icons[position] }` }/> : null }
        </span>
    </label>;
};

export default Switch;