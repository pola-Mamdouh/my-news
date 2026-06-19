import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-12 font-almarai">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* من نحن */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="footer-title text-xl font-bold">من نحن</h4>
            <ul className="list-none p-0">
              {['من نحن', 'سياسة الخصوصية', 'الأحكام والشروط', 'عن المنصة'].map((item) => (
                <li key={item} className="mt-3">
                  <a href="#" className="text-black no-underline hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* تواصل معنا */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="footer-title text-xl font-bold">تواصل معنا</h4>
            <ul className="list-none p-0">
              {['تواصل معنا', 'أعلن معنا', 'وظائف شاغرة'].map((item) => (
                <li key={item} className="mt-3">
                  <a href="#" className="text-black no-underline hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* وسائل التواصل */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="footer-title text-xl font-bold">وسائل التواصل</h4>
            <ul className="list-none p-0">
              <li className="mt-3"><i className="fa-solid fa-location-dot ml-1"></i> مكة المكرمة</li>
              <li className="mt-3"><i className="fa-solid fa-phone ml-1"></i> 0 341 02251144</li>
              <li className="mt-3"><i className="fa-solid fa-envelope ml-1"></i> info@mynews.com</li>
            </ul>
          </div>

          {/* تابعنا على */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="footer-title text-xl font-bold">تابعنا على</h4>
            <ul className="list-none p-0 text-center">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((name) => (
                <li key={name} className="inline mx-2.5">
                  <a href="#">
                    <img
                      src={`/images/social_media/${name}.png`}
                      alt={name}
                      className="w-10 inline"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-center mt-3">
              <Link to="/" className="text-main text-3xl font-bold no-underline">
                أخباري
              </Link>
            </div>
            <div className="text-center mt-3 text-sm">
              جميع الحقوق محفوظة @ {year}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
