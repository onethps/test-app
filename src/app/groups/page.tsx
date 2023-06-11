import { getOrders, getProducts } from "@/actions/products";
import { GroupItem } from "@/page-components/groups-page/GroupItem";
import { GroupList } from "@/page-components/groups-page/GroupList";
import { GroupsProducts } from "@/page-components/groups-page/GroupsProducts";
import { IncomeHeader } from "@/page-components/income-page/IncomeHeader";
import { Order } from "@/types/orders";
import { Product } from "@/types/products";
import { useState } from "react";
import { Stack } from "react-bootstrap";

export default async function Page() {
  const products: { products: Product[] } = await getProducts();
  const orders: { orders: Order[] } = await getOrders();

  return (
    <section>
      <IncomeHeader orders={orders.orders} />
      <div className="d-flex gap-3 mt-5">
        <GroupList orders={orders.orders} products={products.products} />
        <div className="w-75 flex-grow-1">
          <GroupsProducts products={products.products} />
        </div>
      </div>
    </section>
  );
}
