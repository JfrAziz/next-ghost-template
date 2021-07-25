import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import MorePost from "@/components/more-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome, getAllSettings } from "@/lib/api";
import Meta from "@/components/meta";

export default function Index({ allPosts, postMeta, settings }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Meta settings={settings} />
      <Layout>
        <Container>
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
          {morePosts.length > 0 && (
            <MorePost posts={morePosts} meta={postMeta} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) || [];
  const settings = await getAllSettings();
  console.log(settings)
  const postMeta = allPosts.meta;
  return {
    props: { allPosts, postMeta, settings },
  };
}
