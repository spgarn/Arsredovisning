const formatCurrency = (amount: string | number, isShowingCurrency = false) =>
  new Intl.NumberFormat('sv-SE', {
    style: isShowingCurrency ? 'currency' : 'decimal',
    currency: 'SEK',
    minimumFractionDigits: 0,
  }).format(+amount);

const formatDate = (date: string) =>
  date
    ?.split('')
    .reduce(
      (acc: string, value: string, i: number) =>
        acc + (i === 3 || i === 5 ? `${value}-` : value),
      ''
    );

export { formatCurrency, formatDate };
