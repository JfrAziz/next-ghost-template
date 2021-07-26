import PostPreview from "@/components/post-preview"

export default function PostMore({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="mb-32">
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            title={post.title}
            date={post.published_at}
            slug={post.slug}
            excerpt={post.custom_excerpt}
          />
        ))}
      </div>
    </section>
  )
}
