import { Column, Heading, Row, Tag, Text, Meta, Schema, Line } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: `Certificates – ${person.name}`,
        description: `Certifications and professional modules completed by ${person.name}`,
        baseURL: baseURL,
        path: "/certificates",
    });
}

const certificates = [
    // 2026
    {
        title: "English Proficiency Online Test",
        issuer: "Yureka Education Center",
        year: "2026",
        url: "https://drive.google.com/file/d/1RjxjqV-Q27DxA_fZsq1a9s4cfL1GsYxE/view?usp=sharing",
        tags: [{ name: "English" }],
        path: "English Test",
    },
    // 2025
    {
        title: "AWS re/Start Program Batch 13",
        issuer: "Orbit Future Academy",
        year: "2025",
        url: "https://drive.google.com/file/d/1BayH_djNVAh0zlr4lyf3PqmD9Qgc8O57/view?usp=drive_link",
        tags: [{ name: "Cloud" }, { name: "AWS" }],
        path: "AWS",
    },
    {
        title: "AI Productivity and AI API Integration for Developers",
        issuer: "Hacktiv8",
        year: "2025",
        url: "https://drive.google.com/file/d/1EFYjsv13sj6l0hWUn_IG-2Y4gp_yrgir/view?usp=sharing",
        tags: [{ name: "AI" }, { name: "Python", icon: "python" }, { name: "JavaScript", icon: "javascript" }],
        path: "AI and Web Development",
    },
    {
        title: "LLM-Based Tools and Gemini API Integration for Data Scientists",
        issuer: "Hacktiv8",
        year: "2025",
        url: "https://drive.google.com/file/d/1_Mp0tW-1B9ohns7aubLSXXN05fk6K4Zk/view?usp=drive_link",
        tags: [{ name: "LLM / Gemini API" }, { name: "Python", icon: "python" }, { name: "Streamlit", icon: "streamlit" }],
        path: "AI and Data Scientist",
    },
    // 2024
    {
        title: "Digistar Class (Front End Developer)",
        issuer: "Telkom Indonesia",
        year: "2024",
        url: "https://drive.google.com/file/d/1fU6gJLxdjnDBgbbC7Zc_iOAfLRXmVoT4/view?usp=drive_link",
        tags: [{ name: "Next.js", icon: "nextjs" }, { name: "Tailwind CSS", icon: "tailwind" }],
        path: "Hacker - Front End",
    },
    {
        title: "Studi Independen MBKM Backend Engineer With Golang",
        issuer: "Alterra Academy",
        year: "2024",
        url: "https://drive.google.com/file/d/1tsqhBdgblzfM8nGuD2-Ak-SgpNt4Lj-P/view?usp=sharing",
        tags: [{ name: "Go (Golang)", icon: "golang" }, { name: "Backend" }],
        path: "Back-End Engineer with Golang",
    },
    // 2023
    {
        title: "7 Days of Code: Mastering Flutter User-Interface Design",
        issuer: "Build With Angga",
        year: "2023",
        url: "https://class.buildwithangga.com/talent/farrelamroe/flutter-dart-crash-course-modern-ui-design",
        tags: [{ name: "Flutter" }, { name: "Dart" }],
        path: "Multi Platform App",
    },
    {
        title: "Memulai Pemrograman dengan Dart",
        issuer: "Dicoding",
        year: "2023",
        url: "https://www.dicoding.com/certificates/98XWV0039PM3",
        tags: [{ name: "Dart" }, { name: "Flutter" }],
        path: "Multi Platform App",
    },
    // 2022
    {
        title: "Belajar Dasar Visualisasi Data",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/JMZVG4GVOZN9",
        tags: [{ name: "Python", icon: "python" }, { name: "Data Viz" }],
        path: "Machine Learning",
    },
    {
        title: "Memulai Pemrograman Dengan Python",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/4EXG57L7GXRL",
        tags: [{ name: "Python", icon: "python" }],
        path: "Machine Learning",
    },
    {
        title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/QLZ9K1Y57Z5D",
        tags: [{ name: "Cloud" }, { name: "AWS" }],
        path: "Backend",
    },
    {
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/KEXLGG9YMZG2",
        tags: [{ name: "JavaScript", icon: "javascript" }],
        path: "Backend",
    },
    {
        title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/98XWR46DWZM3",
        tags: [{ name: "JavaScript", icon: "javascript" }, { name: "Backend" }],
        path: "Backend",
    },
    {
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/2VX31YQE4ZYQ",
        tags: [{ name: "HTML/CSS", icon: "html" }],
        path: "Frontend",
    },
    {
        title: "Belajar Membuat Front-End Web untuk Pemula",
        issuer: "Dicoding",
        year: "2022",
        url: "https://www.dicoding.com/certificates/4EXG5751QXRL",
        tags: [{ name: "HTML/CSS", icon: "html" }, { name: "JavaScript", icon: "javascript" }],
        path: "Frontend",
    },
];

export default function Certificates() {
    // Group by year
    const byYear = certificates.reduce<Record<string, typeof certificates>>((acc, cert) => {
        if (!acc[cert.year]) acc[cert.year] = [];
        acc[cert.year].push(cert);
        return acc;
    }, {});

    const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

    return (
        <Column maxWidth="m" paddingY="24" gap="xl">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path="/certificates"
                title={`Certificates – ${person.name}`}
                description={`Certifications and modules completed by ${person.name}`}
                image="/api/og/generate?title=Certificates"
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />

            <Heading variant="display-strong-s">Certificates & Modules</Heading>

            {years.map((year) => (
                <Column key={year} fillWidth gap="l">
                    <Heading as="h2" variant="heading-strong-xl">
                        {year}
                    </Heading>
                    <Column fillWidth gap="m">
                        {byYear[year].map((cert, i) => (
                            <Column key={`${cert.year}-${cert.title}`} fillWidth gap="8" paddingBottom="16">
                                {i > 0 && <Line marginBottom="16" />}
                                <Row fillWidth horizontal="between" vertical="start" gap="12">
                                    <Column gap="4" flex={1}>
                                        {cert.url ? (
                                            <Text
                                                as="a"
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="heading-strong-l"
                                                style={{ textDecoration: "none" }}
                                                onBackground="neutral-strong"
                                            >
                                                {cert.title}
                                            </Text>
                                        ) : (
                                            <Text variant="heading-strong-l">{cert.title}</Text>
                                        )}
                                        <Text variant="body-default-s" onBackground="brand-weak">
                                            {cert.issuer} · {cert.path}
                                        </Text>
                                        {cert.url && (
                                            <Text
                                                as="a"
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="body-default-s"
                                                onBackground="brand-medium"
                                                style={{ textDecoration: "none" }}
                                            >
                                                View Certificate →
                                            </Text>
                                        )}
                                    </Column>
                                </Row>
                                <Row wrap gap="8" paddingTop="4">
                                    {cert.tags.map((tag, j) => (
                                        <Tag key={tag.name} size="m" prefixIcon={(tag as { name: string; icon?: string }).icon}>
                                            {tag.name}
                                        </Tag>
                                    ))}
                                </Row>
                            </Column>
                        ))}
                    </Column>
                </Column>
            ))}
        </Column>
    );
}
