/**
 * Checks whether the input param is an object in the sense that
 * most consumers understand. The function is intended to return for
 * all structures that resemble `{}` while returning false for other
 * object-like entities in js, such as null and arrays.
 * @param item unknown item to be checked
 * @returns boolean, true if the input param is an object
 */
export function isObject(item: unknown): boolean {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
