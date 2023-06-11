"use client";

import { Product } from "@/types/products";
import { FC } from "react";

interface ProductsHeaderProps {
  products: Product[];
}

export const ProductsHeader: FC<ProductsHeaderProps> = ({ products }) => {
  return (
    <div>
      <h3>Продукты / {products.length}</h3>
      <div>
        <span>Тип:</span>
        <select name="type">
          <option value="value1">Значение 1</option>
          <option value="value2" selected>
            Значение 2
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
      <div>
        <span>Спецификация:</span>
        <select name="type">
          <option value="value1">Значение 1</option>
          <option value="value2" selected>
            Значение 2
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </div>
  );
};
