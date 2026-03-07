import { Column, Heading, Row, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: `Experience – ${person.name}`,
        description: `Work, organizational, and volunteer experience of ${person.name}`,
        baseURL: baseURL,
        path: "/experience",
    });
}

const workExperience = [
    {
        company: "Applied Artificial Intelligence Laboratory (AAIL)",
        timeframe: "Jan 2026 - Present",
        role: "Software Engineer",
        achievements: [
            "Architected a secure and scalable server-side infrastructure for Sayo Academy using Next.js and Supabase, enabling seamless onboarding for international users across English and Traditional Chinese locales.",
            "Engineered robust role-based access control (RBAC) via Clerk, securing access for 3+ distinct user roles (admin, teacher, student) across all educational modules.",
            "Delivered full i18n coverage for Sayo Academy and Primary Worksheet platforms, expanding the product's total addressable market by supporting 2 languages end-to-end.",
            "Refactored and optimized 10+ frontend modules with Tailwind CSS, cutting navigation load time and improving modal responsiveness across all screen sizes.",
            "Resolved critical Next.js build bottlenecks that previously blocked CI/CD deployments, reducing build failure rate to zero and unblocking the team's release cycle.",
        ],
    },
    {
        company: "Turnkey Inside - Remote",
        timeframe: "Jun 2025 - Dec 2025",
        role: "Data Monitoring and Automation Supervisor",
        achievements: [
            "Architected a real-time monitoring dashboard for brokers and Liquidity Providers (LP) using Python (Streamlit), which streamlined performance tracking and enabled the data team to make faster, data-driven decisions.",
            "Orchestrated a Data Monitoring team to automate copy-trading systems, successfully eliminating manual tracking errors and significantly boosting overall system operational efficiency.",
            "Analyzed and formulated trading strategies based on trader psychology, providing the company with high-probability execution plans for optimized market entry.",
            "Engineered server-side infrastructure optimizations that slashed copy-trading latency by 60%, drastically improving system reliability and performance during high-frequency trading periods.",
            "Co-developed a proprietary Copy Engine and performed deep-dive data analysis using Python and SQL to identify growth opportunities and refine automated trade execution.",
        ],
    },
    {
        company: "Direktorat Pendidikan dan Pengajaran UGM - Sleman",
        timeframe: "Jan 2025 - May 2025",
        role: "IT Staff (Part time)",
        achievements: [
            "Streamlined academic and student data workflows to achieve 100% data integrity, delivering precise analytical reports to university-level stakeholders that directly informed strategic program decisions.",
            "Produced high-impact visual content across 5+ official publications and social media channels, elevating the Directorate's digital brand consistency and boosting event engagement.",
            "Collaborated with 3 cross-functional administrative teams to integrate technical and design solutions, directly accelerating the execution of 2+ strategic educational programs per semester.",
        ],
    },
    {
        company: "Jogjacamp (Idwebhost) - Kota Yogyakarta, D.I. Yogyakarta",
        timeframe: "Sep 2024 - Nov 2024",
        role: "Frontend Developer",
        achievements: [
            "Architected 10+ responsive UI components for the Chatonomy project using AngularJS, delivering a high-performance interface that improved customer service agent efficiency and user engagement.",
            "Built a Customer Service (CS) rating and performance module from scratch, enabling real-time assessment of agent interactions and reducing manual performance review time by an estimated 40%.",
            "Automated the CS bonus calculation system by integrating real-time performance metrics, eliminating 100% of manual accounting errors and cutting payroll processing time significantly.",
            "Integrated backend APIs with Elasticsearch and Redis, improving data retrieval speed and enabling sub-second real-time caching for high-volume analytics and log management.",
            "Translated business requirements and Figma mockups into 5+ production-ready features in under 3 months, working alongside senior developers to maintain a scalable frontend architecture.",
        ],
    },
    {
        company: "Binar Academy - BSD City, Tangerang, Banten",
        timeframe: "Aug 2023 - Dec 2023",
        role: "Frontend Engineer Intern",
        achievements: [
            "Delivered 10+ features for LMS and CMS platforms used by thousands of Binar Academy students and instructors, working within a 15-person Agile team across 5-month sprint cycles.",
            "Integrated RESTful APIs across both React.js (LMS) and Vue.js (CMS) codebases, demonstrating full-stack versatility and reducing data-fetch latency on key pages.",
            "Modernized legacy Bootstrap and SCSS components across 20+ UI screens, improving visual consistency and reducing average page rendering time through leaner, reusable styles.",
            "Achieved 100% cross-device responsiveness across mobile, tablet, and desktop for all new features, eliminating layout bugs reported during QA cycles.",
            "Managed version control and code reviews via GitLab across a team of 15 engineers, maintaining clean merge history and reducing integration conflicts throughout the development lifecycle.",
        ],
    },
    {
        company: "Koperasi Mahasiswa UGM - Yogyakarta",
        timeframe: "Feb 2023 - Feb 2024",
        role: "IT Support Technician",
        achievements: [
            "Maintained the WordPress-based website and all on-premise hardware (15+ computers, printers, and network infrastructure), achieving zero critical downtime during the 12-month tenure.",
            "Administered the HRIS system managing data integrity and records for 100+ employees and administrators, enabling accurate payroll and HR reporting each month.",
            "Built and shipped a new employee leave application module using PHP, HTML, and CSS, reducing manual leave request processing time by an estimated 50% and improving staff satisfaction.",
            "Oversaw day-to-day IT operations across 3 core information systems, ensuring stable uptime and rapid issue resolution to support daily cooperative business activities.",
        ],
    },
];

const orgExperience = [
    {
        company: "International Genetically Engineered Machine (iGEM) - UGM",
        timeframe: "Jun 2022 - Nov 2025",
        role: "Software Engineer",
        achievements: [
            "Engineered and shipped the official international competition website solo within a 3-person team across 4 competition cycles (2022-2025), directly contributing to the team securing multiple International Gold Medals.",
            "Built a high-performance Next.js + Tailwind CSS frontend that visualized complex synthetic biology findings for a global audience of 1,000+ international judges and researchers.",
            "Achieved full cross-device responsiveness, making the wiki accessible on mobile, tablet, and desktop, eliminating all layout-related accessibility issues flagged in previous years.",
            "Synthesized data from 5+ Lab and Human Practices sub-teams into structured web content, reducing content-to-publish turnaround time through streamlined GitHub and GitLab workflows.",
        ],
    },
    {
        company: "Festival Gadjah Mada - Yogyakarta",
        timeframe: "Jul 2022 - Nov 2022",
        role: "Front End Developer",
        achievements: [
            "Built the official Gadjah Mada Festival website with a 5-person team using React.js and Tailwind CSS, serving thousands of visitors during the event period.",
            "Developed the e-commerce UI covering ticket sales and event info, enabling seamless online transactions for concerts and theater across 4 event categories.",
            "Structured and displayed data for 66+ tenants and 350+ products, ensuring accurate and fast browsing for all festival visitors across 4 distinct product categories.",
            "Delivered 100% responsive components compatible with mobile, tablet, and desktop, eliminating any layout issues reported by QA teams prior to launch.",
            "Managed source code and feature branches for a 5-person team using GitHub, maintaining a clean commit history and zero merge conflicts throughout the 5-month project.",
        ],
    },
    {
        company: "Pekan Olahraga Dan Seni Gadjah Mada (Porsenigama) - Yogyakarta",
        timeframe: "Sep 2022 - Dec 2022",
        role: "UI/UX Designer",
        achievements: [
            "Led the complete UX design lifecycle in Figma — from user flows and wireframes to high-fidelity prototypes — for 5 core website sections, delivering design handoff in under 2 months.",
            "Coordinated with a 7-person cross-functional team (developers, PM, and clients) to align on requirements, cutting revision cycles by maintaining clear design documentation.",
            "Designed the full UI for the Porsenigama 2022 website, covering Information, FAQ, Schedules, Standings, and Gallery pages, replacing a manual process with a centralized digital platform.",
            "Solved the key user pain point of finding match schedules and medal standings, reducing information-search friction through an intuitive card-based and filter-driven design.",
            "Delivered a reusable design system in Figma covering typography, colors, and components, enabling the dev team to ship UI 30% faster and ensuring visual consistency site-wide.",
        ],
    },
    {
        company: "Google Developer Student Club (GDSC) - Yogyakarta",
        timeframe: "Nov 2022 - Oct 2023",
        role: "Hacker - Mobile Developer",
        achievements: [
            "Collaborated with a 4-person team to design and prototype a Flutter mobile application for internal Hackathon competition, delivering a functional MVP within a 48-hour sprint.",
            "Engineered a fully responsive mobile UI, ensuring pixel-perfect layouts across 10+ Android device sizes and screen resolutions.",
            "Integrated Firebase authentication to manage user login and session data, securing access for 50+ test users during the competition demo.",
            "Structured a modular, reusable Flutter widget architecture and managed all source code via GitHub, enabling efficient team collaboration with zero merge conflicts.",
        ],
    },
    {
        company: "Balairungklass Tryout 2023 - Klaten",
        timeframe: "Dec 2022 - Jan 2023",
        role: "Front End Developer",
        achievements: [
            "Delivered the Blasout 2023 event website with a 7-person team using Next.js and Tailwind CSS, successfully reaching 500+ prospective new students within the first week of launch.",
            "Built a fully responsive layout optimized for desktop, tablet, and mobile, eliminating all device-specific layout issues before the official launch.",
            "Developed reusable UI components and maintained clean, well-documented code, cutting future update time and enabling non-authors to extend the site without assistance.",
        ],
    },
    {
        company: "Jogja Information Technology Session (JOINTS) - Yogyakarta",
        timeframe: "Jan 2023 - May 2023",
        role: "Front End Developer",
        achievements: [
            "Collaborated within a 15-person engineering team to architect and launch multiple high-traffic event websites, including Techtalk, Jointscamp, and the primary JOINTS competition platform.",
            "Engineered a high-performance user interface for the main competition site using Next.js and Tailwind CSS, focusing on seamless event navigation and interactive user features.",
            "Spearheaded the end-to-end development of a secure authentication and registration system, successfully managing data and access for 500+ participants and administrators.",
            "Architected specialized competition modules, including custom-tailored interfaces for Competitive Programming (CP) and Capture The Flag (CTF) events.",
            "Streamlined application performance and data flow by integrating Redux to manage complex asynchronous API interactions and real-time competition data.",
        ],
    },
    {
        company: "PPSMB Pionir Gadjah Mada - Yogyakarta",
        timeframe: "Mar 2023 - Aug 2023",
        role: "Software Engineer",
        achievements: [
            "Orchestrated the end-to-end development of the official PPSMB website, successfully serving as the centralized information hub for 9,500+ concurrent student users.",
            "Architected a scalable web platform using Next.js and Tailwind CSS, implementing a modular and reusable codebase that ensured 100% responsiveness and streamlined team collaboration via GitHub.",
            "Designed and engineered a complex information architecture, integrating high-traffic modules for event scheduling, student club (UKM) directories, and a real-time news portal (Palapedia).",
            "Pioneered an immersive Augmented Reality (AR) feature using Three.js, enabling thousands of students to interactively explore faculty profiles through cutting-edge web technology.",
            "Boosted student engagement by developing interactive tools, including a student-ID-based group locator and a gamified experience profiling key university figures.",
        ],
    },
];

function ExperienceItem({
    company,
    timeframe,
    role,
    achievements,
}: {
    company: string;
    timeframe: string;
    role: string;
    achievements: string[];
}) {
    return (
        <Column fillWidth gap="8" paddingBottom="l">
            <Row fillWidth horizontal="between" vertical="end" gap="12">
                <Text variant="heading-strong-l" style={{ flex: 1 }}>
                    {company}
                </Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak" style={{ whiteSpace: "nowrap" }}>
                    {timeframe}
                </Text>
            </Row>
            <Text variant="body-default-s" onBackground="brand-weak" marginBottom="8">
                {role}
            </Text>
            <Column as="ul" gap="8">
                {achievements.map((a, i) => (
                    <Text as="li" variant="body-default-m" key={a.slice(0, 40)}>
                        {a}
                    </Text>
                ))}
            </Column>
        </Column>
    );
}

export default function Experience() {
    return (
        <Column maxWidth="m" paddingY="24" gap="xl">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path="/experience"
                title={`Experience – ${person.name}`}
                description={`Work, organizational, and volunteer experience of ${person.name}`}
                image="/api/og/generate?title=Experience"
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />

            {/* Work Experience */}
            <Column fillWidth gap="l">
                <Heading as="h2" variant="display-strong-s">
                    Work Experience
                </Heading>
                <Column fillWidth gap="l">
                    {workExperience.map((exp, i) => (
                        <ExperienceItem key={exp.company} {...exp} />
                    ))}
                </Column>
            </Column>

            {/* Organizational & Volunteer */}
            <Column fillWidth gap="l">
                <Heading as="h2" variant="display-strong-s">
                    Organizational & Volunteer Experience
                </Heading>
                <Column fillWidth gap="l">
                    {orgExperience.map((exp, i) => (
                        <ExperienceItem key={exp.company} {...exp} />
                    ))}
                </Column>
            </Column>
        </Column>
    );
}
