"use client";

import { Order } from "@/types/orders";
import { Product } from "@/types/products";
import { longFormatDate, shortFormatDate } from "@/utils/dateFormats";
import { FC, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GroupItem } from "./GroupItem";

interface GroupListProps {
  products: Product[];
  orders: Order[];
}

export const GroupList: FC<GroupListProps> = ({ products, orders }) => {
  const [activeOrder, setActiveOrder] = useState<Order>(orders[0]);
  return (
    <div className="d-flex flex-column gap-3 w-50">
      {orders.map((order) => (
        <GroupItem
          active={order.id === activeOrder.id}
          key={order.id}
          order={order}
          products={products}
        />
      ))}
    </div>
  );
};
