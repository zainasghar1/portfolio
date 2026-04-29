export type CvItem = {
  label: string;
  value: string;
};

export type EducationItem = {
  range: string;
  degree: string;
  location: string;
  institution: string;
};

export type ExperienceItem = {
  range: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export type CvData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  profile: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: {
    title: string;
    category: "frontend" | "fullstack" | "mobile" | "automation";
    period: string;
    stack: string[];
    problem: string;
    solution: string;
    impact: string;
  }[];
  languages: CvItem[];
  interests: CvItem[];
};

export const cv: CvData = {
  name: "Muhammad Zain Asghar",
  email: "zainasghar698@gmail.com",
  phone: "+923124877783",
  location: "Ferozpur Road, Lahore",
  linkedinUrl: "https://linkedin.com/in/zainasgh4r",
  profile:
    "As a MERN stack developer with over two years of experience, I specialize in building dynamic front-end interfaces using React and Next.js, and developing robust backends with Express.js and MongoDB. I have also expanded my expertise to include NestJS, PostgreSQL, and Vue.js, enabling me to deliver scalable, efficient, and modern web applications.",
  education: [
    {
      range: "2018 – 2022",
      degree: "Bachelor of Mechanical Engineering",
      location: "Lahore, Pakistan",
      institution: "University of Engineering and Technology",
    },
    {
      range: "2016 – 2018",
      degree: "Pre-Engineering",
      location: "Lahore, Pakistan",
      institution: "Punjab Group of Colleges",
    },
  ],
  experience: [
    {
      range: "2026/03 – Present",
      title: "Software Engineer",
      company: "IsoftStudios",
      location: "Lahore, Pakistan",
      description:
        "At IsoftStudios, I am working on mobile application development using React Native. My responsibilities include writing and maintaining code to ensure a consistent user experience across both iOS and Android platforms. I focus on building responsive, high-performance features while ensuring cross-platform compatibility and smooth functionality.",
    },
    {
      range: "2025/04 – 2026/02",
      title: "Software Engineer",
      company: "Optimageeks",
      location: "Lahore, Pakistan",
      description:
        "At Optimageeks, I work as a Software Engineer, contributing to full-stack development with a diverse tech stack. On the frontend, I have built dynamic and responsive applications using Next.js and Vue.js. On the backend, I leverage NestJS along with databases such as MongoDB and PostgreSQL. I design efficient schemas, optimize queries, and implement scalable APIs. In addition, I have worked on web scraping solutions using Puppeteer, automating data extraction and supporting data-driven workflows.",
    },
    {
      range: "2023/09 – 2025/03",
      title: "Associate Software Engineer",
      company: "Ektech",
      location: "Lahore, Pakistan",
      description:
        "At Ektech, I worked extensively with React.js and Next.js, focusing on API integration and building functional, dynamic web applications. I implemented key features and optimized performance to create seamless user experiences. On the backend, I worked with Node.js and MongoDB, designing efficient schemas and leveraging aggregation pipelines to develop scalable and robust solutions.",
    },
  ],
  projects: [
    {
      title: "Cross-Platform Delivery App",
      category: "mobile",
      period: "2026",
      stack: ["React Native", "TypeScript", "REST APIs"],
      problem:
        "The business needed a consistent mobile experience across iOS and Android while shipping updates quickly.",
      solution:
        "Built reusable React Native modules and standardized API handling to keep feature behavior consistent across platforms.",
      impact:
        "Reduced platform-specific rework and improved development velocity for new features.",
    },
    {
      title: "Recruitment Workflow Platform",
      category: "fullstack",
      period: "2025 - 2026",
      stack: ["Next.js", "NestJS", "MongoDB", "PostgreSQL"],
      problem:
        "Recruiters required a fast dashboard with reliable backend workflows and scalable data handling.",
      solution:
        "Developed a full-stack architecture with modular backend services, optimized schemas, and API-driven frontend screens.",
      impact:
        "Enabled smoother recruiter workflows and improved reliability for high-volume data operations.",
    },
    {
      title: "Business Web App Modernization",
      category: "frontend",
      period: "2023 - 2025",
      stack: ["React.js", "Next.js", "Node.js"],
      problem:
        "Legacy UI flows caused friction in key user journeys and made feature delivery slower.",
      solution:
        "Refactored UI flows into reusable components, integrated APIs cleanly, and improved rendering/performance patterns.",
      impact:
        "Delivered a more responsive user experience with faster iteration on product features.",
    },
    {
      title: "Automated Data Extraction Pipeline",
      category: "automation",
      period: "2025",
      stack: ["Puppeteer", "Node.js", "MongoDB"],
      problem:
        "Manual data collection consumed too much time and introduced inconsistency.",
      solution:
        "Implemented automated scraping workflows with scheduling-friendly scripts and structured persistence.",
      impact:
        "Cut manual effort and improved consistency of downstream reporting data.",
    },
  ],
  languages: [
    { label: "English", value: "English" },
    { label: "Urdu", value: "Urdu" },
  ],
  interests: [
    { label: "Tech Enthusiast", value: "Tech Enthusiast" },
    { label: "Table Tennis Enthusiast", value: "Table Tennis Enthusiast" },
  ],
};

