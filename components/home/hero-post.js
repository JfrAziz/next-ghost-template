import Avatar from "@/components/misc/avatar"
import Date from "@/components/misc/date"
import CoverImage from "@/components/cover-image"
import Link from "next/link"

export default function HeroPost({ post }) {
  const { title, feature_image, published_at, excerpt, primary_author, slug, reading_time } = post
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} url={feature_image} slug={slug} width={2000} height={1216} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <span className="border-r pr-2">
              <Date dateString={published_at} />
            </span>
            <span className="pl-2">{reading_time} minutes</span>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={primary_author.name} picture={primary_author.profile_image} />
        </div>
      </div>
    </section>
  )
}
