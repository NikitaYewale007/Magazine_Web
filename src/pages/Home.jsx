import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WomenInBusiness from './WomenInBusiness';

// images
import C_img1 from '../assets/images/C_img1.webp';
import C_img2 from '../assets/images/C_img2.webp';
import C_img3 from '../assets/images/C_img3.webp';
import C_img4 from '../assets/images/C_img4.webp';
import C_img5 from '../assets/images/C_img5.webp';
import C_img6 from '../assets/images/C_img6.webp';
import Leader from './Leader';
import Hospitality from './Hospitality';
import Business from './Business';

const images = [
  {
    img: C_img1,
    heading: 'Tina Mara: Inspiring People to Transform, Achieve Greatness And Spread Positivity',
    para: 'Award Winning Awakening Mentor & Expert in guiding HSPs, Intuitives and Empaths on their Journey to Higher Levels of Consciousness.',
  },
  {
    img: C_img2,
    heading: 'Pilar Mendiola-Fernández: Beyond Boundaries: Navigating The New Era Of Enterprise Leadership And Environmental Stewardship',
    para: 'In a career spanning nearly 3 decades, Pilar Mendiola-Fernández has made her mark.',
  },
  {
    img: C_img3,
    heading: 'Dr. Takahisa Karita: An Entrepreneur with a Stellar Vision and Business Acumen',
    para: 'op 10 Business Leaders to Watch in 2023 by International Business Times. Top Serial Entrepreneur of The Year 2024 by IAOTP. Forbes Business Council Member. SDGs, Climate Action, Blockchain, AI, IP licensing experts',
  },
  {
    img: C_img4,
    heading: 'Kathy May-Martin: A Real Estate Professional Whose Journey Mirrors Resilience and Adaptability',
    para: 'Realtor® at Coldwell Banker Jim Henry & Associates | Roane County | Meigs Count | I Guarantee My Personal Best.',
  },
  {
    img: C_img5,
    heading: 'Marion Burchell: Providing Practical and Pragmatic Solutions for Individual and Organizational Success',
    para: 'Managing Director Azolla Holdings Pty Ltd | Board Member | Innovator | Speaker | Writer',
  },
  {
    img: C_img6,
    heading: 'Pilar Mendiola-Fernández: Beyond Boundaries: Navigating the New Era of Enterprise Leadership and Environmental Stewardship',
    para: 'In a career spanning nearly 3 decades',
  },
];

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-full overflow-hidden h-full mt-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative ">
            <img src={image.img} alt={image.heading} className="w-full h-screen object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col  text-left  p-10 "> {/* Center the content */}
              <button className="bg-red-800 w-24 text-white  px-2 py-1 text-sm uppercase font-semibold mb-4"> {/* Smaller Button */}
                Featured
              </button>
              <h2 className="text-white text-3xl font-bold mb-4 break-words leading-snug max-w-lg">
                {image.heading.split(': ').join(': \n')} {/* Breaking the heading into multiple lines */}
              </h2>
              <p className="text-gray-300 text-base leading-snug max-w-lg">
                {image.para.split(',').join(',\n')} {/* Breaking the paragraph as needed */}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-12">
        <WomenInBusiness />
      </div>
      <div className="mt-12">
        <Leader />
      </div>
      <div className="mt-12">
        <Hospitality />
      </div>
      <div className="mt-12">
        <Business />
      </div>
    </div>
    
  );
};


export default CustomCarousel;