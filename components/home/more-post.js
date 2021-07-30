import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PostPreview from "@/components/shared/post-preview"

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
      <div className="mb-16">
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={meta.pagination.next}
          loader={<h3> Loading...</h3>}
          endMessage={<h4>Nothing more to show</h4>}
        >
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  )
}
