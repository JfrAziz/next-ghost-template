import PostPreview from "@/components/post-preview"

export default function PostMore({ posts }) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold tracking-tighter leading-tight">More Stories</h2>
      <div className="mb-8">
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            title={post.title}
            date={post.published_at}
            slug={post.slug}
            excerpt={post.custom_excerpt}
            reading_time={post.reading_time}
          />
        ))}
      </div>
    </section>
  )
}
