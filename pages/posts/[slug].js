import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "@/components/container"
import PostBody from "@/components/post/post-body"
import PostMore from "@/components/post/post-more"
import PostHeader from "@/components/post/post-header"
import Layout from "@/components/layout"
import Meta from "@/components/meta/meta"
import { getAllPostsWithSlug, getAllSettings, getPostAndMorePosts } from "@/lib/api"

export default function Post({ post, morePosts, settings }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
            <article className="border-b-2 border-accent-2 pb-28 mb-24">
              <Meta article={post} settings={settings} />
              <PostHeader
                title={post.title}
                coverImage={post.feature_image}
                date={post.published_at}
                author={post.primary_author}
              />
              <PostBody content={post.html} />
            </article>
            {morePosts.length > 0 && <PostMore posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
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
