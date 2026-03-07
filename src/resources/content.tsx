import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Farrel Amroe",
  lastName: "Azhari",
  name: "Farrel Amroe Azhari",
  role: "Software Engineer",
  avatar: "/images/foto.jpg",
  email: "farrelamroe@gmail.com",
  location: "Asia/Jakarta", // Must be IANA format for timezone rendering
  languages: ["English", "Bahasa Indonesia"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/farrelamroe",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/farrel-amroe-azhari-8b14b5217/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/farrelamroe/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "CV",
    icon: "document",
    link: "https://drive.google.com/file/d/1mp_1xoAud__fhaJBHaY4VHA3Ym45h7XQ/view?usp=sharing",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building functional interfaces and scalable software solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AAIL</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/projects/aail-software-engineering",
  },
  subline: (
    <>
      I'm Farrel, a software engineer based in Surakarta City, Central Java, Indonesia. I specialize in <Text as="span" size="xl" weight="strong">Backend Engineering</Text> and <Text as="span" size="xl" weight="strong">Frontend Development</Text>. I build efficient, stable, and user-centric applications.
    </>
  ),
};

const
  about: About = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Farrel is a software engineer with a passion for transforming complex challenges
          into scalable, elegant solutions. His work spans backend architectures, frontend
          experiences, and the integration of AI and data engineering to solve real-world
          problems. He is particularly drawn to the intersection of software engineering
          and intelligent systems, from building LLM-powered tools to designing
          deep learning pipelines for NLP tasks.
        </>
      ),
    },
    work: {
      display: false,
      title: "Work Experience",
      experiences: [
        {
          company: "Applied Artifical Intelligence Laboratory (AAIL) - Remote",
          timeframe: "Jan 2026 - Present",
          role: "Software Engineer",
          achievements: [
            "Architected a secure and scalable server-side infrastructure for Sayo Academy using Next.js and Supabase.",
            "Orchestrated advanced API integrations and role-based access control (RBAC) mechanisms using Clerk.",
            "Implemented robust internationalization (i18n) for Sayo Academy and Primary Worksheet platforms with comprehensive support for English and Traditional Chinese users.",
            "Engineered frontend module optimizations using Tailwind CSS, streamlining application navigation and modal responsiveness.",
            "Co-developed proprietary educational features and resolved complex Next.js build configuration bottlenecks."
          ],
          images: [],
        },
        {
          company: "Turnkey Inside - Remote",
          timeframe: "Jun 2025 - Dec 2025",
          role: "Data Monitoring and Automation Supervisor",
          achievements: [
            "Architected a real-time monitoring dashboard for brokers and Liquidity Providers (LP) using Python (Streamlit).",
            "Orchestrated a Data Monitoring team to automate copy-trading systems, successfully eliminating manual tracking errors.",
            "Engineered server-side infrastructure optimizations that slashed copy-trading latency by 60%.",
            "Co-developed a proprietary Copy Engine and performed deep-dive data analysis using Python and SQL."
          ],
          images: [],
        },
        {
          company: "Jogjacamp (Idwebhost)",
          timeframe: "Sep 2024 - Nov 2024",
          role: "Frontend Developer",
          achievements: [
            "Architected responsive UI components for the Chatonomy project using AngularJS.",
            "Engineered a core module for a Customer Service rating and performance system.",
            "Automated the CS bonus calculation system by integrating real-time performance metrics.",
            "Integrated complex backend APIs with Elasticsearch and Redis."
          ],
          images: [],
        },
        {
          company: "Binar Academy - Intern",
          timeframe: "Aug 2023 - Dec 2023",
          role: "Frontend Engineer Intern",
          achievements: [
            "Accelerated the delivery and scaling of features for web-based Learning Management (LMS) and Content Management (CMS) platforms.",
            "Engineered dynamic application pages by integrating RESTful APIs across React.js and Vue.js frameworks.",
            "Refactored and modernized legacy UI components using Bootstrap and custom SCSS."
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Studies",
      institutions: [
        {
          name: "Universitas Gadjah Mada - Indonesia",
          description: <>Bachelor Degree in Computer Science, 3.81/4.00 (Aug 2021 - Apr 2025)</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Technical skills",
      skills: [
        {
          title: "Programming Languages",
          description: (
            <>Proficient in multiple paradigms, scripting, systems, and query languages, to pick the right tool for every problem.</>
          ),
          tags: [
            { name: "Python", icon: "python" },
            { name: "JavaScript", icon: "javascript" },
            { name: "C++", icon: "cplusplus" },
            { name: "Java", icon: "java" },
            { name: "SQL", icon: "sql" },
            { name: "Go (Golang)", icon: "golang" },
          ],
          images: [],
        },
        {
          title: "Web Development",
          description: (
            <>Building responsive, high-performance web apps from scratch, turning designs into pixel-perfect, interactive experiences.
            </>
          ),
          tags: [
            { name: "Next.js", icon: "nextjs" },
            { name: "React.js", icon: "react" },
            { name: "Vue.js", icon: "vue" },
            { name: "AngularJS", icon: "angular" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "SCSS", icon: "scss" },
            { name: "HTML/CSS", icon: "html" },
          ],
          images: [],
        },
        {
          title: "Data & AI Engineering",
          description: (
            <>Integrating LLMs and deep learning models into production systems, from real-time dashboards to NLP pipelines.</>
          ),
          tags: [
            { name: "Streamlit", icon: "streamlit" },
            { name: "BiLSTM / BiGRU", icon: "tensorflow" },
            { name: "LLM & Gemini API", icon: "google" },
            { name: "Elasticsearch", icon: "elasticsearch" },
            { name: "Redis", icon: "redis" },
            { name: "Python", icon: "python" },
          ],
          images: [],
        },
        {
          title: "Tools & Platforms",
          description: (
            <>Comfortable with the full dev toolchain, from version control and CI/CD to design handoff and cloud deployment.</>
          ),
          tags: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "GitLab", icon: "gitlab" },
            { name: "Figma", icon: "figma" },
            { name: "MS Excel" },
            { name: "VS Code", icon: "vscode" },
          ],
          images: [],
        },
      ],
    },
    achievements: {
      display: true,
      title: "Achievements",
      items: [
        {
          title: "Gold Medal, Inclusivity Award, Top 5 Best Diagnostics Project",
          body: "International Genetically Engineered Machine (iGEM) 2023",
          year: "2023",
        },
        {
          title: "Gold Medal, Grand Prize Winner, Best Presentation, Best Synthetic Biology Project, Best Website",
          body: "Bioinformatics and Synthetic Biology Competition (BIOSCOM) 2024",
          year: "2024",
        },
        {
          title: "Gold Medal",
          body: "International Genetically Engineered Machine (iGEM) 2025",
          year: "2025",
        },
      ],
    },
  };

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
