import dayjs from "dayjs"

export default function Date({ dateString }) {
  const day = dayjs(dateString)
  return <time dateTime={dateString}>{day.format("D MMMM YYYY")}</time>
}
