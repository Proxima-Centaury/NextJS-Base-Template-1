// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an `array`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isArray = (element: unknown): element is Array<any> => typeof element == `object` && Array.isArray(element);
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an empty `array`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isArrayEmpty = (element: unknown): boolean => isArray(element) && element.length <= 0;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is a `boolean`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isBoolean = (element: unknown): element is Boolean => typeof element == `boolean`;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an `instance` of `FormData`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isFormData = (element: unknown): element is FormData => element instanceof FormData;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is a `function`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isFunction = (element: unknown): element is Function => typeof element == `function`;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is `null`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isNull = (element: unknown): element is null => element === null;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is a `number`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isNumber = (element: unknown): element is number => typeof element == `number`;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an `object`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isObject = (element: unknown): element is Object => typeof element == `object` && !Array.isArray(element);
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an empty `object`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isObjectEmpty = (element: unknown): boolean => isObject(element) && Object.keys(element).length <= 0;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is a `string`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isString = (element: unknown): element is string => typeof element == `string`;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is an empty `string`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isStringEmpty = (element: unknown): boolean => isString(element) && element.length <= 0;
// Validator ------------------------------------------------------------------------------------------------------------------------------------------------------ [ DECLARATIONS ]
/**
 * @ `dsc` - Checks if {@link element} is `undefined`
 * @ `arg` - Argument {@link element} is of `unknown` type
 * @ `rtn` - Returns `true` if type is conform, `false` otherwise
 */
const isUndefined = (element: unknown): element is undefined => element === undefined;
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export {
    isArray,
    isArrayEmpty,
    isBoolean,
    isFormData,
    isFunction,
    isNull,
    isNumber,
    isObject,
    isObjectEmpty,
    isString,
    isStringEmpty,
    isUndefined
};