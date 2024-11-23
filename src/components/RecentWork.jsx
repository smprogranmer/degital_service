import { useState } from 'react'
import imgOne from '../assets/imgOne.png'
import imgTwo from '../assets/imgTwo.png'
import imgThree from '../assets/imgThree.png'
import imgFour from '../assets/imgFour.png'
import imgFive from '../assets/imgFive.png'
import imgSix from '../assets/imgSix.png'
export default function RecentWork() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Branding', 'Illustration', 'Photography', 'Web Design']

  const works = [
    {
      id: 1,
      title: 'Time Perspective',
      category: 'Photography',
      image:imgOne,
      alt: 'Hand holding a clock emerging from a hole'
    },
    {
      id: 2,
      title: 'Floating Serenity',
      category: 'Photography',
      image: imgTwo,
      alt: 'White balloon floating above a chair'
    },
    {
      id: 3,
      title: 'Citrus Splash',
      category: 'Photography',
      image:imgThree,
      alt: 'Sliced citrus fruit with a straw in motion'
    },
    {
      id: 4,
      title: 'Minimal Glass',
      category: 'Photography',
      image:imgFour,
      alt: 'Minimalist white wine glass'
    },
    {
      id: 5,
      title: 'Sweet Moments',
      category: 'Photography',
      image: imgFive,
      alt: 'Ice cream cone being held'
    },
    {
      id: 6,
      title: 'Natural Simplicity',
      category: 'Photography',
      image: imgSix,
      alt: 'Succulent plant in a round pot'
    }
  ]

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.category === activeFilter)

  return (
    <div className="px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-red-500">Our Recent Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work showcase</h2>
        </div>
        
        <div className="mb-12 flex justify-center space-x-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={work.image}
                alt={work.alt}
                className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
                <div className="translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-center text-xl font-bold text-white">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-center text-sm text-gray-200">
                    {work.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}