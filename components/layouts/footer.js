import Link from "next/link"
import { Facebook, Twitter } from "../icons"

const Footer = ({ settings }) => {
  const logo = settings?.icon || settings.defaultSettings.siteIcon
  const { twitter, facebook } = settings
  return (
    <footer class="text-gray-600 body-font border-t">
      <div class="max-w-screen-lg px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a>
            <img src={logo} alt="website-icon" aria-label="website-icon" width={36} heigh={36} />
          </a>
        </Link>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Tailblocks
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500"
            >
              <Twitter />
            </a>
          )}
          {facebook && (
            <a
              href={`https://facebook.com/${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              class="ml-3 text-gray-500"
            >
              <Facebook />
            </a>
          )}
        </span>
      </div>
    </footer>
  )
}

export default Footer
