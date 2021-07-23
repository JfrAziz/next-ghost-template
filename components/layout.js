import Meta from './meta'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="m-auto max-w-screen-lg min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
