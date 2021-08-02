import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link data-href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&family=Open+Sans&display=swap" />
        </Head>
        <body className="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
