"use client";
import { formatCash } from "@/utils/formatCash";
import { FC } from "react";
import dayjs from "dayjs";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { getProductsSum } from "@/utils/productUtils";
import { Product } from "@/types/products";
import { Order } from "@/types/orders";
import { longFormatDate, shortFormatDate } from "@/utils/dateFormats";

interface IncomeCardProps {
  products: Product[];
  order: Order;
}

export const IncomeCard: FC<IncomeCardProps> = ({ products, order }) => {
  const productsSumValues = getProductsSum(products);

  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            {/* header */}
            <Col sm={4}>
              <div className="d-flex w-100 border-bottom text-truncate py-1">
                <h5 className="text-secondary">{order.title}</h5>
              </div>
            </Col>
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
              <div className="d-flex flex-column lh-1 align-items-center">
                <span className="fw-semibold opacity-50">
                  {shortFormatDate(order.date)}
                </span>
                <span className="fw-semibold text-secondary fs-5">
                  {longFormatDate(order.date)}
                </span>
              </div>
            </Col>
            {/* summ */}
            <Col>
              <div className="d-flex flex-column lh-1">
                <span className="text-secondary fw-semibold opacity-50">
                  {formatCash("USD").format(productsSumValues.usd)}
                </span>
                <span className="fw-semibold text-secondary fs-5">
                  {formatCash("UAH").format(productsSumValues.uah)}
                </span>
              </div>
            </Col>
            {/* actions */}
            <Col>
              <div className="d-flex justify-content-end align-items-center h-100 w-100">
                <BsFillTrashFill />
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
