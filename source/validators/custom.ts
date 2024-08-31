// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { locales } from ">_/configuration";
import { themes } from ">_/configuration";
// Types --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import type TLocale from ">_/types/TLocale";
import type TTheme from ">_/types/TTheme";
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is a supported `locale`
 * @ `arg` - Argument {@link element} is of `any` type
 * @ `rtn` - Returns `true` if the `locale` is supported, `false` otherwise
 */
const isLocale = (element: any): element is TLocale => locales.includes(element);
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an `array`
 * @ `arg` - Argument {@link element} is of `any` type
 * @ `rtn` - Returns `true` if the `locale` is supported, `false` otherwise
 */
const isTheme = (element: any): element is TTheme => themes.includes(element);
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export { isLocale, isTheme };