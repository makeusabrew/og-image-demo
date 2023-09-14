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

export default function Image({ params }: { params: { name: string } }) {
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];

  // uppercase the first letter of the slug, lowercase the rest of it:
  const name =
    params.name.charAt(0).toUpperCase() + params.name.slice(1).toLowerCase();
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Happy {dayName}, {name}!
      </div>
    ),
    { ...size }
  );
}
