import { ptBR } from "date-fns/locale";

export const locale = "pt-BR";
export const datePickerLocale = ptBR;
export const currency = "BRL";
export const currencySymbol = "R$";

export const CurrencyFormatter = Intl.NumberFormat(locale, {
  style: "currency",
  currency: currency,
});

export const DateFormatter = Intl.DateTimeFormat(locale, {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

export const ShortDateFormatter = Intl.DateTimeFormat(locale, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const parseFormattedCurrency = (formattedValue: string) => {
  const thousandSeparator = Intl.NumberFormat(locale)
    .format(11111)
    .replace(/\p{Number}/gu, "");
  const thounsandRegex = new RegExp("\\" + thousandSeparator, "g");

  const decimalSeparator = Intl.NumberFormat(locale)
    .format(1.1)
    .replace(/\p{Number}/gu, "");
  const decimalRegex = new RegExp("\\" + decimalSeparator);

  return parseFloat(
    formattedValue
      .replace(currencySymbol, "")
      .replace(thounsandRegex, "")
      .replace(decimalRegex, ".")
  );
};
