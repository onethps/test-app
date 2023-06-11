import { Product } from "@/types/products";

export const getProductsSum = (products: Product[]) =>
  products.reduce(
    (acc, val) => {
      val.price.forEach((price) => {
        if (price.symbol === "USD") {
          acc.usd += price.value;
        }
        if (price.symbol === "UAH") {
          acc.uah += price.value;
        }
      });

      return acc;
    },
    { usd: 0, uah: 0 }
  );
