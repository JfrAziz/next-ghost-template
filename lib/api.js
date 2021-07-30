import GhostContentAPI from "@tryghost/content-api"
import { GHOST_API_KEY, GHOST_API_URL, GHOST_API_VERSION, defaultSettings } from "@/lib/env"

const api = new GhostContentAPI({
  url: GHOST_API_URL,
  key: GHOST_API_KEY,
  version: GHOST_API_VERSION,
})

const is404 = (error) => /not found/i.test(error.message)

export async function getAllSettings() {
  const settings = await api.settings.browse()
  return { ...settings, defaultSettings: defaultSettings }
}

export async function getAllPostsWithSlug() {
  const params = {
    fields: "slug",
    limit: "all",
  }
  const posts = await api.posts.browse(params)
  return posts
}

export async function getAllPostsForHome(page = 1) {
  const params = {
    limit: "10",
    page: page,
    include: ["authors"],
    order: "published_at DESC",
  }
  const posts = await api.posts.browse(params)
  return posts
}

export async function getPostAndMorePosts(slug) {
  // get full post
  const singleObjectParams = {
    slug,
    include: ["tags", "authors"],
  }
  const post = await api.posts.read(singleObjectParams).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  })

  // get more stories / post
  const moreObjectParams = {
    limit: 3,
  }

  const morePosts = (await api.posts.browse(moreObjectParams))
    ?.filter(({ slug }) => post.slug !== slug)
    .slice(0, 2)

  return { post, morePosts }
}
