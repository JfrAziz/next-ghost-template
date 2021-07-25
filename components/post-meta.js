import Head from "next/head";

export default function PostMeta({ title, description, image }) {
  return (
    <Head>
      <title>{title} | Next.js Blog Example with</title>
      <meta property="og:image" content={image} />
      <meta name="description" content={description} />
    </Head>
  );
}
