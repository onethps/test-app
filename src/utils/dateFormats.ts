import dayjs from "dayjs";

export const shortFormatDate = (date: string) => dayjs(date).format("MM / DD");

export const longFormatDate = (date: string) =>
  dayjs(date).format("DD / MM / YYYY");
