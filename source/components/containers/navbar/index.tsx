"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Fragment } from "react";
import SettingsMenu from ">_/components/menus/settings";
import type { MouseEventHandler } from "react";
import type TNavbar from ">_/types/TNavbar";

const Navbar = (props: TNavbar): React.JSX.Element => {

    const { locale } = props;

    const translateAriaLabel = useTranslations(`Z8 - Aria Label`);

    const [ menuStates, setMenuStates ] = useState<any>({ settings: { expanded: false } });

    const handleSettingsMenu: MouseEventHandler = () => setMenuStates((previous: any) => { return { ...previous, settings: { expanded: !menuStates.settings.expanded } } });

    return <Fragment>
        <nav aria-label={ translateAriaLabel(`navbar`) } className="flex w-full h-bar">
            <button aria-controls="settingsMenu" aria-expanded={ menuStates.settings.expanded } className="settingsButton" id="settingsButton" onClick={ handleSettingsMenu }>
                <i className="fa-solid fa-ellipsis-vertical"/>
            </button>
        </nav>
        <SettingsMenu expanded={ menuStates.settings.expanded } locale={ locale }/>
    </Fragment>;
    
};

export default Navbar;