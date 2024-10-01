import React from 'react'
import hospitality1 from "../assets/images/hospitality1.jpg";
import hospitality2 from "../assets/images/hospitality2.jpg";
import hospitality3 from "../assets/images/hospitality3.jpg";
import hospitality4 from "../assets/images/hospitality4.jpg";

const leaders = [
    {
      img: hospitality1,
      title: "Sanjib Sahoo: A Transformative, Growth-Minded Leader",
    },
    {
      img: hospitality2,
      title: "Albert Yip – A Thought Leader and Influencer Who Walks his Talk",
    },
    {
      img: hospitality3,
      title: "Alexis Head:Polo House Prive",
    },
    {
        img: hospitality4,
        title: "Alexis Head:Polo House Prive",
      },
  ];
const Hospitality = () => {
  return (
    <>
    <div className='px-10'>
        <h1 className="text-4xl font-bold mb-6 mx-10 text-left">Hospitality</h1>
        <hr className="border-t-2 border-red-900 w-5/5 mx-10" />
        <p className="text-xl text-gray-500 mt-9 text-left mb-6 mx-10">
          #ArticesTalk
        </p>
      </div>
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 px-16 py-10">
        {leaders.map((leader, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={leader.img} alt={leader.title} className="w-70 h-60 object-cover" />
            <h3 className="text-xl font-bold mt-4 max-w-full text-center">{leader.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Hospitality