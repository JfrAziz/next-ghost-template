import { getAllPostsForHome } from "@/lib/api";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostPreview from "./post-preview";

export default function MorePost(props) {
  const [posts, setPosts] = useState(props.posts);
  const [meta, setMeta] = useState(props.meta)

  const getMorePost = async () => {
    const newPost = await getAllPostsForHome(meta.pagination.next)
    // get meta from array and delete it before concat to post
    const newMeta = newPost.meta
    delete newPost.meta
    
    // set new post and new meta
    setPosts((post) => post.concat(newPost))
    setMeta(newMeta)
  }

  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold tracking-tighter leading-tight">
        More Posts
      </h2>
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
  );
}
