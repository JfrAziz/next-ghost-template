import Link from "next/link"
import styles from "./component.module.css"

export const A = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-purple-600 hover:underline">{children}</a>
    </Link>
  )
}

export const P = ({ children }) => {
  return <p className="my-6 text-lg text-gray-900 leading-relaxed">{children}</p>
}

export const HR = () => <hr className="border"></hr>

export const H2 = ({ children, id }) => {
  return (
    <h2 id={id} className="text-3xl mt-12 mb-4 leading-snug">
      {children}
    </h2>
  )
}

export const H3 = ({ children, id }) => {
  return (
    <h3 id={id} className="text-2xl mt-8 mb-4 leading-snug">
      {children}
    </h3>
  )
}

export const Ol = ({ children }) => {
  return <ol className="list-decimal">{ children }</ol>
}

export const Ul = ({ children }) => {
  return <ul className={styles.custom_list}>{ children }</ul>
}

export const Li = ({ children }) => {
  return <li className="my-2 ml-5 pl-2 text-lg">{children}</li>
}

export const Strong = ({ children }) => {
  return (
    <strong className="text-gray-700">{ children }</strong>
  )
}

export const BlockQuote = ({ children }) => {
  return (
    <blockquote className={styles.blockquote}>
      {children}
    </blockquote>
  )
}


