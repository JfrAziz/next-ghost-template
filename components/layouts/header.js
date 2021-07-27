const Header = ({ settings }) => {
  const logo = settings?.icon || settings.defaultSettings.siteIcon
  return (
    <header className="border-b-2">
      <div className="max-w-screen-lg mx-auto px-5 py-5">
        <a href="/">
          <img src={logo} alt="website-icon" aria-label="website-icon" width={36} heigh={36} />
        </a>
      </div>
    </header>
  )
}

export default Header
