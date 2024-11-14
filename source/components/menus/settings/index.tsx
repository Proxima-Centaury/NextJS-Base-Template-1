"use client";

import { localeToFlag } from ">_/utilities/functions";
import { localesFallback } from ">_/configuration";
import { useTranslations } from "next-intl";
import Switch from ">_/actions/switch";
import type TSetting from ">_/types/TSetting";
import type TSettingsMenu from ">_/types/TSettingsMenu";
import type TSwitch from ">_/types/TSwitch";

const SettingsMenu = (props: TSettingsMenu): React.JSX.Element => {
    const { expanded, locale } = props;

    const translateAriaLabel = useTranslations(`Z8 - Aria Labels`);
    const translateCommon = useTranslations(`Z9 - Common`);

    const localeSwitchIcons: TSwitch[`icons`] = { left: `earth-americas`, right: `earth-europe` };
    const localeSwitchValues: TSwitch[`icons`] = { left: `en-US`, right: `fr-FR` };
    const themeSwitchIcons: TSwitch[`icons`] = { left: `sun`, right: `moon` };
    const themeSwitchValues: TSwitch[`icons`] = { left: `light`, right: `dark` };

    return <nav aria-label={ translateAriaLabel(`settingsMenu`) } aria-hidden={ !expanded } className="settingsMenu" id="settingsMenu">
        <label>{ translateAriaLabel(`settingsMenu`) }</label>
        <div className="flex flex-col gap-10 p-10">
            <Setting label={ translateCommon(`selectedLocale`) }>
                <span className={ `fi fi-${ localeToFlag(locale || localesFallback) }` }/>
            </Setting>
            <Setting label={ translateCommon(`language`) }>
                <Switch icons={ localeSwitchIcons } id="locale" name="locale" role="switch" localeSwitcher values={ localeSwitchValues }/>
            </Setting>
            <Setting label={ translateCommon(`theme`) }>
                <Switch icons={ themeSwitchIcons } id="theme" name="theme" role="switch" themeSwitcher values={ themeSwitchValues }/>
            </Setting>
        </div>
    </nav>;
};

const Setting = (props: TSetting): React.JSX.Element => {
    const { children, label } = props;

    return <div className="flex justify-between items-center">
        <label>{ label } :</label>
        { children }
    </div>;
};

export default SettingsMenu;