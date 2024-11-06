import { locales, themes } from ">_/configuration";

/**
 * @ `purpose` - Checks if {@link element} is an `array`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isArray = (element: unknown): element is Array<any> => typeof element == `object` && Array.isArray(element);
/**
 * @ `purpose` - Checks if {@link element} is an empty `array`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isArrayEmpty = (element: unknown): boolean => isArray(element) && element.length <= 0;
/**
 * @ `purpose` - Checks if {@link element} is a `boolean`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isBoolean = (element: unknown): element is Boolean => typeof element == `boolean`;
/**
 * @ `purpose` - Checks if {@link element} is an `instance` of `FormData`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isFormData = (element: unknown): element is FormData => element instanceof FormData;
/**
 * @ `purpose` - Checks if {@link element} is a `function`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isFunction = (element: unknown): element is Function => typeof element == `function`;
/**
 * @ `purpose` - Checks if {@link element} is `null`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isNull = (element: unknown): element is null => element === null;
/**
 * @ `purpose` - Checks if {@link element} is a `number`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isNumber = (element: unknown): element is number => typeof element == `number`;
/**
 * @ `purpose` - Checks if {@link element} is an `object`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isObject = (element: unknown): element is Object => typeof element == `object` && !Array.isArray(element);
/**
 * @ `purpose` - Checks if {@link element} is an empty `object`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isObjectEmpty = (element: unknown): boolean => isObject(element) && Object.keys(element).length <= 0;
/**
 * @ `purpose` - Checks if {@link element} is a `string`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isString = (element: unknown): element is string => typeof element == `string`;
/**
 * @ `purpose` - Checks if {@link element} is an empty `string`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if {@link element} is empty, `false` otherwise
 */
const isStringEmpty = (element: unknown): boolean => isString(element) && element.length <= 0;
/**
 * @ `purpose` - Checks if {@link element} is a supported `locale` or `theme`
 * @ `param` - Parameter {@link type} is of `string` type, should be `locale` or `theme`
 * @ `param` - Parameter {@link element} is of `any` type
 * @ `return` - Returns `true` if {@link element} is supported, `false` otherwise
 */
const isSupported = (type: `locale` | `theme`, element: any): boolean => (type == `locale` && locales.includes(element)) || (type == `theme` && themes.includes(element));
/**
 * @ `purpose` - Checks if {@link element} is `undefined`
 * @ `param` - Parameter {@link element} is of `unknown` type
 * @ `return` - Returns `true` if type is conform, `false` otherwise
 */
const isUndefined = (element: unknown): element is undefined => element === undefined;

export { isArray, isArrayEmpty, isBoolean, isFormData, isFunction, isNull, isNumber, isObject, isObjectEmpty, isString, isStringEmpty, isSupported, isUndefined };