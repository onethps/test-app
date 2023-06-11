import { NextResponse } from "next/server";

import { orders } from "@/mock/mock";
import { Order } from "@/types/orders";

export async function GET() {
  return NextResponse.json<{ data: Order[] }>({ data: orders });
}
