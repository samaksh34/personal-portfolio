export const fallbackData = {
  personalInfo: {
    name: "Samaksh Saxena",
    title: "Full-Stack Developer & Software Engineer",
    subHeading: "👋 HELLO, I'M",
    tagline: "I build scalable full-stack web applications with modern UI systems, secure backend architectures, and real-world workflow automation.",
    aboutShort: "Full-stack developer focused on creating responsive, scalable, and user-focused digital products using modern frontend technologies, backend systems, and production-ready architectures.",
    aboutLong: "I'm Samaksh Saxena, a full-stack developer passionate about building real-world digital systems that combine strong engineering with polished user experiences. My journey started with frontend development and gradually evolved into developing complete full-stack platforms involving authentication systems, dashboard architectures, database management, and scalable backend workflows.\n\nOver time, I’ve worked on projects ranging from ATS resume platforms and AI-powered chatbot systems to large-scale multi-role management ecosystems like ClubVerse. I enjoy solving workflow-based problems, designing clean interfaces, and building systems that feel practical, modern, and production-ready.\n\nBeyond development, my involvement in theatre, music societies, hackathons, and collaborative technical communities has strengthened my communication, teamwork, creativity, and leadership abilities. I aim to continue growing as a software engineer while contributing to impactful products and scalable digital experiences.",
    recruiterLine: "Full-stack developer focused on building scalable web applications, dashboard systems, and user-focused digital experiences with modern engineering practices.",
    contact: {
      email: "samakshsaxena03@gmail.com",
      github: "https://github.com/samaksh34",
      linkedin: "https://www.linkedin.com/in/samaksh-saxena-152843305/"
    }
  },
  services: [
    {
      title: "Frontend Engineering",
      tag: "Modern UI Systems",
      iconName: "Layout",
      description: "Building responsive, scalable, and visually polished user interfaces with modern frontend frameworks and smooth user experiences.",
      features: [
        "Responsive UI Design",
        "Reusable Component Architecture",
        "Modern Animations & Interactions",
        "Tailwind CSS & React Ecosystem",
        "Dashboard Interface Development"
      ]
    },
    {
      title: "Backend Systems",
      tag: "Secure Architecture",
      iconName: "Server",
      description: "Developing secure backend systems, REST APIs, authentication workflows, and scalable business logic handling.",
      features: [
        "REST API Development",
        "JWT Authentication",
        "RBAC Systems",
        "Server-Side Logic",
        "Secure Route Handling"
      ]
    },
    {
      title: "Database Architecture",
      tag: "Data & Infrastructure",
      iconName: "Database",
      description: "Designing efficient relational and NoSQL database structures with modern ORM and backend integrations.",
      features: [
        "PostgreSQL",
        "Supabase Integration",
        "Drizzle ORM",
        "MongoDB",
        "Structured Data Management"
      ]
    },
    {
      title: "Full-Stack Platforms",
      tag: "End-to-End Systems",
      iconName: "Compass",
      description: "Creating complete full-stack applications including dashboards, workflow systems, event platforms, and admin architectures.",
      features: [
        "Dashboard Systems",
        "Admin Portals",
        "Workflow Automation",
        "Event Management Systems",
        "Production-Level Architecture"
      ]
    },
    {
      title: "AI Integrations",
      tag: "Smart Features",
      iconName: "Sparkles",
      description: "Integrating AI-powered features, chatbot workflows, and intelligent automation into modern web platforms.",
      features: [
        "Gemini API Integration",
        "AI Chatbot Systems",
        "NLP-Based Workflows",
        "Intelligent User Interaction",
        "AI-Assisted Features"
      ]
    }
  ],
  projects: [
    {
      id: "clubverse",
      title: "ClubVerse",
      description: "A scalable club and event management ecosystem with role-based dashboards, authentication systems, and workflow automation.",
      longDescription: "ClubVerse is a production-focused full-stack platform designed to simplify club and event management for colleges. The platform features multiple role-based portals including Student, Club Admin, and Super Admin dashboards with secure authentication, event workflows, and centralized management.\n\nThe system supports event creation, registrations, dashboard analytics, admin approvals, and scalable database handling using Supabase and Drizzle ORM. The project emphasizes clean architecture, responsive UI systems, and real-world workflow management.",
      featured: true,
      gridSpan: "md:col-span-2",
      tags: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Supabase",
        "Drizzle ORM",
        "PostgreSQL",
        "RBAC",
        "JWT"
      ],
      accentColor: "blue",
      stats: {
        architecture: "Multi-Portal RBAC",
        backend: "Supabase + PostgreSQL",
        auth: "Secure Authentication",
        dashboards: "3 Dedicated Portals"
      },
      links: {
        github: "https://github.com/samaksh34/clubverse",
        live: "https://clubverse-7jyv.vercel.app/"
      }
    },
    {
      id: "resumecraft",
      title: "ResumeCraft",
      description: "ATS-focused resume builder platform with authentication, real-time customization, and PDF export workflows.",
      longDescription: "ResumeCraft is a full-stack resume generation platform designed to help users create ATS-friendly professional resumes with modern templates and real-time customization. The platform includes authentication systems, live preview rendering, customizable resume sections, and PDF export functionality.\n\nThe project focuses heavily on clean UI design, dynamic rendering systems, and practical user workflows to deliver a seamless resume-building experience.",
      featured: true,
      gridSpan: "md:col-span-1",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "PDF Export"
      ],
      accentColor: "cyan",
      stats: {
        auth: "JWT Authentication",
        export: "PDF Resume Export",
        ui: "Live Preview System",
        templates: "ATS-Friendly Templates"
      },
      links: {
        github: "https://github.com/samaksh34/RESUME-BUILDER",
        live: "https://resume-builder-eight-ochre.vercel.app/"
      }
    },
    {
      id: "feedback-system",
      title: "Faculty Feedback Automation",
      description: "Web-based evaluation and analytics system for structured faculty feedback management.",
      longDescription: "A structured feedback automation platform enabling students to submit faculty evaluations through secure and responsive workflows. The system manages data collection, analytics generation, and reporting dashboards for performance insights.\n\nThe platform focuses on workflow optimization, form validation, data organization, and analytics-based reporting.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Dashboard",
        "Analytics"
      ],
      accentColor: "indigo",
      stats: {
        analytics: "Faculty Reports",
        forms: "Dynamic Validation",
        workflow: "Automated Submission",
        dashboards: "Performance Insights"
      },
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "health-assistant",
      title: "AI Health Assistant Chatbot",
      description: "AI-powered healthcare chatbot with NLP-based query handling and intelligent response workflows.",
      longDescription: "An AI-integrated healthcare assistant chatbot capable of handling symptom-based conversations and providing intelligent responses using NLP concepts and structured backend pipelines.\n\nThe project focuses on user interaction, conversational workflows, response management, and scalable chatbot architecture.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: [
        "AI",
        "NLP",
        "Chatbot",
        "Node.js",
        "Healthcare"
      ],
      accentColor: "emerald",
      stats: {
        ai: "NLP-Based Responses",
        workflow: "Symptom Handling",
        interface: "Interactive Chat UI",
        backend: "Response Pipelines"
      },
      links: {
        github: "#",
        live: "#"
      }
    }
  ],
  experience: [
    {
      company: "ABES Engineering College",
      role: "B.Tech in Information Technology",
      period: "2023 — Present",
      highlights: [
        "Started full-stack web development journey",
        "Built multiple scalable web applications",
        "Worked on real-world management systems",
        "Participated in collaborative hackathons and technical communities"
      ],
      tags: [
        "Full-Stack Development",
        "System Design",
        "Web Engineering"
      ]
    },
    {
      company: "Smart India Hackathon",
      role: "Team Collaboration Experience",
      period: "2024",
      highlights: [
        "Worked collaboratively on problem-solving workflows",
        "Contributed to project development and architecture planning",
        "Improved teamwork and technical communication"
      ],
      tags: [
        "Hackathon",
        "Team Collaboration",
        "Problem Solving"
      ]
    },
    {
      company: "Technical & Creative Communities",
      role: "Core Team / Active Member",
      period: "2023 — Present",
      highlights: [
        "Contributed to technical events and college communities",
        "Participated in theatre productions and stage performances",
        "Managed coordination, teamwork, and event execution"
      ],
      tags: [
        "Leadership",
        "Creativity",
        "Communication"
      ]
    }
  ],
  techStack: [
    {
      title: "Frontend",
      tag: "UI Engineering",
      iconName: "Code2",
      tools: [
        {
          name: "React.js",
          level: "90%",
          iconName: "Code2",
          glowColor: "cyan-500"
        },
        {
          name: "Next.js",
          level: "85%",
          iconName: "Layers",
          glowColor: "indigo-500"
        },
        {
          name: "JavaScript",
          level: "88%",
          iconName: "FileCode",
          glowColor: "yellow-500"
        },
        {
          name: "Tailwind CSS",
          level: "92%",
          iconName: "Palette",
          glowColor: "teal-500"
        },
        {
          name: "Redux",
          level: "75%",
          iconName: "Workflow",
          glowColor: "purple-500"
        },
        {
          name: "Framer Motion",
          level: "70%",
          iconName: "Sparkles",
          glowColor: "pink-500"
        }
      ]
    },
    {
      title: "Backend",
      tag: "Server & APIs",
      iconName: "Server",
      tools: [
        {
          name: "Node.js",
          level: "85%",
          iconName: "Server",
          glowColor: "green-500"
        },
        {
          name: "Express.js",
          level: "82%",
          iconName: "Cpu",
          glowColor: "zinc-500"
        },
        {
          name: "REST APIs",
          level: "88%",
          iconName: "Globe",
          glowColor: "blue-500"
        },
        {
          name: "JWT Authentication",
          level: "80%",
          iconName: "Shield",
          glowColor: "orange-500"
        }
      ]
    },
    {
      title: "Databases & Infrastructure",
      tag: "Storage Systems",
      iconName: "Database",
      tools: [
        {
          name: "PostgreSQL",
          level: "80%",
          iconName: "Database",
          glowColor: "blue-500"
        },
        {
          name: "Supabase",
          level: "82%",
          iconName: "Cloud",
          glowColor: "emerald-500"
        },
        {
          name: "Drizzle ORM",
          level: "78%",
          iconName: "Layers",
          glowColor: "orange-500"
        },
        {
          name: "MongoDB",
          level: "85%",
          iconName: "Database",
          glowColor: "green-500"
        },
        {
          name: "Firebase",
          level: "70%",
          iconName: "Flame",
          glowColor: "yellow-500"
        }
      ]
    },
    {
      title: "Tools & Workflow",
      tag: "Development Ecosystem",
      iconName: "Wrench",
      tools: [
        {
          name: "Git",
          level: "85%",
          iconName: "GitBranch",
          glowColor: "orange-500"
        },
        {
          name: "GitHub",
          level: "88%",
          iconName: "Github",
          glowColor: "zinc-500"
        },
        {
          name: "Postman",
          level: "82%",
          iconName: "Send",
          glowColor: "orange-500"
        },
        {
          name: "Vercel",
          level: "78%",
          iconName: "Rocket",
          glowColor: "white"
        },
        {
          name: "Responsive Design",
          level: "90%",
          iconName: "Monitor",
          glowColor: "cyan-500"
        }
      ]
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon Participant",
      issuer: "SIH 2024",
      date: "2024",
      id: "SIH-2024",
      link: "#"
    },
    {
      title: "Core Team Member",
      issuer: "Kalakrit Music Club",
      date: "2024",
      id: "KALAKRIT-CORE",
      link: "#"
    },
    {
      title: "Technical Member",
      issuer: "Enigma Programming Club",
      date: "2024",
      id: "ENIGMA-TECH",
      link: "#"
    },
    {
      title: "Active Member",
      issuer: "Samvaad Theatre Society",
      date: "2024",
      id: "SAMVAAD-THEATRE",
      link: "#"
    }
  ],
  faqs: [
    {
      question: "What technologies do you primarily work with?",
      answer: "I primarily work with React.js, Next.js, Node.js, Supabase, PostgreSQL, MongoDB, and modern full-stack development tools."
    },
    {
      question: "What type of projects do you enjoy building?",
      answer: "I enjoy building scalable full-stack platforms, dashboard systems, workflow-based applications, and AI-integrated products focused on real-world usability."
    },
    {
      question: "What is ClubVerse?",
      answer: "ClubVerse is a full-stack club and event management ecosystem featuring multi-role dashboards, authentication systems, event workflows, and scalable backend architecture."
    },
    {
      question: "Are you available for internships or collaborations?",
      answer: "Yes, I’m actively open to internships, collaborative projects, and opportunities where I can contribute to impactful products and grow as a software engineer."
    },
    {
      question: "Do you work on both frontend and backend development?",
      answer: "Yes, I work across the full stack including frontend interfaces, backend APIs, authentication systems, databases, and deployment workflows."
    }
  ]
};
