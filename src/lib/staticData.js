export const fallbackData = {
  personalInfo: {
    name: "Nitin Chugh",
    title: "Full-Stack Developer",
    subHeading: "I build responsive, user-focused web applications with clean UI and modern animations — blending design and functionality for seamless user experiences.",
    tagline: "I build responsive, user-focused web applications with clean UI and modern animations — blending design and functionality for seamless user experiences.",
    aboutLong: "I’m Samaksh Saxena, a full-stack developer currently pursuing my B.Tech in Information Technology at ABES Engineering College, Ghaziabad. I enjoy building scalable digital products that solve real-world problems while maintaining a strong focus on user experience and modern interface design.\n\nMy development journey started with frontend development and gradually evolved into full-stack application architecture involving authentication systems, relational databases, role-based access control, and scalable backend workflows. I actively work with technologies like Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and Drizzle ORM.\n\nBeyond development, I’m also involved in theatre and music societies, which has helped me improve creativity, communication, collaboration, and presentation skills. I enjoy combining technical problem-solving with creative thinking to build products that are both functional and engaging.\n\nCurrently, I’m focused on building large-scale platform-based projects like ClubVerse, a multi-role campus ecosystem platform designed to improve student engagement, club management, and event coordination.",
    aboutShort: "Full-stack developer passionate about building scalable web platforms, modern UI experiences, and real-world digital products using modern technologies.",
    recruiterLine: "Full-stack developer focused on building scalable digital platforms with modern architectures, intuitive user experiences, and real-world problem-solving approaches.",
    contact: {
      email: "samakshsaxena03@gmail.com",
      github: "https://github.com/samaksh34",
      linkedin: "https://linkedin.com/in/samaksh",
    },
  },
  services: [
    {
      title: "Frontend Engineering",
      tag: "01 // CAPABILITY",
      iconName: "Layout",
      description: "Crafting beautiful, accessible, and high-performance user interfaces in Next.js. I specialize in mapping fluid physics, rich aesthetic animations in Framer Motion, and responsive layouts that adapt flawlessly from mobile screens to large grid monitors.",
      features: ["Next.js & React 19", "TypeScript & ES6+", "Tailwind CSS v4", "Framer Motion & Physics"],
    },
    {
      title: "Backend & Serverless",
      tag: "02 // CAPABILITY",
      iconName: "Server",
      description: "Designing fast, reliable, and secure server-side logic and application programming interfaces. I build modular RESTful APIs, secure JWT-based role authorization protocols, and scalable backend workflows.",
      features: ["Node.js & Express.js", "Server-side Architecture", "JWT Authentication", "REST APIs & Endpoints"],
    },
    {
      title: "Database Integration",
      tag: "03 // CAPABILITY",
      iconName: "Database",
      description: "Structuring scalable databases to secure zero data-loss transitions, sub-millisecond document retrievals, and optimal query speeds. Managing relational mapping schemas, ORM systems, and cached databases.",
      features: ["PostgreSQL & Supabase", "Drizzle ORM", "MongoDB & Mongoose", "MySQL Database Schema"],
    },
    {
      title: "Product Integration",
      tag: "04 // CAPABILITY",
      iconName: "Compass",
      description: "Combining technical problem-solving with product-driven thinking to create full features. Experienced in building automated PDF export systems, third-party API integrations, and AI response pipelines.",
      features: ["Gemini API Integration", "PDF Export Systems", "Responsive Web Design", "Third-party Integrations"],
    },
  ],
  projects: [
    {
      id: "clubverse",
      title: "ClubVerse",
      description: "A scalable full-stack campus ecosystem platform designed to streamline club management, student engagement, and event coordination through multi-role dashboards.",
      longDescription: "ClubVerse is a modern full-stack web platform built to centralize student communities, club management, and campus event workflows within a single ecosystem. The platform features dedicated portals for students, club admins, and super admins, enabling structured management and seamless interaction across different user roles. It demonstrates advanced concepts including role-based access control (RBAC), relational database architecture, authentication systems, and scalable backend workflows.",
      featured: true,
      gridSpan: "md:col-span-2",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Drizzle ORM"],
      accentColor: "indigo-500",
      stats: { architecture: "Relational", accessControl: "RBAC Portals", database: "PostgreSQL" },
      links: { github: "https://github.com/samaksh34", live: "#" },
    },
    {
      id: "resumecraft",
      title: "ResumeCraft",
      description: "A dynamic ATS-friendly resume builder featuring customizable templates, authentication systems, real-time preview, and professional PDF export functionality.",
      longDescription: "Developed a full-stack resume builder platform focused on creating machine-readable, ATS-compatible resumes with real-time editing and customizable templates. Implemented JWT-based authentication, dashboard management, dynamic form systems, and responsive UI architecture to streamline professional resume generation and instant downloads.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
      accentColor: "emerald-500",
      stats: { export: "PDF System", templates: "ATS-Friendly", type: "Full-Stack" },
      links: { github: "https://github.com/samaksh34", live: "#" },
    },
    {
      id: "feedbacksystem",
      title: "Faculty Feedback System",
      description: "A web-based evaluation platform enabling structured faculty feedback collection, analytics visualization, and report generation workflows.",
      longDescription: "Built a secure feedback management platform allowing students to submit structured faculty evaluations while maintaining organized data handling and efficient analytics workflows. Developed responsive interfaces, validation systems, and analytics dashboards to generate performance insights and improve institutional decision-making processes.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: ["HTML", "CSS", "JavaScript", "Analytics Dashboard", "Charts"],
      accentColor: "cyan-500",
      stats: { interface: "Responsive UI", analytics: "Visual Charts", role: "Frontend Lead" },
      links: { github: "https://github.com/samaksh34", live: "#" },
    },
    {
      id: "healthchatbot",
      title: "Health Assistant Chatbot",
      description: "An AI-powered healthcare assistant chatbot designed to provide intelligent symptom-based responses and real-time user interaction workflows.",
      longDescription: "Collaboratively developed an AI-based healthcare chatbot leveraging NLP concepts and intelligent response pipelines to assist users with symptom-based medical guidance. Focused on building responsive chat interactions, optimized query handling, and scalable conversational workflows.",
      featured: false,
      gridSpan: "md:col-span-2",
      tags: ["JavaScript", "NLP Basics", "AI Response", "Chat Interface", "Node.js"],
      accentColor: "violet-500",
      stats: { engine: "NLP Pipelines", design: "Fluid Chat UI", technology: "AI Agent" },
      links: { github: "https://github.com/samaksh34", live: "#" },
    },
  ],
  experience: [
    {
      company: "Samvaad Theatre Society",
      role: "Active Member & Coordinator",
      period: "2023 - PRESENT",
      highlights: [
        "Actively participated in multiple college theatre productions, street performances, and competitive stage showcases.",
        "Developed premium interpersonal communication, active collaboration, and theatrical presentation skills.",
        "Coordinated logistics and team schedules for stage events, boosting student engagement and performance execution."
      ],
      tags: ["Communication", "Collaboration", "Public Speaking", "Creative Direction"],
    },
    {
      company: "Enigma Programming Club",
      role: "Technical Member",
      period: "2024 - PRESENT",
      highlights: [
        "Contributed to organizing coding events, technical workshops, and hackathons for 300+ students.",
        "Developed and maintained lightweight technical participant workflows and registration forms.",
        "Active contributor to club programming repositories, collaborating on standard algorithm sheets."
      ],
      tags: ["Algorithms", "Event Coordination", "Technical Support", "Peer Mentoring"],
    },
    {
      company: "Kalakrit Music Club",
      role: "Core Team Member",
      period: "2023 - PRESENT",
      highlights: [
        "Assisted in organizing cultural musical performances, vocal events, and stage sound systems.",
        "Led collaborative coordination across club members to align music setlists and equipment logistics under strict timelines.",
        "Fostered creative group ideas combining traditional instrumentation with modern digital tracks during college fests."
      ],
      tags: ["Operational Logistics", "Team Leadership", "Creative Execution", "Sound Engineering"],
    }
  ],
  techStack: [
    {
      title: "Frontend Engineering",
      tag: "01 // LAYER",
      iconName: "Layout",
      tools: [
        { name: "React.js", level: "Expert", iconName: "Code2", glowColor: "cyan-500" },
        { name: "Next.js", level: "Expert", iconName: "FileCode", glowColor: "indigo-500" },
        { name: "TypeScript", level: "Advanced", iconName: "Terminal", glowColor: "blue-500" },
        { name: "Tailwind CSS", level: "Expert", iconName: "Layers", glowColor: "teal-500" }
      ]
    },
    {
      title: "Backend & APIs",
      tag: "02 // LAYER",
      iconName: "Server",
      tools: [
        { name: "Node.js", level: "Expert", iconName: "Cpu", glowColor: "emerald-500" },
        { name: "Express.js", level: "Expert", iconName: "Terminal", glowColor: "zinc-500" },
        { name: "REST APIs", level: "Expert", iconName: "Infinity", glowColor: "orange-500" },
        { name: "JWT Auth", level: "Advanced", iconName: "Shield", glowColor: "red-500" }
      ]
    },
    {
      title: "Databases & Services",
      tag: "03 // LAYER",
      iconName: "Database",
      tools: [
        { name: "PostgreSQL", level: "Advanced", iconName: "Database", glowColor: "blue-600" },
        { name: "Supabase", level: "Advanced", iconName: "Layers", glowColor: "emerald-400" },
        { name: "Drizzle ORM", level: "Advanced", iconName: "FileCode", glowColor: "yellow-500" },
        { name: "MongoDB", level: "Expert", iconName: "Database", glowColor: "emerald-600" }
      ]
    },
    {
      title: "Tools & Integrations",
      tag: "04 // LAYER",
      iconName: "Compass",
      tools: [
        { name: "Git & GitHub", level: "Expert", iconName: "FileCode", glowColor: "orange-600" },
        { name: "Postman", level: "Expert", iconName: "Terminal", glowColor: "orange-500" },
        { name: "Gemini API", level: "Advanced", iconName: "Cpu", glowColor: "violet-400" },
        { name: "PDF Systems", level: "Advanced", iconName: "Layers", glowColor: "indigo-400" }
      ]
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2024 Participant",
      issuer: "AICTE / Govt of India",
      date: "2024",
      id: "SIH-2024-SAM",
      link: "https://sih.gov.in"
    },
    {
      title: "Core Team Member — Kalakrit Music Club",
      issuer: "ABES Engineering College",
      date: "2023 - PRESENT",
      id: "ABES-KMC-09",
      link: "#"
    },
    {
      title: "Technical Member — Enigma Programming Club",
      issuer: "ABES Engineering College",
      date: "2024 - PRESENT",
      id: "ABES-EPC-12",
      link: "#"
    },
    {
      title: "Active Member — Samvaad Theatre Society",
      issuer: "ABES Engineering College",
      date: "2023 - PRESENT",
      id: "ABES-STS-05",
      link: "#"
    }
  ],
  faqs: [
    {
      question: "What is your primary full-stack technology stack?",
      answer: "I specialize in building React/Next.js frontend applications integrated with Supabase, PostgreSQL, Drizzle ORM, and MongoDB backends. I utilize TypeScript for type-safety and Tailwind CSS for rapid premium styling."
    },
    {
      question: "Tell us about your flagship project, ClubVerse.",
      answer: "ClubVerse is a full-stack campus community and event management platform. It centralizes student activities, club management, and event organization. Built with Next.js, Supabase, PostgreSQL, and Drizzle ORM, it utilizes role-based access control (RBAC) to provide customized experiences for students, club admins, and super admins."
    },
    {
      question: "How has theatre and music influenced your programming career?",
      answer: "Theatre and music are core to my creativity. Participating in the Samvaad Theatre Society and Kalakrit Music Club has dramatically improved my public speaking, team collaboration, active listening, and problem-solving skills, allowing me to build user-centric products with structured focus and unique empathy."
    },
    {
      question: "Are you open to software developer internships or full-time roles?",
      answer: "Yes! I am actively pursuing my B.Tech in Information Technology (2023-2027) and am open to software engineering internships, full-time developer roles, and freelance contracts where I can build impactful, scalable platforms."
    },
    {
      question: "Do you have experience with automated document systems or AI integrations?",
      answer: "Yes, I built ResumeCraft, which incorporates custom PDF export engines, and I have worked with AI response pipelines utilizing the Gemini API to construct intelligent query handlers in conversational chatbots."
    }
  ]
};
