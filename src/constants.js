// src/constants.js

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import cssLogo from "./assets/tech_logo/css.png";
import expressLogo from "./assets/tech_logo/express.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import htmlLogo from "./assets/tech_logo/html.png";
import javaLogo from "./assets/tech_logo/java.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import nodeLogo from "./assets/tech_logo/nodejs.png";
import reactLogo from "./assets/tech_logo/reactjs.png";
import springLogo from "./assets/tech_logo/springboot.png";
import tailwindLogo from "./assets/tech_logo/tailwindcss.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "ReactJS", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJS", logo: nodeLogo },
      { name: "ExpressJS", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Spring Boot", logo: springLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];


import profileImg from "./assets/Rutvik (1).png";

export const experiences = [
  {
    id: 1,
    img: profileImg,
    role: "Full Stack Developer Intern",
    company: "COJAG Smart Technology",
    date: "Aug 2025 - Present",
    desc: "Worked on MERN stack applications, developed responsive UI components using React and Tailwind CSS, and built REST APIs with Node.js and Express. Optimized performance and improved user experience.",
    skills: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Java",
    ],
  },
  {
    id: 2,
    img: profileImg,
    role: "Web Development Trainee",
    company: "Amplemind Technologies",
    date: "Jan 2025 - Jul 2025",
    desc: "Built multiple full-stack projects including portfolio website and CRUD applications. Strengthened problem-solving skills and understanding of frontend-backend integration.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "ReactJS",
      "Git",
      "GitHub",
    ],
  },
];




export const education = [
  {
    id: 1,
    img: profileImg,
    degree: "B.Tech in Electronics & Telecommunication",
    school: "KDK College of Engineering, Nagpur",
    date: "2022 - 2026",
    grade: "CGPA: 6.5",
    desc: "Focused on software development, data structures, and full-stack web technologies. Actively built projects and strengthened problem-solving skills.",
  },
  {
    id: 2,
    img: profileImg,
    degree: "Higher Secondary (12th Science)",
    school: "YESHWANT MAHAVIDYALAYA, NANDED",
    date: "2020 - 2022",
    grade: "Percentage: 69.83%",
    desc: "Studied Physics, Chemistry, and Mathematics with a strong focus on logical reasoning and analytical thinking.",
  },
  {
    id: 3,
    img: profileImg,
    degree: "Secondary School (10th)",
    school: "SHRI SHIVAJI HIGH SCHOOL, SONKHED",
    date: "2019 - 2020",
    grade: "Percentage: 89.00%",
    desc: "Built foundational academic knowledge and developed discipline, consistency, and analytical mindset.",
  },
];
