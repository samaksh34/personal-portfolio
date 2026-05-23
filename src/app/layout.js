import { Outfit, Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Spotlight from "@/components/Spotlight";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import ResumeModal from "@/components/ResumeModal";

// modern sans heading font
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// modern serif story font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// clean UI body fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samaksh Saxena | Full-Stack Developer & Product Builder",
  description: "Samaksh Saxena is a Full-Stack Developer and Product Builder specializing in Next.js, React, Node.js, Supabase, PostgreSQL, and MongoDB. Explore portfolio projects, services, and FAQs.",
  keywords: ["Samaksh Saxena", "Samaksh Saxena developer", "Samaksh Saxena portfolio", "Full Stack Developer", "Next.js Developer", "React Developer", "Node.js Developer", "ABES Engineering College", "ClubVerse"],
  authors: [{ name: "Samaksh Saxena" }],
  creator: "Samaksh Saxena",
  publisher: "Samaksh Saxena",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://samaksh.dev/",
  },
  openGraph: {
    type: "profile",
    title: "Samaksh Saxena | Full-Stack Developer & Product Builder",
    description: "Full-Stack Developer and Product Builder specializing in Next.js, React, Node.js, Supabase, PostgreSQL, and Drizzle ORM. Explore my portfolio and projects.",
    url: "https://samaksh.dev/",
    siteName: "Samaksh Saxena - Portfolio",
    images: [
      {
        url: "https://samaksh.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samaksh Saxena - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    firstName: "Samaksh",
    lastName: "Saxena",
    username: "samaksh34",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaksh Saxena | Full-Stack Developer & Product Builder",
    description: "Full-Stack Developer and Product Builder specializing in Next.js, React, Node.js, and modern web technologies.",
    images: ["https://samaksh.dev/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://samaksh.dev/#person",
    "name": "Samaksh Saxena",
    "url": "https://samaksh.dev",
    "image": "https://samaksh.dev/og-image.png",
    "description": "Full-Stack Developer and Product Builder currently pursuing B.Tech in IT at ABES Engineering College, Ghaziabad. Specializing in Next.js, Supabase, and scalable architectures.",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Self-Employed"
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Drizzle ORM",
      "MongoDB",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Full Stack Development",
      "Web Development"
    ],
    "sameAs": [
      "https://github.com/samaksh34",
      "https://www.linkedin.com/in/samaksh"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://samaksh.dev/"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://samaksh.dev/#website",
    "url": "https://samaksh.dev",
    "name": "Samaksh Saxena - Full-Stack Developer & Product Builder",
    "description": "Portfolio website of Samaksh Saxena, a Full-Stack Developer & Product Builder",
    "publisher": {
      "@id": "https://samaksh.dev/#person"
    },
    "inLanguage": "en-US"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://samaksh.dev/#service",
    "name": "Samaksh Saxena - Web Development Services",
    "description": "Full-Stack Web Development services specializing in Next.js, React, Node.js, and modern serverless database technologies",
    "provider": {
      "@id": "https://samaksh.dev/#person"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Full Stack Development",
      "React Development",
      "Node.js Development",
      "Frontend Development",
      "Backend Development",
      "Database Integration"
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://samaksh.dev/#webpage",
    "url": "https://samaksh.dev/",
    "name": "Samaksh Saxena | Full-Stack Developer & Product Builder",
    "description": "Samaksh Saxena is a Full-Stack Developer & Product Builder specializing in Next.js, React, Node.js, and MongoDB. View portfolio projects, services, and FAQs.",
    "isPartOf": {
      "@id": "https://samaksh.dev/#website"
    },
    "about": {
      "@id": "https://samaksh.dev/#person"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://samaksh.dev/og-image.png"
    },
    "inLanguage": "en-US"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://samaksh.dev/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your primary full-stack technology stack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in building React/Next.js frontend applications integrated with Supabase, PostgreSQL, Drizzle ORM, and MongoDB backends. I utilize TypeScript for type-safety and Tailwind CSS for rapid premium styling."
        }
      },
      {
        "@type": "Question",
        "name": "Tell us about your flagship project, ClubVerse.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClubVerse is a full-stack campus community and event management platform. It centralizes student activities, club management, and event organization. Built with Next.js, Supabase, PostgreSQL, and Drizzle ORM, it utilizes role-based access control (RBAC) to provide customized experiences for students, club admins, and super admins."
        }
      },
      {
        "@type": "Question",
        "name": "How has theatre and music influenced your programming career?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Theatre and music are core to my creativity. Participating in the Samvaad Theatre Society and Kalakrit Music Club has dramatically improved my public speaking, team collaboration, active listening, and problem-solving skills, allowing me to build user-centric products with structured focus and unique empathy."
        }
      },
      {
        "@type": "Question",
        "name": "Are you open to software developer internships or full-time roles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! I am actively pursuing my B.Tech in Information Technology (2023-2027) and am open to software engineering internships, full-time developer roles, and freelance contracts where I can build impactful, scalable platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have experience with automated document systems or AI integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I built ResumeCraft, which incorporates custom PDF export engines, and I have worked with AI response pipelines utilizing the Gemini API to construct intelligent query handlers in conversational chatbots."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-obsidian text-silver font-sans selection:bg-neon-indigo/25 antialiased min-h-screen">
        <SmoothScroll>
          <NoiseOverlay />
          <Spotlight />
          <Navbar />
          <ResumeModal />
          <div className="relative z-20 flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
