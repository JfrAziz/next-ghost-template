import Link from "next/link"

const Header = ({ settings }) => {
  const logo = settings?.icon || settings.defaultSettings.siteIcon
  return (
    <header className="border-b">
      <div className="max-w-screen-lg mx-auto px-5 py-3 flex justify-between">
        <Link href="/">
          <a>
            <img src={logo} alt="website-icon" aria-label="website-icon" width={36} heigh={36} />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
