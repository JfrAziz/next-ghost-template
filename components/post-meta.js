import Head from "next/head";

export default function PostMeta({ title, description, image }) {
  return (
    <Head>
      <title>{title} | Next.js Blog Example with</title>
      
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jafaraziz.com/"/>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jafaraziz.com" />
      <meta property="twitter:url" content="https://jafaraziz.com/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
