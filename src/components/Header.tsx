"use client";

import { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { TopMenu } from "./TopMenu";

export const Header: FC = ({}) => {
  return (
    <Navbar bg="light" className="header">
      <Container>
        <Navbar.Brand href="#home" className="w-20">
          Inventory
        </Navbar.Brand>
        <div className="w-50">
          <input placeholder="Поиск" className="w-50 input rounded px-3" />
        </div>
        <TopMenu className="w-30" />
      </Container>
    </Navbar>
  );
};
