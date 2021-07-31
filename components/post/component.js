import Image from "next/image"
import Link from "next/link"

// modify post url from url that has same origin from ghost api
export const A = ({ href, ghostUrl, children }) => {
  const linkUrl = new URL(href)
  const url = linkUrl.origin == new URL(ghostUrl).origin ? `/posts${linkUrl.pathname}` : linkUrl.href
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  )
}

export const Img = (props) => {
  const { src, alt, width, height } = props
  return (
    <Image src={src} alt={alt || "blog photos"} width={width} height={height}/>
  )
}