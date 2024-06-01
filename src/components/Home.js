import React, { useState, useCallback } from "react";
import Layout from "./Layout/Layout";
import ImageCard from "./ImageCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoHome from "../img/HomeVideo.mp4"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";





function Home() {
  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
    { breakPoint: 460, cardsToShow: 1 },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];






  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <Layout reponsive={responsive}>
        <video className="h-4/5	 w-full rounded-lg mb-5" autoPlay loop muted>
          <source src={videoHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="container mx-auto">
          <div class="flex justify-between ...">
            <h1 className="text-left mt-3 mb-3  text-lg font-semibold leading-9 text-white">
              My Benefits
            </h1>
            <div className="text-left mt-3 mb-3  text-lg font-semibold leading-9 text-white">

              <a href="#" className="text-white">See More</a>
            </div>

          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
              <div>
                <ImageCard imgSrc="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-08.jpg">
                  <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
                  <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
                  </p>
                </ImageCard>
              </div>
            </Slider>
          </div>
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
          <div className="card p-4"><Gallery photos={photos} className="card rounded-lg object-cover object-center" onClick={openLightbox} /></div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>














          
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
