import { Orders } from "@/components/Orders";
import { getOrders, getProducts } from "@/actions/products";
import { Order } from "@/types/orders";
import { Product } from "@/types/products";

export default async function Page() {
  const products = await getProducts();
  const orders = await getOrders();

  return <Orders products={products.products} orders={orders.orders} />;
}
