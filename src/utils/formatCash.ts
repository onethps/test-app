export const formatCash = (currency: "USD" | "UAH") =>
  new Intl.NumberFormat("et-ET", {
    style: "currency",
    currency: currency,
  });
