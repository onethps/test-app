"use client";

import Image from "next/image";
import { FC } from "react";
import avatar from "../assets/avatar_photo.jpg";
import { IoMdSettings } from "react-icons/io";

import { Nav, Stack, Badge } from "react-bootstrap";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Stack className="mt-5">
      <Stack className="d-flex flex-column align-items-center">
        <div className="position-relative">
          <Image
            width={100}
            height={100}
            src={avatar}
            alt="avatar_img"
            style={{
              borderRadius: 50,
              objectFit: "cover",
            }}
          />
          <div className="position-absolute bottom-0 end-0 bg-white rounded-pill p-1">
            <IoMdSettings size="30px" />
          </div>
        </div>
      </Stack>
      <Nav
        defaultActiveKey="/home"
        className="flex-column mx-auto text-center mt-4"
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
