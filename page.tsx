"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

import Hero from "@/component/Hero";

export default function Home() {
  return (
    <main>
      <title>Mishal Nadeem Porfolio</title>
      {/*Navbar sec */}

      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdcbakIkg3aBJIFO_qB1SIyXjJqlPnxzyw&"
                alt="logo"
                className="h-15 w-20 rounded-lg"
              />
            </div>
            <svg
              imageRendering="https://encrypted-tbn0.gstatic.com/images?q stroke-linecap="
              stroke-width="2"
              className="w-10 h-10 text-white p-2 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-1 text-xl">Mishal Nadeem</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center cursor-pointer text-base justify-center">
            <a className="mr-5 hover:text-gray-400">Home </a>
            <a className="mr-5 hover:text-gray-400">About</a>
            <a className="mr-5 hover:text-gray-400">Contact</a>
            <a className="mr-5 hover:text-gray-400">Privicy Policy</a>
          </nav>
          <button className="inline-flex items-center hover:bg-gray-200 bg-gray-400 py-1 px-3 cursor-pointer rounded text-base mt-4 md:mt-0">
            Join Me
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      {/*Navbar sec */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-2/5 w-5/6 mb-10 object-cover object-center rounded hover:bg-white"
            alt="hero"
            src="https://www.beautiful-you.in/wp-content/uploads/2023/06/34-1.jpg"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            {/*typewriter sec */}

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "UI X UX Designer",
                    "Graphic Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              As a passionate web developer, I specialize in creating dynamic
              and user-friendly websites that enhance online experiences. With a
              solid foundation in HTML, CSS, and JavaScript, I strive to bring
              innovative designs to life while ensuring optimal functionality.
              My approach combines creativity and technical expertise, allowing
              me to build responsive and accessible web applications.
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-black"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div className="flex">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-blue-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-blue-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/*image card */}

        <div className="max-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2">
          <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans mx-aut0  mb-5 mt-1 ml-20  ">
            <div className="min-h-[245px]">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*uFUmcxXFdd8YxAw6.jpg"
                alt="Todo list app"
                className="w-full h-full rounded-lg "
              />
            </div>

            <div className="p-b text-center">
              <h1 className="text-xl font-black text-black">Todo List App</h1>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                This to-do list app allows users to efficiently manage their
                tasks with a clean and intuitive interface. Built using
                TypeScript for type safety and enhanced development experience,
                the app utilizes JavaScript for dynamic interactions 
                Additionally, users can filter tasks based on
                their completion status, enhancing organization and
                productivity.
              </p>
              <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                {" "}
                Explore more{" "}
              </button>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans mx-aut0  mb-5 mt-1 ml-10  ">
            <div className="min-h-[245px]">
              <img
                src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/action-adventure-games-tomb-raider.jpg"
                alt="Todo list app"
                className="w-full h-full rounded-lg "
              />
            </div>

            <div className="p-b text-center">
              <h1 className="text-xl font-black text-black">Advanture Game</h1>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                This adventure game immerses players in a rich, interactive
                world where they can explore, solve puzzles, and battle enemies.
                Developed using TypeScript for robust type checking, the game
                features smooth animations and dynamic gameplay mechanics
                powered by JavaScript. Players embark on quests, collect items,
                and make choices that impact the storyline, fostering a sense of
                agency and adventure. 
              </p>
              <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
                {" "}
                Explore more{" "}
              </button>
            </div>
          </div>
        </div>

        {/*footer sec*/}

        <footer className="bg-indigo-800 body-font">
          <div className="container px-5 py-4 mx-auto"></div>
          <div className="flex flex-wrap md:text-left text-center -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 mt-6 pt-7">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-black ml-10"
                >
                  Newsletter
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50  ml-10 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <br />
              <button className="inline-flex ml-20 mb-20 text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <p className="text-red-500 text-sm md:ml-6 md:mt-0 mt-6 sm:text-left text-center">
                <br className="lg:block hidden" />
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-between md:justify-start md:w-auto">
              <a className="text-white absolute-left-10 mr-[100px]">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className=" text-white  mr-[50px]">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className=" text-white mr-[50px]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className=" text-white  mr-[50px]">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>

          <div className="bg-gray-100 ">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2024 MISHAL NADEEM—
                <a
                  href="https://github.com/Mishal55"
                  className="text-gray-600 ml-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Portfolio website
                </a>
              </p>
              <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                Copyright@ All right reserved
              </span>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
