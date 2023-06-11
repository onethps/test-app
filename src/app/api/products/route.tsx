import { NextResponse } from "next/server";

import { products } from "@/mock/mock";
import { Product } from "@/types/products";

export async function GET() {
  return NextResponse.json<{ data: Product[] }>({ data: products });
}
