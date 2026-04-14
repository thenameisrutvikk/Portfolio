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
      { name: "Bootstrap" },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Redux" },
      { name: "Context API" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springLogo },
      { name: "NodeJS", logo: nodeLogo },
      { name: "ExpressJS", logo: expressLogo },
      { name: "REST APIs" },
      { name: "Mongoose" },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "SQL" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Core DSA" },
      { name: "Data Structures" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman" },
      { name: "npm" },
      { name: "Multer" },
      { name: "Cloudinary" },
      { name: "JWT Authentication" },
      { name: "Agile / Scrum" },
      { name: "AWS (Basic)" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Render" },
      { name: "OpenAI API" },
      { name: "AI Integration" },
    ],
  },
];

export const ProficiencyInfo = [
  { label: "Frontend Development", value: 88 },
  { label: "Backend Development", value: 85 },
  { label: "Problem Solving", value: 90 },
];


import profileImg from "./assets/Rutvik (1).png";

export const experiences = [
  {
    id: 1,
    img: profileImg,
    role: "Software Developer Intern",
    company: "COJAG Smart Technology Pvt. Ltd.",
    date: "Nov 2025 - Present",
    desc: "Worked on Digi-Twin Survey and 3D Glove (GIS) solutions with interactive mapping and visualization. Also built an Influencer Campaign Management System with campaign workflows, influencer tracking, and analytics-driven features.",
    skills: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "GIS",
      "REST APIs",
      "Java",
    ],
  },
  {
    id: 2,
    img: profileImg,
    role: "Web Developer Intern",
    company: "Prodigy Infotech",
    date: "May 2025 - Jun 2025",
    desc: "Completed a one-month virtual internship focused on core web technologies and practical development tasks. Strengthened fundamentals in HTML, CSS, and JavaScript through hands-on implementation.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "Git",
      "Frontend Basics",
    ],
  },
];




export const education = [
  {
    id: 1,
    img: profileImg,
    degree: "B.Tech in Electronics & Telecommunication Engineering",
    school: "Karmaveer Dadasaheb Kannamwar College of Engineering, Nagpur",
    date: "Nov 2022 - Jul 2026",
    grade: "67%",
    desc: "Built a strong base in engineering fundamentals while focusing on software development, data structures, and full-stack web technologies.",
  },
  {
    id: 2,
    img: profileImg,
    degree: "HSC (12th Science)",
    school: "Yashwant Mahavidyala, Nanded",
    date: "Apr 2020 - Jun 2022",
    grade: "69.83%",
    desc: "Studied Physics, Chemistry, and Mathematics with consistent focus on analytical and logical problem solving.",
  },
  {
    id: 3,
    img: profileImg,
    degree: "SSC (10th)",
    school: "Shri Shivaji High School, Sonkhed",
    date: "Jan 2019 - Mar 2020",
    grade: "89.00%",
    desc: "Established a strong academic foundation with disciplined learning and consistent performance.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    desc: "Built a MERN-based system for employee records, attendance, leave tracking, salary workflows, and secure JWT-based admin management.",
    tech: ["MERN", "JWT", "MongoDB", "REST APIs"],
  },
  {
    id: 2,
    title: "Khana.com - Food Delivery Web Application",
    desc: "Developed a food delivery platform with restaurant listing, ordering flow, delivery tracking, role-based access, and media handling.",
    tech: ["MERN", "JWT", "Multer", "Cloudinary"],
  },
  {
    id: 3,
    title: "TATVA-AI",
    desc: "Created a full-stack AI-enabled MERN application with authentication, responsive UI, secure APIs, and optimized frontend-backend data flow.",
    tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
  },
  {
    id: 4,
    title: "Personal Portfolio",
    desc: "Designed and implemented a responsive personal portfolio showcasing projects, skills, and experience with modern UI practices.",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript"],
  },
];
