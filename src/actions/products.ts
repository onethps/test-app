export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getOrders() {
  const res = await fetch("http://localhost:3000/api/orders");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
