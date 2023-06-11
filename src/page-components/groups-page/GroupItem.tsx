"use client";

import { Order } from "@/types/orders";
import { Product } from "@/types/products";
import { longFormatDate, shortFormatDate } from "@/utils/dateFormats";
import { FC } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";

interface GroupItemProps {
  products: Product[];
  order: Order;
  active: boolean;
}

export const GroupItem: FC<GroupItemProps> = ({ products, order, active }) => {
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            {/* icon */}
            <Col>
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
                  <span className="fs-5 fw-semibold text-secondary">
                    {products.length}
                  </span>
                  <span className="fw-semibold opacity-50">Продукта</span>
                </div>
              </div>
            </Col>
            {/* date */}
            <Col>
              <Col>
                <div className="d-flex flex-column lh-1 align-items-center">
                  <span className="fw-semibold opacity-50">
                    {shortFormatDate(order.date)}
                  </span>
                  <span className="fw-semibold text-secondary fs-5">
                    {longFormatDate(order.date)}
                  </span>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
