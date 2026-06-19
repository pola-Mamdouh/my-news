import { Link } from 'react-router-dom'

export default function ArticleCard({ image, category, title, to = '/article', imgClass = '' }) {
  return (
    <Link
      to={to}
      className="block text-black no-underline group"
    >
      <img src={image} alt={title} className={`w-full object-cover ${imgClass}`} />
      <div className="mt-3">
        <span className="inline-block bg-main text-white text-sm px-2.5 py-1 ml-2.5">
          {category}
        </span>
        <h5 className="inline text-black text-lg group-hover:underline">
          {title}
        </h5>
      </div>
    </Link>
  )
}
