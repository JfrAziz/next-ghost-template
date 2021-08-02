import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter } from "../icons"

const Footer = ({ settings }) => {
  const logo = settings?.icon || settings.defaultSettings.siteIcon
  const { twitter, facebook, title } = settings
  return (
    <footer className="text-gray-600 body-font border-t">
      <div className="max-w-screen-lg px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex">
            <Image src={logo} alt="website-icon" aria-label="website-icon" width={36} height={36} />
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} {title}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              <Twitter />
            </a>
          )}
          {facebook && (
            <a
              href={`https://facebook.com/${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
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
