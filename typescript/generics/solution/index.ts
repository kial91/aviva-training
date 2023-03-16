/**
 *
 * @param insuranceType of type T
 * @param property of type K
 * @returns the number of products for the insurance type
 */

function getNumberOfProductsForInsuranceType<T, K extends keyof T>(
  insuranceProducts: T,
  property: K
): T[K] {
  return insuranceProducts[property];
}
