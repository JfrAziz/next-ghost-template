import Link from "next/link"
import Image from "next/image"
import styles from "./component.module.scss"
import ReactDOMServer from "react-dom/server"
import { getPostLink } from "@/lib/helpers/url"
import { base64IMG } from "@/components/misc/base64-image"

/**
 *
 * Image optimizer for blog
 *
 * @param {{string, string}} {src, alt}
 * @returns
 */
export const Img = ({ src, alt }) => {
  return (
    <div className={styles.image_container}>
      <Image
        src={src}
        alt={alt || "blog photos"}
        layout="fill"
        placeholder="blur"
        blurDataURL={base64IMG}
      />
    </div>
  )
}

/**
 *
 * iframe for embed video like youtube or etec
 * use 16:9 aspect ration
 *
 * @param {{string}} {src}
 * @returns
 */
export const Iframe = ({ src }) => {
  return (
    <div className={styles.iframe_wrapper}>
      <iframe className="" src={src}></iframe>
    </div>
  )
}

/**
 *
 * run third party js, like widget or something. it's run but still error
 * because sometime third party script create a new html element, so
 * React Server and Client does'n match
 *
 * @param {{string}} {src}
 * @returns
 */
export const ThirdPartyScript = ({ src }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: ReactDOMServer.renderToString(<script src={src}></script>),
      }}
    />
  )
}

/**
 *
 * @param {{string, string, JSX.Element}} {href, ghostUrl, children}
 * @returns
 */
export const A = ({ href, ghostUrl, children }) => {
  const url = getPostLink(href, ghostUrl)
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  )
}
