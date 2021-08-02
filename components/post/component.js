import Prism from "prismjs"
import Link from "next/link"
import Image from "next/image"
import styles from "./component.module.scss"
import { getPostLink } from "@/lib/helpers/url"
import { base64IMG } from "@/components/misc/base64-image"
import { useEffect, useRef } from "react"

// prism js language
import "prismjs/components/prism-java"
import "prismjs/components/prism-python"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-yaml"
import "prismjs/components/prism-json"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/toolbar/prism-toolbar"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"

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
      <iframe src={src} />
    </div>
  )
}

/**
 *
 * run third party js, like widget or something in iframe.
 * caveats, its not responsive. so if you change screen size
 * iframe height not change
 *
 * @param  props
 * @returns
 */
export const ThirdPartyScript = ({ src }) => {
  const iframeRef = useRef(null)

  const updateIframe = () => {
    let doc = iframeRef.current.document
    if (iframeRef.current.contentDocument) doc = iframeRef.current.contentDocument
    else if (iframeRef.current.contentWindow) doc = iframeRef.current.contentWindow.document

    const resizeScript = `onload="window.frameElement.style.height=document.body.scrollHeight + 'px'"`
    const iframeHtml = `
    <html>

    <head>
      <base target="_parent">
      <style>
        * {
          padding: 0;
          margin: 0
        }
      </style>
    </head>

    <body ${resizeScript}>
      <script src=${src}></script>
    </body>

    </html>
    `

    doc.open()
    doc.writeln(iframeHtml)
    doc.close()
  }

  useEffect(() => {
    updateIframe()
  })

  return <iframe className="w-full p-0 m-0" ref={iframeRef} />
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
