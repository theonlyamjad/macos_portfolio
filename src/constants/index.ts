import { link } from "fs";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "/images/trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id:1,
    date: "Sep 2 , 2025",
    title : "bla bla",
    image : "/images/" ,
    link : "",
  }
];

const techStack = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Animation & 3D",
    items: ["GSAP","motion.js", "Three.js"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel"],
  },
  {
    category: "Programming Languages",
    items: ["C++", "C#", "Java (OOP)", "VB.NET"],
  },
  {
    category: "Database",
    items: ["SQL", "phpMyAdmin", "MongoDB", "PostgreSQL"],
  },
    {
    category: "Tools",
    items: ["Figma", "Blender", "Git & Github", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/theonlyamjad",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/amjad-benamara/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/black_white.png",
  },
  {
    id: 2,
    img: "/images/jobintech.jpeg",
  },
  {
    id: 3,
    img: "/images/soutenance.jpg",
  },
  {
    id: 4,
    img: "/images/Amjad.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ MARcrute 
    {
      id: 5,
      name: "MARcrute",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "MARcrute.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MARcrute is a social work staffing platform built for the Moroccan market, connecting social workers with institutions and enterprises. ",
            "Developed with Next.js, TypeScript, PostgreSQL, and Prisma ORM, it features separate portals for workers, enterprises, and admins with role-based access control",
            "The platform includes NextAuth.js v5 authentication, a diploma validation system, mission management, and a comprehensive admin dashboard all with a French-language UI.",
          ],
        },
        {
          id: 2,
          name: "MARcrute",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/theonlyamjad/marcrute",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "MARcrute.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/marcrute.png",
        },
      ],
    },
    // ▶ Frovi
    {
      id: 6,
      name: "Frovi",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Frovi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Frovi is a landing page for a natural drinks brand. It highlights three products, a coffee blend, a fresh juice, and a light soda , with a simple flavor selector to browse between them.",
            "The overall vibe is clean and health-focused, built around the idea of drinks that are both good for you and actually enjoyable.",
          ],
        },
        {
          id: 2,
          name: "Frovi Github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/theonlyamjad/Frovi",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "frovi.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/frovi.png",
        },
      ],
    },
    // ▶ Contact-App
    {
      id: 7,
      name: "Contact-App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Contact Management App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Laravel-based contact manager with CRUD operations, advanced filtering (age, city, gender, activity), CSV import/export, and PDF generation.",
            "Designed with a modern landing page and secure authentication system.",
          ],
        },
        {
          id: 2,
          name: "contact-app github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/theonlyamjad/contactapp",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "contact-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/contact-app.png",
        },
      ],
    },
    // ▶ PDA
    {
      id: 8,
      name: "PDA",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "pda.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Perfekt Deutsch Akademie — A German language school website built with Next.js, offering courses from A1 to B2 with certification prep and career guidance for Moroccan students targeting Germany.",
          ],
        },
        {
          id: 2,
          name: "pdakademie.ma",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.pdakademie.ma/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pda.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/pda.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Hey! I’m Amjad 👋, passionate and motivated Full-Stack Developer with a solid academic background in computer development and hands-on experience through multiple internships.",
        "Skilled in ReactJS, NextJS, HTML, CSS, JavaScript, and PHP/Laravel.",
        "I specialize in end-to-end project development and problem-solving with adaptability, autonomy, and continuous learning as core strengths.",
        "Currently enhancing my expertise in modern JavaScript frameworks and full-stack architectures.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };