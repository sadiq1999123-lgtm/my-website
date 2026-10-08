import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
  className="brand brand-image"
  href="#home"
  onClick={closeMenu}
  aria-label="RICH MEDIA — ana səhifə"
>
  <img
    className="brand-logo"
   src={`${import.meta.env.BASE_URL}logo-rich.png`}
    alt="RICH MEDIA"
    width="1774"
    height="887"
  />
</a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          id="main-navigation"
          className={`navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Əsas menyu"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeMenu()
              document.querySelector('.menu-toggle')?.focus()
            }
          }}
        >
          <a href="#services" onClick={closeMenu}>Xidmətlər</a>
          <a href="#portfolio" onClick={closeMenu}>Konseptlər</a>
          <a href="#about" onClick={closeMenu}>Haqqımızda</a>
          <a href="#careers" onClick={closeMenu}>
  Vakansiyalar
</a>
          <a href="#contact" className="contact-link" onClick={closeMenu}>
            Birlikdə yaradaq ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
