import { maskJs, removeNonDigits } from 'mask-js';

export const handlePhoneMask = value => {
  return maskJs('(99) 99999-9999', value.replace(/[^0-9]/g, ''));
};

export const dateMask = value =>
  maskJs('99/99/9999', value.replace(/[^0-9]/g, ''));

export const cepMask = value =>
  maskJs('99999-999', value.replace(/[^0-9]/g, ''));

export const cpfMask = value =>
  maskJs('999.999.999-99', value.replace(/[^0-9]/g, ''));

export const cnpjMask = value =>
  maskJs('99.999.999/9999-99', value.replace(/[^0-9]/g, ''));

export const currencyMask = (value, decimalSeparator = ',') => {
  const thousandsSeparator = decimalSeparator === '.' ? ',' : '.';
  const cleanValue = removeNonDigits(value || Number(0).toFixed(2));
  const justDigits = parseInt(cleanValue || 0, 10).toString();

  if (justDigits.length === 2) return `0,${justDigits}`;
  if (justDigits === '0') return `0,${justDigits}0`;
  if (justDigits.length === 1) return `0,0${justDigits}`;

  const reversedArray = justDigits.split('').reverse();

  let result = '';
  reversedArray.forEach((char, index) => {
    if (index === 2) {
      result = decimalSeparator + result;
    } else if (index >= 5 && (index + 1) % 3 === 0) {
      result = thousandsSeparator + result;
    }
    result = char + result;
  });
  return result;
};

export const maskFormatMoney = value => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(parseFloat(value));
};
