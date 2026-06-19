import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'أخبار', href: '/' },
  { label: 'تكنولوجيا', href: '#' },
  { label: 'اقتصاد', href: '#' },
  { label: 'رياضة', href: '#' },
  { label: 'حاسوب', href: '#' },
]

export default function Navbar() {
  const [isSmall, setIsSmall] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSmall(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 bg-white border-b border-gray-custom font-almarai transition-all duration-500 ${isSmall ? 'py-0' : 'py-[10px]'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap">
          {/* Brand */}
          <Link to="/" className="text-main text-3xl font-bold no-underline">
            أخباري
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>

          {/* Nav collapse */}
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row list-none me-auto mb-2 lg:mb-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block text-black text-xl mr-5 py-1 transition-all duration-500 hover:text-main hover:underline no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop login dropdown */}
            <div className="login-hover hidden lg:block">
              <i className="fa-solid fa-user text-3xl text-gray-custom cursor-pointer ml-[15px]"></i>
              <div className="login-dropdown">
                <Link to="/login" className="btn-main text-sm">
                  تسجيل الدخول
                </Link>
              </div>
            </div>

            {/* Mobile login button */}
            <div className="block lg:hidden my-2">
              <Link to="/login" className="btn-main text-base block w-1/2 mx-auto text-center">
                تسجيل الدخول
              </Link>
            </div>

            {/* Search */}
            <form className="flex items-center gap-2 my-2 lg:my-0" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className="border border-gray-custom rounded px-2 py-1 text-sm"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/search" className="p-0.5">
                <i className="fa-solid fa-magnifying-glass text-3xl text-main"></i>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}
