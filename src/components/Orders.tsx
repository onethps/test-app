import { FC } from "react";
import { Card, Stack } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IncomeCard } from "./IncomeCard";

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) => {
  return (
    <>
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
        <h3 className="fw-semibold">Приходы / 25</h3>
      </div>
      <Stack className="gap-3 mt-5">
        <IncomeCard />
        <IncomeCard />
        <IncomeCard />
        <IncomeCard />
      </Stack>
    </>
  );
};
