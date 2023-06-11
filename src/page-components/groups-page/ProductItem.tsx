"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Row>
      {/* name sn picture */}
      <Col sm={7}>
        <div className="d-flex align-items-center gap-3">
          {/* indicator */}
          <span className="rounded-circle indicator" />
          <Image
            src="https://img1.exportersindia.com/product_images/bc-full/dir_120/3589683/rdp-desktop-with-intel-celeron-2136544.jpeg"
            alt="product_img"
            width={50}
            height={50}
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
      <Col sm={2}>
        <span
          style={{
            color: product.status ? "black" : "#CDDC39",
            fontSize: "14px",
          }}
        >
          {product.status ? "В ремонте" : "свободен"}
        </span>
      </Col>
      {/* actions */}
      <Col sm={3}>
        <div className="d-flex justify-content-end align-items-center h-100 w-100">
          <BsFillTrashFill />
        </div>
      </Col>
    </Row>
  );
};
