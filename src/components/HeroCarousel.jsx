import { useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { image: '/images/picture-1.jpg' },
  { image: '/images/picture-4.jpg' },
  { image: '/images/picture-7.jpg' },
]

const title = 'لوريوم سبيوم: لوريم إيبسوم هو ببساطة نص شكلي'

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  return (
    <div className="carousel-news">
      <div className="relative overflow-hidden">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item ${i === active ? 'block' : 'hidden'}`}>
            <Link to="/article">
              <img src={slide.image} alt="slide" className="d-block w-full object-cover" style={{ maxHeight: 490 }} />
              <div className="carousel-text">
                <h3>{title}</h3>
              </div>
            </Link>
          </div>
        ))}

        {/* Indicators */}
        <div className="carousel-indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-indicators button ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
