import Date from './date'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="border-b-2 mb-2">
      <h3 className="text-2xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
