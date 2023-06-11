import { getOrders, getProducts } from "@/actions/products";
import { Order } from "@/types/orders";
import { Product } from "@/types/products";
import { IncomeHeader } from "@/page-components/income-page/IncomeHeader";
import { IncomeList } from "@/page-components/income-page/IncomeList";

export default async function Page() {
  const products: { products: Product[] } = await getProducts();
  const orders: { orders: Order[] } = await getOrders();

  return (
    <>
      <IncomeHeader orders={orders.orders} />
      <IncomeList orders={orders.orders} products={products.products} />
    </>
  );
}
