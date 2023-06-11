import { getProducts } from "@/actions/products";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/products";

export default async function Page() {
  const products: { products: Product[] } = await getProducts();

  console.log(products);

  return (
    <>
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
