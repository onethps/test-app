"use client";

import { FC } from "react";
import { Stack } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { IncomeCard } from "../page-components/income-page/IncomeCard";
import { Product } from "@/types/products";
import { Order } from "@/types/orders";

interface OrdersProps {
  products: Product[];
  orders: Order[];
}

export const Orders: FC<OrdersProps> = ({ products, orders }) => {
  const getOrderProducts = (orderId: number) =>
    products.filter((product) => product.order === orderId);

  return (
    <>
      <div className="d-flex align-items-center gap-3 mt-5">
        <button
          type="button"
          className="btn btn-success rounded-circle border border-5 border-success-subtle p-2"
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiOutlinePlus size="15px" />
        </button>
        <h3 className="fw-semibold">Приходы / {orders.length}</h3>
      </div>
      <Stack className="gap-3 mt-5">
        {orders.map((order) => (
          <IncomeCard
            key={order.id}
            products={getOrderProducts(order.id)}
            order={order}
          />
        ))}
      </Stack>
    </>
  );
};
