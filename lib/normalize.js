import { A, Img } from "@/components/post/component"
import parse, { attributesToProps, domToReact } from "html-react-parser"

const Normalize = (html, url) => {
  const options = {
    replace: (node) => {
      const name = node.name
      const props = attributesToProps(node.attribs)
      const children = node?.children && domToReact(node.children, options)

      if (name === "a") {
        return (
          <A ghostUrl={url} {...props}>
            {children}
          </A>
        )
      }

      if (name === "img") {
        return <Img {...props}>{children}</Img>
      }
    },
  }

  return parse(html, options)
}

export default Normalize
