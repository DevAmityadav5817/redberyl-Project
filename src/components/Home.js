import React from "react";
import Layout from "./Layout/Layout";
import Slider from "react-styled-carousel";
import ImageCard from "./ImageCard"

function Home() {
  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
    { breakPoint: 460, cardsToShow: 1 },
  ];
  return (
    <>

      <Layout reponsive={responsive}>
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="flex justify-between ...">
            <h1 className="text-left mt-3 mb-3  text-lg font-semibold leading-9 text-white">
              My Benefits
            </h1>
            <div className="text-left mt-3 mb-3  text-lg font-semibold leading-9 text-white">

              <a href="#" className="text-white">See More</a>
            </div>

          </div>

          <Slider reponsive={responsive}>
            <div>
              <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg">
                <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                </p>
              </ImageCard>
            </div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>

          </Slider>
          <h1 className="text-center mt-3 mb-3  text-lg font-semibold leading-12 text-white">
            Curated Offers
          </h1>
          <div className="flex justify-between mb-4">
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
            <div><ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg">
              <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
              <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
              </p>
            </ImageCard></div>
          </div>
          <h1 className="text-center mt-3 mb-3  text-lg font-semibold leading-12 text-white">
            Event & Gallery
          </h1>
          <div class="container mx-auto  py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center mt-3 mb-3  text-lg font-semibold leading-12 text-white">
            The legendary membership for a magnificient experience.
          </h1>
          <video className="h-full w-full rounded-lg mb-5" controls autoPlay muted>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Layout>
    </>
  );
}
export default Home;
