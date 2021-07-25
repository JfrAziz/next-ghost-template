import Head from "next/head";

export default function Meta({ settings }) {
  const { title, description, accent_color, icon, cover_image } = settings;
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href={icon} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon} />
      <link rel="shortcut icon" href={icon} />
      <link rel="mask-icon" href={icon} color={accent_color} />
      <meta name="msapplication-TileColor" content={accent_color} />
      <meta name="theme-color" content={accent_color} />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jafaraziz.com/"/>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={cover_image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jafaraziz.com" />
      <meta property="twitter:url" content="https://jafaraziz.com/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover_image} />
    </Head>
  );
}
