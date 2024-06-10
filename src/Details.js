// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import laravel from "./assets/techstack/Laravel.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/seecare.jpeg";
import projectImage2 from "./assets/projects/washup.jpeg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Fahrul Rozi",
  tagline: "Menciptakan Kemungkinan di Setiap Kesempatan",
  img: profile,
  about: `Halo, saya adalah seorang mahasiswa Informatika yang memiliki minat besar dalam teknologi dan alam. Saya menemukan keseimbangan antara menciptakan solusi melalui kode dan menikmati tantangan mendaki gunung. Dua minat ini membantu saya melihat dunia dari berbagai perspektif dan terus mendorong saya untuk belajar dan tumbuh.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://github.com/ozkun-code",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Operator Produksi",
    Company: "PT Chemco Harapan Nusantara",
    Location: "Indonesia",
    Type: "Full Time",
    Duration: "2018 - 2020",
  },
  {
    Position: "Packer",
    Company: "PT Softex Indonesia",
    Location: "Indonesia",
    Type: "Full Time",
    Duration: "2020 - 2021",
  },
  {
    Position: "Quality Control",
    Company: "PT Aisin Indonesia Automotive",
    Location: "Indonesia",
    Type: "Full Time",
    Duration: "2021 - 2022",
  },
];

// Enter your Education Details here

export const eduDetails = [
  {
    Position: "Junior Web Developer",
    Company: "Kementrian Komunikasi dan Informasi",
    Location: "Indonesia",
    Type: "BNSP",
    Duration: "2023",
  },
  {
    Position: "SEO 101 Cara membuat website eksis di halaman depan google",
    Company: "Skill Academy",
    Location: "Online",
    Type: "Course",
    Duration: "2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  laravel: laravel,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Seecare",
    image: projectImage1,
    description: `Seecare adalah aplikasi klinik yang dibuat dengan PHP native.`,
    techstack: "PHP",
    previewLink: "https://github.com/ozkun-code/final",
    githubLink: "https://github.com/ozkun-code/final",
  },
  {
    title: "Washup",
    image: projectImage2,
    description: `Washup adalah aplikasi laundry berbasis Laravel, menggunakan Tailwind, DaisyUI, Livewire, dan RESTful API.`,
    techstack: "Laravel, Tailwind, DaisyUI, Livewire",
    previewLink: "https://fahrul.webframework.my.id/",
    githubLink: "https://github.com/ozkun-code/washup",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "fahrulrozi12tkr4@gmail.com",
  phone: "+62 8588 6531 778",
};
