import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-10 lg:px-16 max-w-6xl mx-auto font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-28 h-1 bg-[#d1d5db] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and growth.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-500">
        {education.map((edu) => (
          <div key={edu.id} className="mb-12 ml-8 relative">
            
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-2 w-8 h-8 bg-[#d1d5db] rounded-full border-4 border-black flex items-center justify-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-5 h-5 object-contain rounded-full"
              />
            </div>

            {/* Education Card */}
            <div className="bg-[#121418] p-6 rounded-2xl border border-gray-500 shadow-[0_0_20px_rgba(156,163,175,0.2)] hover:scale-105 transition duration-300">
              
              <h3 className="text-lg font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm text-gray-300">
                {edu.school}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {edu.date}
              </p>

              <p className="mt-3 text-gray-300 font-medium">
                Grade: {edu.grade}
              </p>

              <p className="mt-3 text-gray-400 text-sm">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
