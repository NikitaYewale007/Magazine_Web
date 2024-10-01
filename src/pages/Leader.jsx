import React from "react";
import Leader1 from "../assets/images/leader1.jpg";
import Leader2 from "../assets/images/leader2.jpg";
import Leader3 from "../assets/images/leader3.png";

const leaders = [
  {
    img: Leader1,
    title: "Sanjib Sahoo: A Transformative, Growth-Minded Leader",
  },
  {
    img: Leader2,
    title: "Albert Yip – A Thought Leader and Influencer Who Walks his Talk",
  },
  {
    img: Leader3,
    title: "Alexis Head:Polo House Prive",
  },
];
const Leader = () => {
  return (
    <>
      <div className="flex items-center justify-center my-4 mb-14">
        <hr className="border-t-2 border-red-900 w-1/3 mx-2" />
        <span className="bg-red-900 text-white text-2xl w-56 font-bold py-1 px-4">Leaders</span>
        <hr className="border-t-2 border-red-900 w-1/3 mx-2" />
      </div>

      <div className="container  flex flex-col lg:flex-row justify-evenly">
        {leaders.map((leader, index) => (
          <div key={index} className="flex flex-col w-50 items-center">
            <img
              src={leader.img}
              alt={leader.title}
              className="w-80 h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 w-80 text-left">
              {leader.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leader;
