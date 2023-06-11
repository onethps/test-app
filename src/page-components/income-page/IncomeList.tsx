"use client";

import { FC } from "react";
import { Stack } from "react-bootstrap";
import { IncomeCard } from "./IncomeCard";
import { Order } from "@/types/orders";
import { Product } from "@/types/products";

interface IncomeListProps {
  orders: Order[];
  products: Product[];
}

export const IncomeList: FC<IncomeListProps> = ({ orders, products }) => {
  const getOrderProducts = (orderId: number) =>
    products.filter((product) => product.order === orderId);

  return (
    <Stack className="gap-3 mt-5">
      {orders.map((order) => (
        <IncomeCard
          key={order.id}
          products={getOrderProducts(order.id)}
          order={order}
        />
      ))}
    </Stack>
  );
};
