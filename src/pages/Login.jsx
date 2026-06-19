import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="font-almarai">
        <div className="container mx-auto px-4 py-12 min-h-screen">
          <div className="flex flex-wrap items-center justify-center min-h-[80vh]">

            {/* Image */}
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-6/12">
              <img src="/images/login.png" alt="login" className="w-full" />
            </div>

            {/* Form */}
            <div className="w-full md:w-7/12 lg:w-5/12 xl:w-5/12 xl:mr-[8.333%]">
              <form action="/login">
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-3 text-lg border border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="email" className="block mt-1 text-sm">البريد الإلكتروني</label>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-3 py-3 text-lg border border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="password" className="block mt-1 text-sm">كلمة المرور</label>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="remember" className="w-4 h-4" />
                  <label htmlFor="remember" className="text-sm">تذكرني</label>
                </div>
                <button type="submit" className="btn-inverted text-[22px] px-8 py-1">
                  سجل الدخول
                </button>
              </form>

              <div className="flex mt-4">
                <p className="mb-0 text-sm">في حال كنت لاتمتلك حساب</p>
                <Link to="/signup" className="mr-3 text-main text-sm">إنشاء حساب جديد</Link>
              </div>

              <div className="flex mt-4">
                <p className="font-bold mx-3 mb-0 text-gray-500 text-sm">
                  أو يمكنك تسجيل الدخول باستخدام
                </p>
              </div>

              <div className="social-media-login flex gap-2 mt-2">
                <a href="#" className="text-main text-[25px] transition-all duration-500 hover:text-[rgba(184,0,0,0.5)]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-main text-[25px] transition-all duration-500 hover:text-[rgba(184,0,0,0.5)] mr-5">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
