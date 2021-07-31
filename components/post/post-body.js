import Normalize from "@/lib/normalize"
import styles from "./component.module.scss"

export default function PostBody({ content, settings }) {
  const { url } = settings
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.post_body}>{Normalize(content, url)}</div>
    </div>
  )
}
