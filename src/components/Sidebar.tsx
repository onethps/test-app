"use client";

import Image from "next/image";
import { FC } from "react";
import avatar from "../assets/avatar_photo.jpg";
import { IoMdSettings } from "react-icons/io";

import { Nav, Stack, Badge } from "react-bootstrap";
import { MAIN_ROUTES } from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  const pathname = usePathname();
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
      <Nav className="flex-column mx-auto text-center mt-4" variant="underline">
        <Nav.Link
          className={`text-dark fw-bold`}
          active={pathname === MAIN_ROUTES.HOME}
          href={MAIN_ROUTES.HOME}
        >
          Приходы
        </Nav.Link>
        <Nav.Link
          className=" text-dark fw-bold"
          active={pathname === MAIN_ROUTES.GROUPS}
          href={MAIN_ROUTES.GROUPS}
        >
          Группы
        </Nav.Link>
        <Nav.Link
          className=" text-dark fw-bold"
          active={pathname === MAIN_ROUTES.PRODUCTS}
          href={MAIN_ROUTES.PRODUCTS}
        >
          Продукты
        </Nav.Link>
        <Nav.Link
          className=" text-dark fw-bold"
          active={pathname === MAIN_ROUTES.USERS}
          href={MAIN_ROUTES.USERS}
        >
          Пользователи
        </Nav.Link>
      </Nav>
    </Stack>
  );
};
