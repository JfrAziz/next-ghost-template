import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PostPreview from "@/components/post-preview"

export default function MorePost(props) {
  const [posts, setPosts] = useState(props.posts)
  const [meta, setMeta] = useState(props.meta)

  const getPostFromAPI = async (page = 1) => {
    const res = await fetch(`/api/v1/post?page=${page}`)
    return await res.json()
  }

  const getMorePost = async () => {
    const result = await getPostFromAPI(meta.pagination.next)
    // set new post and new meta
    setPosts((post) => post.concat(result.posts))
    setMeta(result.meta)
  }

  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold tracking-tighter leading-tight">More Posts</h2>
      <div className="mb-32">
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={meta.pagination.next}
          loader={<h3> Loading...</h3>}
          endMessage={<h4>Nothing more to show</h4>}
        >
          {posts.map((post, index) => (
            <PostPreview
              key={index}
              title={post.title}
              date={post.published_at}
              slug={post.slug}
              excerpt={post.custom_excerpt}
            />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  )
}