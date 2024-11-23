import { Link } from "react-router-dom";
import { MdRocketLaunch, MdFlag, MdChat, MdSearch } from "react-icons/md";
const services = [
  {
    icon: "💡",
    title: "Standard Logo Design ",
    price: "1000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "🤝",
    title: "Premium Logo Design",
    price: "2000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "🏥",
    title: "Professional Logo Design",
    price: "3000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "📊",
    title: "Maximum Logo Design",
    price: "4000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

export default function Logo() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-[300px] bg-red-500  bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl  text-white">
            Logo Design Prices
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
            <li className="font-bold">LOGO</li>
          </ul>
        </nav>
      </header>
      <div className="flex h-[90vh] py-12 items-center justify-center">
        <div className="w-[70%] h-[70%]">
          <div className="mx-auto h-full rounded-xl bg-white">
            <div className="h-full grid gap-16 md:grid-cols-2">
              <div className="">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                  Innovative Ideas
                </p>
                <h1 className="text-4xl my-12 capitalize font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Make <span className="text-red-300">your business more</span>{" "}
                  productive with our help
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernaturat odit aut fugit.
                </p>
                <Link to='/contact' className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
                  <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                  <span className="relative text-xl font-semibold">
                    Text Button
                  </span>
                </Link >
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div key={index} className=" rounded-lg p-6 shadow-lg transition-shadow hover:shadow-lg hover:bg-blue-300">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-gray-600 mt-4 mb-8">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        {service.price}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
