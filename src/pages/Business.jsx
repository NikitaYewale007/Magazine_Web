import Business1 from '../assets/images/Business1.jpg'
import Business2 from '../assets/images/Business2.jpg'
import Business3 from '../assets/images/Business3.jpg'
import Business4 from '../assets/images/Business4.jpg'
import Business5 from '../assets/images/Business5.jpg'
import Business6 from '../assets/images/Business6.jpg'

const images = [
    {
      img: Business1,
      title: "Molas Chief Technology & Operations Officer Dr CP Lee Steps Down",
      description:
             "Mola’s Chief Technology & Operations OfficerDr. CP Lee, Steps Down,…"
    },
    {
      img: Business2,
      title: "IT Services",
      description:
        "IT Services IT or Information Technology services refers to the…",
    },
    {
      img: Business3,
      title: "Healthcare",
      description:
        "Healthcare If the COVID-19 pandemic has taught us anything, it…",
    },
    {
      img: Business4,
      title: "Mental Health",
      description:
        "Mental Health Mental Health refers to the emotional, vocational, environmental,…",
    },
    {
      img: Business5,
      title: "Issue Concerning Professional Growth Of Teacher",
      description:
        "Financial Education is a very important aspect in today’s world.…",
    },
    {
      img: Business6,
      title: "Enterprise Resource Planning",
      description:
        "Enterprise Resource Planning ERP is an acronym for Enterprise Resource…",
    },
  ];

  const Business = () => {
    return (
      <>
        <div className='px-10'>
          <h1 className="text-4xl font-bold mb-6 text-left"> Business</h1>
          <hr className="border-t-2 border-red-900 w-5/5 mx-auto" />
          <p className="text-xl text-gray-900 mt-9 text-left mb-6">
            #Business Blogs
          </p>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full lg:w-full">
            {images.map((image, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={image.img}
                  alt={image.title} 
                  className="w-40 h-40 rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" // Rounded image with hover-scale animation
                />
                <div className="flex flex-col text-left">
                  <a className="text-sm  mb-2 font-bold">{image.title}</a>
                  <p className="text-gray-600 ">{image.description}</p>
                </div>
              </div>
            ))}
          </div>          
        </div>
    
      </>
    );
  };
  
  export default Business;
  