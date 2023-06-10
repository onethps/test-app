"use client";

import Image from "next/image";
import { FC } from "react";
import avatar from "../assets/account_circle.png";
import { IoMdSettings } from "react-icons/io";

import { Nav, Stack, Badge } from "react-bootstrap";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Stack>
      <Stack className="justify-content-center align-items-center">
        <Image
          width={100}
          height={100}
          src={avatar}
          alt="avatar_img"
          style={{
            position: "relative",
          }}
        />
        <IoMdSettings
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        />
      </Stack>
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
