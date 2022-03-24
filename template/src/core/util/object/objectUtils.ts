/**
 * Checks the given value if the value is object and not an array or null.
 * @param {unknown} x The value to check.
 * @returns {boolean} Returns `true` if `value` is an object and not an array or null, else returns `false`.
 * @example
 *
 * isRecord({})
 * // => true
 *
 * isRecord({a: "1"})
 * // => true
 *
 * isRecord(new Foo);
 * // => true
 *
 * isRecord([1, 2, 3])
 * // => false
 *
 * isRecord(Function)
 * // => false
 *
 * isRecord(null)
 * // => false
 */
function isRecord(x: unknown): x is Record<string, any> {
  return typeof x === "object" && Boolean(x) && !Array.isArray(x);
}

export {isRecord};
