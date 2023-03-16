/**
 * Create a generic function which returns the number of products per insurance type for Aviva (based on the /all-products page).
 *
 * | Insurance Type                | Number of Products |
 * | Motor                         | 12                 |
 * | Home                          | 7                  |
 * | More                          | 10                 |
 * | Life cover                    | 8                  |
 * | Health Insurance & Protection | 12                 |
 * | Investments                   | 11                 |
 * | Retirement                    | 13                 |
 */

type InsuranceProduct =
  | 'motor'
  | 'home'
  | 'more'
  | 'lifeCover'
  | 'healthInsuranceAndProtection'
  | 'investments'
  | 'retirement';

// These will be in the keys in the final object

type InsuranceTypeProductsAmount = {
  [key in InsuranceProduct]: number;
};

const insuranceProducts: InsuranceTypeProductsAmount = {
  motor: 12,
  // add the missing properties to get rid of the error
};

// Hint: The function should have two parameters both of which should be generic
// See the TypeScript page (https://www.typescriptlang.org/docs/handbook/2/generics.html) for more info
