import { H2, H3, P, A, HR, BlockQuote, Li, Ol, Ul, Strong } from "@/components/post/component"
import parse, { attributesToProps, domToReact } from "html-react-parser"

const Normalize = (html) => parse(html, options)

const options = {
  replace: (node) => {
    const name = node.name
    const props = attributesToProps(node.attribs)
    const children = node?.children && domToReact(node.children, options)

    switch (name) {
      case "p":
        return <P>{children}</P>
      case "hr":
        return <HR />
      case "h2":
        return <H2 {...props}>{children}</H2>
      case "h3":
        return <H3 {...props}>{children}</H3>
      case "ol":
        return <Ol {...props}>{children}</Ol>
      case "ul":
        return <Ul {...props}>{children}</Ul>
      case "li":
        return <Li {...props}>{children}</Li>
      case "a":
        return <A {...props}>{children}</A>
      case "strong":
        return <Strong {...props}>{children}</Strong>
      case "blockquote":
        return <BlockQuote {...props}>{children}</BlockQuote>
      default:
        return
    }
  },
}

export default Normalize
