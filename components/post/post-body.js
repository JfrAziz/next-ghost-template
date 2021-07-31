import Normalize from "@/lib/normalize"

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      {Normalize(content)}
    </div>
  )
}
