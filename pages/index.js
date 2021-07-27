import HeroPost from "@/components/home/hero-post"
import MorePost from "@/components/home/more-post"
import Intro from "@/components/home/intro"
import Layout from "@/components/layouts/layout"
import Meta from "@/components/meta/meta"
import { getAllPostsForHome, getAllSettings } from "@/lib/api"

export default function Index({ allPosts, postMeta, settings }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Meta settings={settings} />
      <Layout settings={settings}>
        <Intro title={settings.title} description={settings.description} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.feature_image}
            date={heroPost.published_at}
            author={heroPost.primary_author}
            slug={heroPost.slug}
            excerpt={heroPost.custom_excerpt}
          />
        )}
        {morePosts.length > 0 && <MorePost posts={morePosts} meta={postMeta} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) || []
  const settings = await getAllSettings()

  const postMeta = allPosts.meta
  return {
    props: { allPosts, postMeta, settings },
  }
}
