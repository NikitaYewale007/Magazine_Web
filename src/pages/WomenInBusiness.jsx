import Women1 from "../assets/images/women1.png";
import Women2 from "../assets/images/women2.png";
import Women3 from "../assets/images/women3.png";
import Women4 from "../assets/images/women4.png";
import Women5 from "../assets/images/women5.png";
import Women6 from "../assets/images/women6.png";
import WomenImage from "../assets/images/WomenImage.jpg";

const images = [
  {
    img: Women1,
    title: "Desha Jackson: A Born Visionary Leader",
    category: "women",
    description:
      "Desha Jackson has been a trailblazer in visionary leadership, inspiring future generations to pursue their goals with confidence.",
  },
  {
    img: Women2,
    title: "Sadie St Lawrence",
    category: "women",
    description:
      "Sadie St Lawrence is a global leader, known for her incredible work in AI and data, shaping the future of the industry.",
  },
  {
    img: Women3,
    title: "Brooke Lewis Bellas",
    category: "women",
    description:
      "Brooke Lewis Bellas is a passionate advocate for women’s empowerment and entrepreneurship in the business world.",
  },
  {
    img: Women4,
    title: "Virgilia Virjoghe -VV Global Partners",
    category: "women",
    description:
      "Virgilia Virjoghe is a key figure in the global business community, leading her company with vision and integrity.",
  },
  {
    img: Women5,
    title: "Anuradha Shroff - Helping Leaders Re-Align Their Purpose",
    category: "women",
    description:
      "Anuradha Shroff is a consultant and speaker, helping business leaders realign with their purpose to achieve greater success.",
  },
  {
    img: Women6,
    title: "DIANE RAVITCH: Life Of Author",
    category: "women",
    description:
      "Diane Ravitch is a renowned author whose work has influenced educational policies around the world.",
  },
];

const WomenInBusiness = () => {
  return (
    <>
      <div className="px-10">
        <h1 className="text-4xl font-bold mb-6 text-left">Women in Business</h1>
        <hr className="border-t-2 border-red-900 w-5/5 mx-auto" />
        <p className="text-xl text-gray-500 mt-9 text-left mb-6">
          #Business Blogs
        </p>
      </div>
      <div className="container mx-auto  flex flex-col lg:flex-row items-start justify-between gap-8 px-10 py-10">
        {/* Left side - 6 images with data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-2/3">
          {images.map((image, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={image.img}
                alt={image.title} // Use title for accessibility
                className="w-40 h-40 rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" // Rounded image with hover-scale animation
              />
              <div className="flex flex-col text-left">
                <span className="text-red-600 text-sm uppercase mb-2">
                  {image.category}
                </span>

                <h3 className="text-xl  mb-2">{image.title}</h3>
                {/* <p className="text-gray-600">{image.description}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Women Image  */}
        <div className="flex justify-center my-20  h-full w-full lg:w-1/3">
          <div className="relative">
            <img
              src={WomenImage}
              alt="Dr. Melissa Hortman"
              className="w-full h-96  object-cover"
            />
            <div className="absolute inset-0 flex flex-col text-left bg-black bg-opacity-50 p-6">
              <h2 className="text-white text-3xl font-bold mb-4">
                Dr. Melissa Hortman – A Purposefully Driven Disruptor
              </h2>
              <p className="text-gray-300 text-lg">
                The Purposefully Driven Disruptor Leads Higher Education
                Transformation Innovation for Students of Today and Tomorrow. As
                a purposefully driven disruptor.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default WomenInBusiness;
