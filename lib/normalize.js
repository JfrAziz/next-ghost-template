import { A, Code, Iframe, Img, ThirdPartyScript, Pre } from "@/components/post/component"
import parse, { attributesToProps, domToReact } from "html-react-parser"

/**
 * Normalize
 * 
 * normalize html element by transform to react element.
 * for now, it just 3 element a, script, and img
 * 
 * @param {string} html 
 * @param {string} url 
 * @returns
 */

const Normalize = (html, url) => {
  const options = {
    replace: (node) => {
      const name = node.name
      const props = attributesToProps(node.attribs)
      const children = node?.children && domToReact(node.children, options)

      switch (name) {
        case "img":
          return <Img {...props}>{children}</Img>

        case "script":
          return <ThirdPartyScript {...props}>{children}</ThirdPartyScript>

        case "a":
          return <A ghostUrl={url} {...props}>{children}</A>

        case "iframe":
          return <Iframe {...props}>{children}</Iframe>
        
        case "pre":
          return <Code {...props}>{children}</Code>
        
        default:
          return
      }
    },
  }
  return parse(html, options)
}

export default Normalize
