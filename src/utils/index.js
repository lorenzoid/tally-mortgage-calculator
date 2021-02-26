export const calculateMonthlyPayment = (principal, rate, period) => {
  const poarsedPrincipal = parseFloat(principal);
  const interest = parseFloat(rate) / 100 / 12;
  const payments = parseFloat(period) * 12;

  // compute the monthly payment figure
  // eslint-disable-next-line no-restricted-properties
  const x = Math.pow(1 + interest, payments); // Math.pow computes powers
  return ((poarsedPrincipal * x * interest) / (x - 1)).toFixed(2);
};

export const formatToCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
