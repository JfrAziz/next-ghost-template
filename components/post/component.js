import Prism from "prismjs"
import Link from "next/link"
import Image from "next/image"
import styles from "./component.module.scss"
import ReactDOMServer from "react-dom/server"
import { getPostLink } from "@/lib/helpers/url"
import { base64IMG } from "@/components/misc/base64-image"
import { useEffect } from "react"

// prism js language
import "prismjs/components/prism-java"
import "prismjs/components/prism-python"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-yaml"
import "prismjs/components/prism-json"

/**
 *
 * Image optimizer for blog
 *
 * @param props
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
 * @param props
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
 * @param  props
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
 * syntax highlighting with prism js
 * 
 * @param props 
 * @returns 
 */
export const Code = ({ className, children }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return <code className={className}>{children}</code>
}

/**
 *
 * @param  props
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
