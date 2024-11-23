import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-[300px] bg-red-500  bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl  text-white">
            Contact Us
          </h1>
        </div>
        <nav className="absolute -bottom-[1rem] left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-4 py-2 rounded-t-lg">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                HOME
              </Link>
            </li>
            <span>/</span>
            <li className="font-bold">CONTACT</li>
          </ul>
        </nav>
      </header>

      <main className="flex h-[80vh] items-center justify-center px-4 mt-12">
        <div className="flex  gap-20 ">
          {/* Direct Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DIRECT CONTACT US</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-700">(555) 764 890 345</p>
                  <p className="text-gray-700">(555) 874 846 098</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-700">info@domain.com</p>
                  <p className="text-gray-700">hello@domain.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-700">Johnson Super Street,</p>
                  <p className="text-gray-700">New York, USA 2344</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
            <form onSubmit={handleSubmit} className="w-[40rem] space-y-4">
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full h-[3.5rem] rounded-xl bg-rose-200 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-3 h-[3.5rem] rounded-xl bg-rose-200 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 h-[3.5rem] rounded-xl bg-rose-200 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-3 h-[3.5rem] rounded-xl bg-rose-200 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-3 py-2 h-[3.5rem] rounded-xl bg-rose-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <textarea
                name="message"
                placeholder="Messages...."
                rows={5}
                className="w-full px-3 h-[12rem] rounded-xl bg-rose-200 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>SUBMIT</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

