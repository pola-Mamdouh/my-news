import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ArticleCard from '../components/ArticleCard'
import HeroCarousel from '../components/HeroCarousel'
import VideoCarousel from '../components/VideoCarousel'

/* ── data ── */
const newsArticles = [
  { image: '/images/picture-12.jpg', category: 'اقتصاد' },
  { image: '/images/picture-1.jpg',  category: 'اقتصاد' },
  { image: '/images/picture-2.jpg',  category: 'اقتصاد' },
  { image: '/images/picture-3.jpg',  category: 'اقتصاد' },
  { image: '/images/picture-10.jpg', category: 'اقتصاد' },
  { image: '/images/picture-14.jpg', category: 'اقتصاد' },
  { image: '/images/picture-15.jpg', category: 'اقتصاد' },
  { image: '/images/picture-13.jpg', category: 'اقتصاد' },
]

const opinionUsers = [
  { img: 'user_1.jpg' }, { img: 'user_7.jpg' }, { img: 'user_6.jpg' }, { img: 'user_5.jpg' },
  { img: 'user_4.jpg' }, { img: 'user_1.jpg' }, { img: 'user_3.jpg' }, { img: 'user_2.jpg' },
]

const newsTitle = 'لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر'
const opinionTitle = 'لوريم ايبسوم دولار سيت أميت كونسيكتيتور'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Header ── */}
      <header className="font-almarai">
        <div className="mt-[50px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Carousel col */}
              <div className="w-full lg:w-7/12">
                <HeroCarousel />
              </div>

              {/* Header articles col */}
              <div className="w-full lg:w-5/12">
                <div className="mt-[50px]">
                  {[
                    '/images/picture-12.jpg',
                    '/images/picture-13.jpg',
                    '/images/picture-11.jpg',
                  ].map((img, i) => (
                    <Link
                      key={i}
                      to="/article"
                      className="block text-black no-underline group mt-10"
                    >
                      <div className="flex flex-wrap">
                        <div className="w-5/12">
                          <img src={img} alt="article" className="w-full" />
                        </div>
                        <div className="w-7/12 pr-3">
                          <span className="inline-block bg-main text-white text-sm px-2.5 py-1 ml-2.5">
                            اخبار
                          </span>
                          <h5 className="inline text-black text-base group-hover:underline">
                            لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر حسوب والأكاديمية، لوريوم أيبسويوم
                          </h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="font-almarai">

        {/* ── News Section ── */}
        <section className="py-12 px-[50px]">
          <div className="container mx-auto px-4">
            <SectionTitle>الأخبار</SectionTitle>
            <div className="flex flex-wrap -mx-2">
              {newsArticles.map((a, i) => (
                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mt-4">
                  <ArticleCard
                    image={a.image}
                    category={a.category}
                    title={newsTitle}
                    imgClass="max-h-[170px] object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="#" className="btn-main text-xl">المزيد</a>
            </div>
          </div>
        </section>

        {/* ── Most Read Section ── */}
        <section className="py-12 px-[50px] bg-light-gray">
          <div className="container mx-auto px-4">
            <SectionTitle>الأكثر قراءة</SectionTitle>

            {/* Card 1 – with text */}
            <MostReadCard1 />

            {/* Card 2 – full-width image with red bar */}
            <div className="bg-white mx-[30px] my-[30px] p-[50px]">
              <Link to="/article" className="block text-black no-underline group">
                <div className="card-img-wrap">
                  <img src="/images/picture-15.jpg" alt="most read" className="w-full" />
                </div>
                <div className="mt-5">
                  <h4 className="text-[30px] font-bold group-hover:underline">
                    لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت
                  </h4>
                  <time className="text-gray-custom text-base">الأحد، 18-12-2022</time>
                </div>
              </Link>
            </div>

            {/* Card 3 – with text */}
            <MostReadCard1 />
          </div>
        </section>

        {/* ── Opinions Section ── */}
        <section className="py-12 px-[50px]">
          <div className="container mx-auto px-4">
            <SectionTitle>مقالات الرأي</SectionTitle>
            <div className="flex flex-wrap">
              {opinionUsers.map((u, i) => (
                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <Link to="/article" className="no-underline">
                    <div className="opinions-card p-[20px_10px] bg-[rgba(184,0,0,0.3)] mt-6 transition-all duration-500 hover:bg-[rgba(184,0,0,0.6)] group">
                      <h5 className="text-base font-bold text-center text-black group-hover:underline">
                        {opinionTitle}
                      </h5>
                      <div className="user-info mt-6">
                        <img src={`/images/user_img/${u.img}`} alt="user" />
                        <span className="text-main text-lg font-bold">أحمد محمد</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Videos Section ── */}
        <section className="py-12 px-[50px] bg-black">
          <div className="container mx-auto px-4">
            <SectionTitle light>فيديو</SectionTitle>
            <VideoCarousel />
          </div>
        </section>

        {/* ── Latest News Section ── */}
        <section className="py-12 px-[50px]">
          <div className="container mx-auto px-4">
            <SectionTitle>أحدث الأخبار</SectionTitle>
            <div className="flex flex-wrap">
              {/* Left big article */}
              <div className="w-full md:w-1/2">
                <Link to="/article" className="block text-black no-underline group">
                  <img src="/images/picture-17.jpg" alt="latest" className="w-full" />
                  <div className="mt-3">
                    <span className="inline-block bg-main text-white text-sm px-2.5 py-1 ml-2.5">اقتصاد</span>
                    <h5 className="inline text-black text-lg group-hover:underline">لوريوم أيكسسيبتيور الأحمد نص</h5>
                    <p className="mt-2 text-black">
                      أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايمكيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات
                    </p>
                  </div>
                </Link>
              </div>

              {/* Right column */}
              <div className="w-full md:w-1/2 pr-2">
                <Link to="/article" className="block text-black no-underline group">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2">
                      <img src="/images/picture-10.jpg" alt="latest" className="w-full" />
                    </div>
                    <div className="w-full sm:w-1/2 pr-2">
                      <span className="inline-block bg-main text-white text-sm px-2.5 py-1 ml-2.5">تكنولوجيا</span>
                      <h5 className="inline text-black text-sm group-hover:underline">
                        أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايمكيواس نوستريد
                      </h5>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-wrap mt-4">
                  <div className="w-full sm:w-1/2">
                    <Link to="/article" className="block text-black no-underline group">
                      <img src="/images/picture-13.jpg" alt="latest" className="w-full" />
                      <div className="mt-3">
                        <span className="inline-block bg-main text-white text-xs px-2.5 py-1 ml-2.5">حاسوب</span>
                        <h5 className="inline text-black text-sm group-hover:underline">
                          نكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
                        </h5>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <Link to="/article" className="block text-black no-underline group">
                      <img src="/images/picture-12.jpg" alt="latest" className="w-full" />
                      <div className="mt-3">
                        <span className="inline-block bg-main text-white text-xs px-2.5 py-1 ml-2.5">اخبار</span>
                        <h5 className="inline text-black text-sm group-hover:underline">
                          نكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
                        </h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a href="#" className="btn-main text-xl">المزيد</a>
            </div>
            <hr className="mt-10" />
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

/* ── Shared most-read card with text ── */
function MostReadCard1() {
  const body = 'لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايمكيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات'

  return (
    <div className="bg-white mx-[30px] my-[30px] p-[50px]">
      <Link to="/article" className="block text-black no-underline group">
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12">
            <img src="/images/picture-12.jpg" alt="most read" className="w-full" />
          </div>
          <div className="w-full md:w-7/12 pr-4">
            <h4 className="text-[30px] font-bold group-hover:underline">
              لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت
            </h4>
            <p className="text-sm mt-9 line-clamp-3">{body}</p>
            <time className="text-gray-custom text-base">الأحد، 18-12-2022</time>
          </div>
        </div>
      </Link>
    </div>
  )
}
