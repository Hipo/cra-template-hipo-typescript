/**
 * Checks the given value if the value is object and not an array or null.
 * @param {unknown} x The value to check.
 * @returns {boolean} Returns `true` if `value` is an object and not an array or null, else returns `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject({a: "1"})
 * // => true
 *
 * isObject(new Foo);
 * // => true
 *
 * isObject([1, 2, 3])
 * // => false
 *
 * isObject(Function)
 * // => false
 *
 * isObject(null)
 * // => false
 */
 function isObject(x: unknown): x is Record<string, any> {
    return typeof x === "object" && Boolean(x) && !Array.isArray(x);
  }
  
  export {isObject};