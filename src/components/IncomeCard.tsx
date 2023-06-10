"use client";
import { FC } from "react";

import { Card, Stack } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

interface IncomeCardProps {}

export const IncomeCard: FC<IncomeCardProps> = ({}) => {
  return (
    <Card>
      <Card.Body>
        <Stack className="d-flex flex-row gap-2 justify-content-between align-items-center">
          {/* header */}
          <h5 className="text-secondary fw-normal border-bottom">
            TitltetesTitltetesTitltetesTitltetesTitltet
          </h5>
          {/* icon */}
          <div className="d-flex gap-3 align-items-start">
            <button
              type="button"
              className=" btn-light rounded-circle p-1 border border-1 btn"
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineUnorderedList size="20px" />
            </button>
            <div className="d-flex flex-column lh-1">
              <span className="fs-5 fw-semibold text-secondary">23</span>
              <span className="fw-semibold opacity-50">Продукта</span>
            </div>
          </div>
          {/* date */}
          <div className="d-flex flex-column lh-1 align-items-center align-self-start">
            <span className="fw-semibold opacity-50">04/12</span>
            <span className="fw-semibold text-secondary fs-5">
              06 / Апр / 2017
            </span>
          </div>
          {/* summ */}
          <div className="d-flex flex-column align-self-start lh-1">
            <span className="text-secondary fw-semibold opacity-50">
              2500 $
            </span>
            <span className="fw-semibold text-secondary fs-5">
              250 000.50 uah
            </span>
          </div>
          {/* actions */}
          <BsFillTrashFill />
        </Stack>
      </Card.Body>
    </Card>
  );
};
