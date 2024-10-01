import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp} from 'react-icons/fa';
import hero from '../../assets/images/hero.jpg'; 

const Footer = () => {
  return (
    <footer className="flex m-auto mt-16 flex-col md:flex-row bg-red-950 text-gray-300">
      <div
        className="relative w-full md:w-[30%] h-[400px] bg-cover bg-top text-black p-6 flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div> {/* White opacity overlay */}
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold leading-relaxed">CIO Times</h2>
          <p className="mt-4 leading-relaxed">Email: example@ciotimes.com</p> 
          <p className="leading-relaxed">Phone: (123) 456-7890</p> 
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </a>
          </div>
        </div>
      </div>

      {/* Right side  */}
      <div className="w-full mt-7 md:w-[70%] bg-[#3f0909] text-gray-300 p-6 flex flex-col  md:flex-row">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg text-white font-bold mb-4">Legal</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg text-white font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Magazines
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Advertise with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg text-white font-bold mb-4">Company Overview</h3>
          <p>
            The business world is full of enigmatic stories waiting to be seen
            and heard. At CIO Times, we handpick such tales for the world to
            acknowledge. These stories speak not just of success, but also of
            the struggle hiding behind them. As one of the top business
            magazines, we share an insight into the inner workings of different
            business sectors, through inspiring stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;