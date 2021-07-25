import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import MorePost from "@/components/more-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";

export default function Index({ allPosts, meta }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Container>
          <Intro />
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
          {morePosts.length > 0 && <MorePost posts={morePosts} meta={meta} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) || [];
  const meta = allPosts.meta;
  return {
    props: { allPosts, meta },
  };
}
