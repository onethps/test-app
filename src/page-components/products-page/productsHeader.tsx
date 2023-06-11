"use client";

import { Product } from "@/types/products";
import { FC } from "react";

interface ProductsHeaderProps {
  products: Product[];
}

export const ProductsHeader: FC<ProductsHeaderProps> = ({ products }) => {
  return (
    <div className="d-flex gap-5 align-items-center my-5">
      <h3>Продукты / {products.length}</h3>
      <div className="d-flex gap-2">
        <span>Тип:</span>
        <select name="type">
          <option value="value1">Значение 1</option>
          <option value="value2" selected>
            Значение 2
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
      <div className="d-flex gap-2">
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
