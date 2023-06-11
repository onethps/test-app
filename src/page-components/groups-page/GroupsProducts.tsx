"use client";

import { Product } from "@/types/products";
import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductItem } from "./ProductItem";
import { Card, ListGroup } from "react-bootstrap";

interface GroupsProductsProps {
  products: Product[];
}

export const GroupsProducts: FC<GroupsProductsProps> = ({ products }) => {
  return (
    <Card className="flex-grow-1">
      <div className="d-flex flex-column gap-2">
        <Card.Header className="bg-white border-0">
          <h4 className="mb-4 fw-semibold">Длинное название прихода</h4>
          <button
            type="button"
            className="d-flex gap-3 bg-white border-0 align-items-center"
          >
            <div
              className="btn rounded-circle p-1 d-flex align-items-center justify-content-center"
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#8BC34A",
              }}
            >
              <AiOutlinePlus color="white" />
            </div>
            <span
              className="fw-semibold"
              style={{
                color: "#8BC34A",
              }}
            >
              Добавить продукт
            </span>
          </button>
        </Card.Header>
        <ul className="list-group">
          {products.map((product) => (
            <li
              className="list-group-item border-start-0 border-end-0 border-bottom-0 border-2"
              key={product.id}
            >
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
