import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';
import image10 from '../assets/images/image10.jpeg';
import image11 from '../assets/images/image11.jpeg';
import image12 from '../assets/images/image12.jpeg';


const FeaturedList = () => {
  const featuredData = [
    {
      id: 1,
      title: 'Elizabeth Cowper - A Driven Leader Transforming Workplace Inclusion',
      description: 'While most of us are happy discussing how space tourism can be made feasible over say next 10 years, a […]',
      img: image1,
    },
    {
      id: 2,
      title: 'MARINA WORRE: A virtual experience like no other',
      description: 'THE DAWN OF WORRE STUDIOS Worre Studios is a state-of-the-art 25,000 square foot facility that brings virtual and traditional events into […]',
      img: image2,
    },
    {
      id: 3,
      title: 'Sanjib Sahoo: A Transformative, Growth-Minded Leader',
      description: 'Transformation is inevitable for a business if it is to survive and thrive in changing times. Most companies and leaders […]',
      img: image3,
    },
    {
      id: 4,
      title: 'Dr. Melissa Hortman – a purposefully driven disruptor',
      description: 'The Purposefully Driven Disruptor Leads Higher Education Transformation Innovation for Students of Today and Tomorrow As a purposefully driven disruptor, […]',
      img: image4,
    },
    {
      id: 5,
      title: 'Anouk Vastert: Customer Centricity Transformation Leader',
      description: 'A motivator, planner, and connector, Anouk Vastert, Global Customer Experience Advisor at SAP, believes in the importance of bringing people […]',
      img: image5,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image6,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image7,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image8,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image9,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image10,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image11,
    },
    {
      id: 6,
      title: 'Melinda Fouts: Helping Business Leaders Achieve their Peak Performance',
      description: '“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan, Former Professional Basketball […]',
      img: image12,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredData.map((item) => (
          <li key={item.id} className="flex flex-col md:flex-row items-center md:items-start justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
            {/* Clickable Image */}
            <Link to={`/featured/${item.id}`} className="w-full md:w-auto">
              <img
                src={item.img}
                alt={item.title}
                className="w-48 h-40 object-cover  mx-auto transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            {/* Text Content */}
            <div className="text-center md:text-left">
              <Link to={`/featured/${item.id}`}>
                <h2 className="text-lg font-semibold text-gray-900 break-words">
                  {item.title.split(' ').slice(0, 5).join(' ')}
                  <br />
                  {item.title.split(' ').slice(5).join(' ')}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedList;
