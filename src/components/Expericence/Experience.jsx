import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-10 lg:px-16 max-w-6xl mx-auto font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-purple-500">
        {experiences.map((experience) => (
          <div key={experience.id} className="mb-12 ml-8 relative">
            
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-2 w-8 h-8 bg-[#8245ec] rounded-full border-4 border-black flex items-center justify-center">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-5 h-5 object-contain rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div className="bg-[#0d081f] p-6 rounded-2xl border border-purple-600 shadow-[0_0_20px_rgba(130,69,236,0.25)] hover:scale-105 transition duration-300">
              
              <h3 className="text-xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-sm text-purple-400">
                {experience.company}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {experience.date}
              </p>

              <p className="mt-4 text-gray-400 text-sm">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
