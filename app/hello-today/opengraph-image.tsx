import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Image() {
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  return new ImageResponse(<div>Happy {dayName}!</div>, { ...size });
}
