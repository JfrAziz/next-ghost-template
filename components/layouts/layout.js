import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer"

export default function Layout({ settings, children }) {
  return (
    <>
      <Header settings={settings} />
      <main className="min-h-screen max-w-screen-lg mx-auto px-5">
        <div className="container">{children}</div>
      </main>
      <Footer settings={settings}/>
    </>
  )
}
