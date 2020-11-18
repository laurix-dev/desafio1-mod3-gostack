const formatValue = (value: number): string =>
  Intl.NumberFormat('BRL', {
    localeMatcher: 'best fit',
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
