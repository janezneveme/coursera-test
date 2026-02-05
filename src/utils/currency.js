const formatter = new Intl.NumberFormat('sl-SI', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

export function formatCurrency(value) {
  return formatter.format(Number(value || 0));
}

export function roundCurrency(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}
