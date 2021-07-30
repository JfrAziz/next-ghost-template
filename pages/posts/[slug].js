import { useRouter } from "next/router"
import ErrorPage from "next/error"
import PostBody from "@/components/post/post-body"
import PostMore from "@/components/post/post-more"
import PostHeader from "@/components/post/post-header"
import Layout from "@/components/layouts/layout"
import Meta from "@/components/meta/meta"
import { getAllPostsWithSlug, getAllSettings, getPostAndMorePosts } from "@/lib/api"

export default function Post({ post, morePosts, settings }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />
  if (router.isFallback) return <span>Loading…</span>

  return (
    <>
      <Meta article={post} settings={settings} />
      <Layout settings={settings}>
        <article className="border-b border-accent-2 pb-16 mb-16">
          <PostHeader post={post} />
          <PostBody content={post.html} />
        </article>
        {morePosts.length > 0 && <PostMore posts={morePosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const { post, morePosts } = await getPostAndMorePosts(params.slug)
    const settings = await getAllSettings()
    return {
      props: {
        post,
        morePosts: morePosts || [],
        settings,
      },
      revalidate: 60,
    }
  } catch (error) {
    return { notFound: true, revalidate: 60 }
  }
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || []
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}
