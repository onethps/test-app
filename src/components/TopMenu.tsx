"use client";

import dayjs from "dayjs";
import { FC } from "react";
import { BiTime } from "react-icons/bi";

interface TopMenuProps extends React.HTMLProps<HTMLDivElement> {}

export const TopMenu: FC<TopMenuProps> = ({ ...props }) => {
  const currentDay = dayjs().format("dddd");
  const currentDate = dayjs().format("DD MMM, YYYY");
  const currentTime = dayjs().format("HH:mm");
  return (
    <div {...props} className="lh-1 d-flex flex-column gap-1">
      <span className="fw-medium">{currentDay}</span>
      <div className="d-flex gap-4">
        <span className="fw-medium">{currentDate}</span>
        <div className="d-flex gap-2 align-items-center">
          <BiTime color="green" />
          <span className="fw-medium">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};
