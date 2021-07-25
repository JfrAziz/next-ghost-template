import { getAllPostsForHome, getAllPostsWithSlug, getAllSettings, getPostAndMorePosts } from "@/lib/api";

export default async function handler(req, res) {
  const ghost = req?.query?.ghost
  let data
  switch (ghost) {
    case 'getAllPostsWithSlug':
      data = await getAllPostsWithSlug()
      break;
    case 'getAllPostsForHome':
      data = await getAllPostsForHome()
      break
    case 'getPostAndMorePosts':
      data = await getPostAndMorePosts("welcome")
      break
    case 'getAllSettings':
      data = await getAllSettings()
      break
    default:
      data = await getAllPostsForHome()
      break;
  }
  res.status(200).json(data)
}