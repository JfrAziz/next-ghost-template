import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostMeta from "@/components/post-meta";

export default function Post({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
            <article>
              <PostMeta
                title={post.title}
                description={post.custom_excerpt}
                image={post.feature_image}
              />
              <PostHeader
                title={post.title}
                coverImage={post.feature_image}
                date={post.published_at}
                author={post.primary_author}
              />
              <PostBody content={post.html} />
            </article>
            <hr className="border-accent-2 mt-28 mb-24" />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  try {
    const { post, morePosts } = await getPostAndMorePosts(params.slug);
    return {
      props: {
        post,
        morePosts: morePosts || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true, revalidate: 60 };
  }
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
