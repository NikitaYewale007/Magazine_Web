import React from 'react'

export const testimonialsData = [
  {
    name: "John Doe",
    position: "Editor-in-Chief",
    message: "Working with this magazine has been a wonderful experience. The editorial team is incredibly supportive, and the quality of the publication is outstanding.",
    image: ""
  },
  {
    name: "Jane Smith",
    position: "Contributor",
    message: "I am proud to contribute to such a prestigious magazine. The content is top-notch, and the team is always striving for excellence.",
    image: ""
  },
  {
    name: "Michael Lee",
    position: "Reader",
    message: "This magazine consistently delivers insightful articles and engaging stories. I look forward to every issue!",
    image: "https"
  },
  {
    name: "Emily Davis",
    position: "Freelance Writer",
    message: "I've been working with several publications, but this magazine stands out for its professionalism and commitment to quality content.",
    image: ""
  },
  {
    name: "Robert Johnson",
    position: "Photographer",
    message: "Collaborating with this magazine has been a great opportunity. The team values creativity and the presentation of visual stories.",
    image: ""
  },
  {
    name: "Laura Wilson",
    position: "Long-time Subscriber",
    message: "I've been a subscriber for years, and this magazine never fails to impress with its insightful articles and beautiful layout.",
    image: ""
  }

];


const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="mt-4 text-gray-600">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;