import Date from "@/components/misc/date"
import CoverImage from "@/components/shared/cover-image"

const PostTitle = ({ children }) => (
  <h1 className="text-6xl font-bold tracking-tighter leading-tight my-8 text-left">{children}</h1>
)

export default function PostHeader({ post }) {
  const { title, feature_image, published_at, primary_author, excerpt, reading_time } = post
  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <PostTitle>{title}</PostTitle>
        <div className="border-b pb-8 mb-4 text-xl leading-relaxed">
          <span>{excerpt}</span>
        </div>
        <div>
          <span className="border-r pr-2 italic">
            Published <Date dateString={published_at} /> by {primary_author.name}
          </span>
          <span className="pl-2">{reading_time} minutes</span>
        </div>
      </div>
      {feature_image && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} url={feature_image} width={2000} height={1216} />
        </div>
      )}
    </>
  )
}
