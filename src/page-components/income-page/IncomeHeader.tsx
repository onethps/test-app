"use client";

import { Order } from "@/types/orders";
import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface IncomeHeaderProps {
  orders: Order[];
}

export const IncomeHeader: FC<IncomeHeaderProps> = ({ orders }) => {
  return (
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
  );
};
