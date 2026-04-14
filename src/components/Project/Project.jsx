import React from "react";
import { projects } from "../../constants";

function Project() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 lg:px-16 max-w-6xl mx-auto font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-28 h-1 bg-[#d1d5db] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Selected projects built during internships and hands-on full-stack
          practice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#121418] p-6 rounded-2xl border border-gray-500 shadow-[0_0_20px_rgba(156,163,175,0.18)] hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              {project.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-[#d1d5db] text-black px-3 py-1 text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;