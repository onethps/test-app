"use client";

import { FC } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Nav, Stack } from "react-bootstrap";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Stack>
      <Nav
        defaultActiveKey="/home"
        className="flex-column mx-auto text-center"
        variant="underline"
      >
        <Nav.Link href="/home" className="border-success">
          Home
        </Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Stack>
  );
};
