const formatCurrency = (amount: string, isShowingCurrency = false) => new Intl.NumberFormat('sv-SE', {
  style: isShowingCurrency ? 'currency' : 'decimal',
  currency: 'SEK',
  minimumFractionDigits: 0,
}).format(+amount);

export default formatCurrency;
