import { useState } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import CVPage from './pages/CVPage'

export type Page = 'home' | 'research' | 'cv'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF8F5' }}>
      <Nav currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'research' && <ResearchPage />}
        {currentPage === 'cv' && <CVPage />}
      </main>
      <footer style={{
        borderTop: '1px solid #DDD8D0',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        color: '#7A706A',
        fontSize: '0.8rem',
        fontFamily: "'Work Sans', system-ui, sans-serif",
        letterSpacing: '0.03em',
        marginTop: '4rem',
      }}>
        © 2025 Evelyn Do · University of Missouri
      </footer>
    </div>
  )
}
