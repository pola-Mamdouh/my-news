import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ArticleCard from '../components/ArticleCard'

const loremShort = 'لوريم إيبسوم هو ببساطة نص شكلي'
const loremLong = 'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر.'
const loremBody = 'كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
const loremBody2 = 'انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني.'

const relatedArticles = [
  { image: '/images/picture-12.jpg', category: 'اقتصاد' },
  { image: '/images/picture-10.jpg', category: 'اقتصاد' },
  { image: '/images/picture-15.jpg', category: 'اقتصاد' },
]

const mostReadItems = [
  { image: '/images/picture-13.jpg' },
  { image: '/images/picture-11.jpg' },
  { image: '/images/picture-15.jpg' },
  { image: '/images/picture-12.jpg' },
]

const suggestedStories = [
  { image: '/images/picture-16.jpg' },
  { image: '/images/picture-13.jpg' },
  { image: '/images/picture-11.jpg' },
]

const relatedTitle = 'لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم'

export default function Article() {
  return (
    <>
      <Navbar />
      <main className="font-almarai">

        {/* Article header */}
        <div className="mt-[100px]">
          <div className="container mx-auto px-4">
            <div className="header-category text-xl">
              <span className="ml-1">تكنولوجيا</span> | <span className="mr-1">ميكروسوفت</span>
            </div>
            <div className="header-title my-[30px_auto_50px]">
              <h2 className="text-2xl font-bold">
                لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر
              </h2>
            </div>
          </div>
        </div>

        {/* Article main */}
        <div className="article-main">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              {/* Main content */}
              <div className="w-full md:w-2/3">
                <div className="article-img">
                  <img src="/images/picture-14.jpg" alt="article" className="w-full" />
                </div>
                <div className="my-3 text-base">
                  <span>{loremShort}</span>
                </div>
                <div className="article-datetime">
                  <time dateTime="01-01-2023">الأحد 01/01/2023</time>
                </div>

                {/* Body */}
                <div className="article-body">
                  <article>
                    <p className="text-[22px] mb-4">{loremLong}</p>
                    <p className="text-[22px] mb-4">{loremBody}</p>
                    <p className="text-[22px] mb-4">{loremBody2}</p>
                  </article>

                  {/* Suggested stories */}
                  <section className="suggested-stories mb-12">
                    <SectionTitle>القصص المقترحة</SectionTitle>
                    <div className="stories">
                      {suggestedStories.map((s, i) => (
                        <Link key={i} to="#" className="block text-black no-underline group">
                          <div className="mt-5">
                            <div className="flex flex-wrap">
                              <div className="w-full sm:w-1/3">
                                <img src={s.image} alt="story" className="w-full" />
                              </div>
                              <div className="w-full sm:w-2/3 relative pr-3">
                                <p className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 text-xl font-bold group-hover:underline">
                                  {loremShort}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>

                  <article>
                    <p className="text-[22px] mb-4">{loremLong}</p>
                    <p className="text-[22px] mb-4">{loremBody}</p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/U3axpYKzyos"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-w-full"
                    ></iframe>
                    <h3 className="text-3xl font-bold mt-4 mb-4">عنوان ثاني</h3>
                    <p className="text-[22px] mb-4">{loremLong}</p>
                    <p className="text-[22px] mb-4">{loremBody2}</p>

                    {/* Keywords */}
                    <span className="keyword inline-block mr-3 text-[22px] px-6 py-2.5 bg-light-gray">لوريوم</span>
                    <span className="keyword inline-block mr-3 text-[22px] px-6 py-2.5 bg-light-gray">حسوب</span>
                    <span className="keyword inline-block mr-3 text-[22px] px-6 py-2.5 bg-light-gray">أبسويوم</span>
                  </article>
                </div>

                {/* Comments */}
                <section className="comments mt-12 mb-6">
                  <SectionTitle>التعليقات</SectionTitle>
                  <form action="/article">
                    <textarea
                      name="comment"
                      className="block w-full p-2.5 border border-gray-custom rounded-md"
                      placeholder="أكتب تعليقًا هنا ..."
                      rows={4}
                    ></textarea>
                    <button type="submit" className="btn-main text-[22px] mt-6">نشر</button>
                  </form>
                  <hr className="my-4" />

                  {[
                    { img: '/images/user_img/user_4.jpg' },
                    { img: '/images/user_img/user_2.jpg' },
                  ].map((c, i) => (
                    <div key={i} className="mt-6">
                      <div className="flex flex-wrap">
                        <div className="w-3/12 lg:w-2/12">
                          <div className="user-photo">
                            <img src={c.img} alt="user" className="w-full rounded-full" style={{ clipPath: 'circle()' }} />
                          </div>
                        </div>
                        <div className="w-9/12 lg:w-10/12">
                          <div className="comment-text">
                            <span className="block text-lg font-bold mb-6">محمد الأحمد</span>
                            <p className="text-lg">
                              لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <hr className="mt-10 mb-10" />
                </section>

                {/* Related articles */}
                <section className="related-articles">
                  <SectionTitle>مقالات ذات صلة</SectionTitle>
                  <div className="flex flex-wrap -mx-2">
                    {relatedArticles.map((a, i) => (
                      <div key={i} className="w-full sm:w-1/3 px-2 mb-5">
                        <ArticleCard image={a.image} category={a.category} title={relatedTitle} />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <a href="#" className="btn-main text-[22px] mt-6 inline-block">المزيد</a>
                  </div>
                  <hr className="mt-4 mb-10" />
                </section>
              </div>

              {/* Sidebar – most read */}
              <div className="w-full md:w-1/3 md:hidden lg:block">
                <div className="most-read pr-4">
                  <h2 className="text-2xl font-bold mb-4">الأكثر قراءة</h2>
                  {mostReadItems.map((m, i) => (
                    <Link key={i} to="#" className="block text-black no-underline group">
                      <div className="most-read-article">
                        <img src={m.image} alt="most read" className="w-full" />
                        <div className="most-read-text">
                          <h4 className="article-title">لوريوم أيبسوم: البيس اعاس اللي شكل لو</h4>
                          <time className="text-sm text-white">الأحد، 01/01/2023</time>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
