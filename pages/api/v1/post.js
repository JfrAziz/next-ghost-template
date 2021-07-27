import { getAllPostsForHome } from "@/lib/api"

export default async function handler(req, res) {
  const page = req?.query?.page || 1
  // return all post for home page
  const data = await getAllPostsForHome(page)

  // seperate post and meta data (pagination etc)
  const meta = data.meta
  delete data.meta

  res.status(200).json({ posts: data, meta: meta })
}
