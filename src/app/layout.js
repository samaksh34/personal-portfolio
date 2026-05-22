import { Outfit, Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Spotlight from "@/components/Spotlight";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";

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
  title: "Samaksh | Creative Full-Stack Developer | Next.js & Node.js Expert",
  description: "Samaksh is a Creative Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. View portfolio projects, services, certifications, and FAQs.",
  keywords: ["Samaksh", "Samaksh developer", "Samaksh portfolio", "Full Stack Developer", "React Developer", "Node.js Developer", "Web Developer", "samaksh.dev"],
  authors: [{ name: "Samaksh" }],
  creator: "Samaksh",
  publisher: "Samaksh",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://samaksh.dev/",
  },
  openGraph: {
    type: "profile",
    title: "Samaksh | Creative Full-Stack Developer",
    description: "Creative Full-Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Explore my portfolio and projects.",
    url: "https://samaksh.dev/",
    siteName: "Samaksh - Portfolio",
    images: [
      {
        url: "https://samaksh.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samaksh - Creative Full-Stack Developer",
      },
    ],
    locale: "en_US",
    firstName: "Samaksh",
    username: "samaksh34",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaksh | Creative Full-Stack Developer",
    description: "Creative Full-Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Explore my portfolio.",
    images: ["https://samaksh.dev/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://samaksh.dev/#person",
    "name": "Samaksh",
    "url": "https://samaksh.dev",
    "image": "https://samaksh.dev/og-image.png",
    "description": "Creative Full-Stack Developer specializing in Next.js, React, Node.js, and modern web architectures.",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Self-Employed"
    },
    "knowsAbout": [
      "React.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
      "Web Development",
      "MongoDB",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
      "Lenis Scroll"
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
    "name": "Samaksh - Creative Full-Stack Developer",
    "description": "Portfolio website of Samaksh, a Creative Full-Stack Developer",
    "publisher": {
      "@id": "https://samaksh.dev/#person"
    },
    "inLanguage": "en-US"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://samaksh.dev/#service",
    "name": "Samaksh - Web Development Services",
    "description": "Creative Full Stack Web Development services including React, Node.js, and modern web technologies",
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
      "Backend Development"
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://samaksh.dev/#webpage",
    "url": "https://samaksh.dev/",
    "name": "Samaksh | Creative Full-Stack Developer",
    "description": "Samaksh is a Creative Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. View portfolio projects, services, certifications, and FAQs.",
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
        "name": "What does your standard website design package include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My standard package includes fully responsive layouts, state-of-the-art visual aesthetics, physics-based micro-interactions, thorough search engine optimization (SEO), fast load-speed parameters, cross-browser support, and high-performance clean reusable components. I also bundle in complete documented code files and support guides."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle both frontend and backend work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I am a creative full-stack developer. I build beautifully structured client interfaces using modern Next.js/React and Tailwind CSS, as well as highly secure backend API route architectures with Node.js/Express, Mongoose database models, and active MongoDB clusters."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a website project usually take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project schedules fluctuate depending on visual and core structural complexities. A simple aesthetic landing page takes around 1-2 weeks, while a full-scale corporate web application containing comprehensive databases, secure APIs, and edge deployment takes 4-8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can you improve my site's SEO and performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! I program high-fidelity speed optimizations, implement core web vital fixes (such as lazy-loading assets, layout-shift preventions, and font integrations), and set up absolute standard JSON-LD schema markings (Person, FAQPage, etc.) to boost indexing rates significantly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer maintenance after my website launches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I provide supportive maintenance bundles including system patches, regular security monitoring, content revisions, database backups, and custom walkthrough training tutorials so you can confidently control content changes."
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
          <div className="relative z-20 flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
