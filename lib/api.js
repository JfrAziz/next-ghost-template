import GhostContentAPI from "@tryghost/content-api";

const GHOST_API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const GHOST_API_KEY = process.env.NEXT_PUBLIC_GHOST_API_KEY;
const GHOST_API_VERSION = process.env.NEXT_PUBLIC_GHOST_API_VERSION;

const api = new GhostContentAPI({
  url: GHOST_API_URL,
  key: GHOST_API_KEY,
  version: GHOST_API_VERSION,
});

const is404 = (error) => /not found/i.test(error.message);

export async function getAllSettings() {
  const settings = await api.settings.browse();
  return settings
}

export async function getAllPostsWithSlug() {
  const params = {
    fields: "slug",
    limit: "all",
  };
  const posts = await api.posts.browse(params);
  return posts;
}

export async function getAllPostsForHome(page = 1) {
  const params = {
    limit: "10",
    page: page,
    include: ["authors"],
    fields: [
      "id",
      "slug",
      "title",
      "custom_excerpt",
      "published_at",
      "feature_image",
      "reading_time",
      "primary_author",
    ],
    order: "published_at DESC",
  };
  const posts = await api.posts.browse(params);
  return posts;
}

export async function getPostAndMorePosts(slug) {
  const singleObjectParams = {
    slug,
    include: ["tags", "authors"],
    fields: [
      "id",
      "title",
      "custom_excerpt",
      "html",
      "published_at",
      "feature_image",
      "reading_time",
      "primary_author",
    ],
  };
  const moreObjectParams = {
    limit: 3,
    fields: ["slug", "title", "custom_excerpt", "published_at", "reading_time"],
  };
  const post = await api.posts.read(singleObjectParams).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return;
    throw error;
  });
  const morePosts = (await api.posts.browse(moreObjectParams))
    ?.filter(({ slug }) => post.slug !== slug)
    .slice(0, 2);

  return {
    post,
    morePosts,
  };
}
