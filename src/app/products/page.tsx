import { getProducts } from "@/actions/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductsHeader } from "../../page-components/products-page/ProductsHeader";

import { Product } from "@/types/products";

export default async function Page() {
  const products: { products: Product[] } = await getProducts();

  return (
    <section>
      <ProductsHeader products={products.products} />
      <div className="overflow-auto d-flex flex-column gap-3 py-4">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
