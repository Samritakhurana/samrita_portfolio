// Projects data - Update this file with your actual project information
export const projectsData = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    description:
      "A sophisticated multilingual AI chatbot with voice capabilities built using Python, PyTorch, and FastAPI. Features neural voice cloning and reduces response time by 40%.",
    image: "/image/artificial-intelligence.png",
    technologies: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Docker",
      "OpenAI API",
      "Twilio",
    ],
    liveLink: "https://your-demo-link.com", // Replace with actual link
    githubLink: "https://github.com/yourusername/project-repo", // Replace with actual link
    featured: true,
    category: "AI/ML",
    status: "Completed", // Completed, In Progress, Planned
  },
  {
    id: 2,
    title: "ASL Learning Mobile App",
    description:
      "Google-sponsored mobile application for hearing parents to learn ASL. Built with Unity and C# featuring 250+ vocabulary items and improved sign detection accuracy by 30%.",
    image: "/image/artificial-intelligence.png",
    technologies: [
      "C#",
      "Unity",
      "Figma",
      "Computer Vision",
      "Mobile Development",
    ],
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/yourusername/project-repo",
    featured: true,
    category: "Mobile App",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Legacy System Modernization",
    description:
      "Modernized legacy RPG AS400 systems into Java-based web applications using Spring Boot. Improved performance and maintainability by 65% with clean code practices.",
    image: "/image/artificial-intelligence.png",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "SQL",
      "Maven",
    ],
    liveLink: "https://your-demo-link.com",
    githubLink: "https://github.com/yourusername/project-repo",
    featured: false,
    category: "Web Development",
    status: "Completed",
  },
  {
    id: 4,
    title: "LLM Bias Analysis Tool",
    description:
      "Research tool for analyzing bias in large language models applied to mental health counseling. Implements quantitative metrics and comparative analysis across multiple LLMs.",
    image: "/image/artificial-intelligence.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Research",
      "Data Analysis",
      "Statistics",
    ],
    liveLink: "https://your-research-paper-link.com",
    githubLink: "https://github.com/yourusername/research-repo",
    featured: false,
    category: "Research",
    status: "In Progress",
  },
  // Add more projects here following the same structure
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
    image: "/image/artificial-intelligence.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Motion/React",
      "JavaScript",
    ],
    liveLink: "https://your-portfolio-link.com",
    githubLink: "https://github.com/yourusername/portfolio",
    featured: false,
    category: "Web Development",
    status: "Completed",
  },
];

// You can also add categories for filtering if you want to implement that feature later
export const projectCategories = [
  "All",
  "AI/ML",
  "Web Development",
  "Mobile App",
  "Research",
  "Full Stack",
];

// Project status options
export const projectStatuses = [
  "Completed",
  "In Progress",
  "Planned",
  "On Hold",
];
