import { useState } from 'react'
import type { Page } from '../App'

interface NavProps {
  currentPage: Page
  navigate: (page: Page) => void
}

export default function Nav({ currentPage, navigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Research', page: 'research' },
    { label: 'CV', page: 'cv' },
  ]

  const handleNav = (page: Page) => {
    navigate(page)
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(250, 248, 245, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #DDD8D0',
    }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
      }}>
        <button
          onClick={() => handleNav('home')}
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 500,
            color: '#2C2825',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Evelyn Do
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              style={{
                fontFamily: "'Work Sans', system-ui, sans-serif",
                fontSize: '0.875rem',
                fontWeight: currentPage === page ? 500 : 400,
                color: currentPage === page ? '#8B4055' : '#7A706A',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem 0',
                borderBottom: currentPage === page ? '1px solid #8B4055' : '1px solid transparent',
                transition: 'color 0.15s, border-color 0.15s',
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#2C2825',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-dropdown" style={{
          borderTop: '1px solid #DDD8D0',
          backgroundColor: '#FAF8F5',
          padding: '0.75rem 1.5rem',
        }}>
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                fontFamily: "'Work Sans', system-ui, sans-serif",
                fontSize: '0.9rem',
                fontWeight: currentPage === page ? 500 : 400,
                color: currentPage === page ? '#8B4055' : '#2C2825',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.6rem 0',
                borderBottom: '1px solid #EDE9E4',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
