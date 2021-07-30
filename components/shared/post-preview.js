import Date from "@/components/misc/date"
import Link from "next/link"

export default function PostPreview({ post }) {
  const { title, published_at, custom_excerpt, slug, reading_time } = post
  return (
    <div className="border-b my-4">
      <h3 className="text-2xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4">
        <span className="border-r pr-2"><Date dateString={published_at} /></span>
        <span className="pl-2">{reading_time} minutes</span>
      </div>
      <p className="hidden md:block text-lg leading-relaxed mb-4">{custom_excerpt}</p>
    </div>
  )
}
