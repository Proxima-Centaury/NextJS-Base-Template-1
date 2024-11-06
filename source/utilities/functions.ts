/**
 * @ `dsc` - Converts {@link locale} to an understandable `string` for `flag-icons` package
 * @ `arg` - Argument {@link locale} is of `string` type
 * @ `rtn` - Returns a `string`
 */
const localeToFlag = (locale: string): string => locale.split(`-`)[1].toLocaleLowerCase();

export { localeToFlag };