import React from "react";

import imgSix from "../assets/imgSix.png";

import { MdRocketLaunch, MdFlag, MdChat, MdSearch } from "react-icons/md";


import RecentWork from "../components/RecentWork";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>

      <div className="  px-10 relative pt-[10rem]  pb-20 overflow-x-hidden ">
        {/* Navigation */}

        {/* Hero Content */}
        <h1 className="text-6xl text-[6rem] font-bold text-black/90 leading-tight mb-6">
          We Build Digital Products Exactly as They Were Designed
        </h1>
        <div className="container  px-4 pt-32  ">
          <div className="max-w-3xl">
            <p className="text-lg  mb-8 max-w-xl">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
            <button className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold">
                Text Button
              </span>
            </button>
          </div>
        </div>

        {/* bler div  */}
        <div className="absolute top-[-200px] left-[-200px] w-[30rem] h-[30rem] bg-blue-700 rounded-full  blur-[150px]"></div>
        <div className="absolute bottom-[80px] right-[-200px] w-[30rem] h-[38rem] bg-blue-700 rounded-full  blur-[150px]"></div>
      </div>

      <section className=" py-12 flex items-center bg-blue-50 justify-center">
        <div className=" px-4 py-12 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-8">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                  Innovative Ideas
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Make your work more productive with our help
                </h1>
                <p className="text-lg text-gray-600">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernaturat odit aut fugit.
                </p>
                <button className="rounded-md bg-[#8BC34A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7CB342] shadow-md hover:shadow-lg">
                  About Us
                </button>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-4 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg hover:bg-blue-200">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <MdRocketLaunch
                      className="h-6 w-6 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">Unique</h2>
                  <p className="text-gray-600">Consectetur adipiscing elit.</p>
                </div>
                <div className="space-y-4 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg hover:bg-blue-200">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <MdFlag
                      className="h-6 w-6 text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">Modern</h2>
                  <p className="text-gray-600">Consectetur adipiscing elit.</p>
                </div>
                <div className="space-y-4 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg hover:bg-blue-200">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                    <MdChat
                      className="h-6 w-6 text-yellow-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">Ultimate</h2>
                  <p className="text-gray-600">Consectetur adipiscing elit.</p>
                </div>
                <div className="space-y-4 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg hover:bg-blue-200">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <MdSearch
                      className="h-6 w-6 text-purple-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">Liable</h2>
                  <p className="text-gray-600">Consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentWork />

      <div className="bg-white px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={imgSix}
                  alt="Team of business professionals collaborating"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg">
                <div className="rounded-full bg-red-100 p-3 text-red-500 font-bold text-xl">
                  8.8k
                </div>
                <div>
                  <p className="font-semibold">Trusted by</p>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-wider text-red-500">
                Our Introduction
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Largest Business Experts
              </h1>

              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Lorem Ipsum is simply dummy text of the printing available in
                  the market for free uses.
                </p>
                <p>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the when an unknown was popularised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-blue-100 py-16 sm:py-24 lg:py-32 my-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight ">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg ">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <dt className="mt-4 text-base font-semibold text-black">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-black">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="mt-4 text-base font-semibold text-black">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-black">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
