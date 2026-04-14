// src/components/Skills/Skills.jsx
import React from "react";
import { ProficiencyInfo, SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto font-sans"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#d1d5db] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-8 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#121418] px-8 py-8 w-full sm:w-[47%] rounded-2xl border border-gray-500
          shadow-[0_0_20px_rgba(156,163,175,0.2)]"
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2 border border-gray-700 rounded-3xl py-2 px-3 hover:border-gray-400 transition"
                >
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                  ) : (
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 text-[10px] sm:text-xs text-gray-200 flex items-center justify-center font-semibold">
                      {skill.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  )}
                  <span className="text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>

    {/* Proficiency Block */}
    <div className="mt-20 bg-[#121418] border border-gray-600/70 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_0_24px_rgba(156,163,175,0.15)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-8">
            Proficiency
          </h3>

          <div className="space-y-8">
            {ProficiencyInfo.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs sm:text-sm tracking-wide text-gray-300 uppercase font-semibold">
                    {item.label}
                  </p>
                  <span className="text-lg font-bold text-gray-200">
                    {item.value}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-gray-700/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-gray-300 to-white"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
          <svg
            viewBox="0 0 460 280"
            className="w-full h-auto"
            role="img"
            aria-label="Developer working on laptop illustration"
          >
            <rect x="90" y="52" width="250" height="128" rx="8" fill="none" stroke="#f3f4f6" strokeWidth="3" />
            <rect x="98" y="192" width="240" height="18" rx="9" fill="#d1d5db" />
            <rect x="40" y="208" width="380" height="16" rx="8" fill="#9ca3af" />

            <rect x="112" y="76" width="90" height="12" rx="6" fill="#e5e7eb" />
            <rect x="112" y="98" width="72" height="12" rx="6" fill="#e5e7eb" />
            <rect x="112" y="120" width="54" height="12" rx="6" fill="#e5e7eb" />
            <rect x="260" y="76" width="64" height="12" rx="6" fill="#e5e7eb" />
            <rect x="260" y="140" width="64" height="12" rx="6" fill="#e5e7eb" />

            <polyline points="84,196 124,120 174,66" fill="none" stroke="#111827" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="352,196 424,152 410,84 350,50" fill="none" stroke="#111827" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="174" y1="66" x2="218" y2="50" stroke="#111827" strokeWidth="18" strokeLinecap="round" />
            <line x1="350" y1="50" x2="314" y2="62" stroke="#111827" strokeWidth="18" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
