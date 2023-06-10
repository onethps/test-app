"use client";

import { FC, PropsWithChildren } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack className="vh-100 w-100">
      <Header />
      <Row className="mt-5 flex-row ">
        <Col as="aside" className="vh-100 position-fixed top-2 left-0 sidebar">
          <Sidebar />
        </Col>
        <Col className="main" as="main">
          <div className="container">{children}</div>
        </Col>
      </Row>
    </Stack>
  );
};
