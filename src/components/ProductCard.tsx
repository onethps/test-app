"use client";
import { formatCash } from "@/utils/formatCash";
import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { longFormatDate, shortFormatDate } from "@/utils/dateFormats";
import { Product } from "@/types/products";
import Image from "next/image";

interface IncomeCardProps {
  product: Product;
}

export const ProductCard: FC<IncomeCardProps> = ({ product }) => {
  const fromDate = longFormatDate(product.guarantee.start);
  const toDate = longFormatDate(product.guarantee.end);

  return (
    <Card className="border-0">
      <Card.Body>
        <Container>
          <Row className="flex-nowrap align-items-center">
            {/* name sn picture */}
            <Col sm={4}>
              <div className="d-flex align-items-center gap-3">
                {/* indicator */}
                <span className="rounded-circle indicator" />
                <Image
                  src="https://img1.exportersindia.com/product_images/bc-full/dir_120/3589683/rdp-desktop-with-intel-celeron-2136544.jpeg"
                  alt="product_img"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="d-flex flex-column lh-1">
                  <h5 className="text-secondary border-bottom p-1">
                    {product.title}
                  </h5>
                  <p>{product.serialNumber}</p>
                </div>
              </div>
            </Col>
            {/* status */}
            <Col sm={1}>
              <span
                style={{
                  color: product.status ? "black" : "#CDDC39",
                  fontSize: "14px",
                }}
              >
                {product.status ? "В ремонте" : "свободен"}
              </span>
            </Col>
            {/* date */}
            <Col sm={2}>
              <div className="d-flex flex-column">
                <div className="d-flex gap-3">
                  <span className="fw-semibold opacity-50 w-10">c</span>
                  {fromDate}
                </div>
                <div className="d-flex gap-1">
                  <span className="fw-semibold opacity-50">по</span> {toDate}
                </div>
              </div>
            </Col>
            {/* condition */}
            <Col sm={1}>
              <span>{product.isNew ? "новый" : "б/у"}</span>
            </Col>
            {/* summ */}
            <Col sm={2}>
              <div className="d-flex flex-column lh-1">
                <span className="text-secondary fw-semibold opacity-50">
                  {formatCash("USD").format(product.price[0].value)}
                </span>
                <span className="fw-semibold text-secondary fs-5">
                  {formatCash("UAH").format(product.price[1].value)}
                </span>
              </div>
            </Col>
            {/* specifications */}
            <Col sm={2}>
              <span>{product.specification}</span>
            </Col>
            {/* repairer */}
            <Col sm={2}>
              <span>{product.repairer ? product.repairer : "-"}</span>
            </Col>

            {/* income */}
            <Col sm={3}>
              <span>cascsacascsaewgwegwergewrgwergwegwegwegewg</span>
            </Col>
            {/* date */}
            <Col sm={2}>
              <div className="d-flex flex-column lh-1 align-items-center">
                <span className="fw-semibold opacity-50">
                  {shortFormatDate(product.date)}
                </span>
                <span className="fw-semibold text-secondary fs-5">
                  {longFormatDate(product.date)}
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
