import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const searchResults = [
  { image: '/images/picture-12.jpg' },
  { image: '/images/picture-15.jpg' },
  { image: '/images/picture-16.jpg' },
  { image: '/images/picture-1.jpg' },
  { image: '/images/picture-14.jpg' },
  { image: '/images/picture-11.jpg' },
]

const snippet = 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة'

export default function Search() {
  return (
    <>
      <Navbar />
      <main className="font-almarai">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">

            {/* Results column */}
            <div className="w-full md:w-2/3">

              {/* Search form */}
              <div className="mt-[100px]">
                <form action="/search" className="flex items-center gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="أبحث هنا ..."
                    required
                    className="w-3/4 md:w-3/5 px-4 py-2 border border-gray-custom rounded-md"
                  />
                  <button type="submit" className="btn-main text-[22px] mr-6">بحث</button>
                </form>
              </div>

              {/* Sort bar */}
              <div className="flex justify-between items-center mt-12">
                <span className="text-xl ml-2.5">أفضل 50 نتيجة</span>
                <div className="flex items-center gap-2">
                  <span>الترتيب:</span>
                  <select
                    name="ranking_by"
                    className="px-4 py-1.5 border border-gray-custom rounded-md"
                  >
                    <option value="date">التاريخ</option>
                    <option value="related">الصلة</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />

              {/* Article cards */}
              <div>
                {searchResults.map((r, i) => (
                  <div key={i} className="px-6 py-6 border-b border-dashed border-gray-custom">
                    <Link to="/article" className="block text-black no-underline group">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3">
                          <img src={r.image} alt="result" className="w-full" />
                        </div>
                        <div className="w-full md:w-2/3 pr-4">
                          <h4 className="text-[22px] font-bold group-hover:underline">
                            لوريم إيبسوم هو ببساطة نص شكلي
                          </h4>
                          <p className="search-p-clamp">{snippet}</p>
                          <time className="text-base text-gray-custom">الأحد، 01/01/2023</time>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty sidebar */}
            <div className="hidden md:block md:w-1/3"></div>
          </div>

          {/* More results */}
          <div className="text-center my-[75px]">
            <a href="#" className="btn-main text-[22px]">المزيد من النتائج</a>
          </div>
          <hr />
        </div>
      </main>
      <Footer />
    </>
  )
}
