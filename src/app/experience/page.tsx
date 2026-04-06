import { Column, Heading, Row, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getDictionary, getLocale } from "@/app/dictionaries";

export async function generateMetadata() {
    const locale = await getLocale();
    const dict = await getDictionary();
    const { person } = dict;
    return Meta.generate({
        title: locale === "id" ? `Pengalaman – ${person.name}` : `Experience – ${person.name}`,
        description: locale === "id" ? `Pengalaman kerja, organisasi, dan sukarelawan dari ${person.name}` : `Work, organizational, and volunteer experience of ${person.name}`,
        baseURL: baseURL,
        path: `/${locale}/experience`,
    });
}


function ExperienceItem({
    company,
    timeframe,
    role,
    achievements,
}: {
    company: string;
    timeframe: string;
    role: string;
    achievements: React.ReactNode[];
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
                {achievements.map((a, i) => {
                    // Try to safely extract string from ReactNode or fallback to index. This avoids React warnings.
                    const safeKey = typeof a === "string" ? `${a.slice(0, 40)}-${i}` : `${company}-achivement-${i}`;
                    return (
                        <Text as="li" variant="body-default-m" key={safeKey}>
                            {a}
                        </Text>
                    );
                })}
            </Column>
        </Column>
    );
}

export default async function Experience() {
    const locale = await getLocale();
    const dict = await getDictionary();
    const { person, about } = dict;

    const experiencesTitle = locale === "id" ? "Pengalaman" : "Experience";
    const workTitle = locale === "id" ? "Pengalaman Kerja" : "Work Experience";
    const orgTitle = locale === "id" ? "Pengalaman Organisasi & Relawan" : "Organizational & Volunteer Experience";
    const pageDescription = locale === "id" ? `Pengalaman kerja, organisasi, dan sukarelawan dari ${person.name}` : `Work, organizational, and volunteer experience of ${person.name}`;

    const orgExperienceList = about.orgExperiences ?? [];

    return (
        <Column maxWidth="m" paddingY="24" gap="xl">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path="/experience"                title={`${experiencesTitle} – ${person.name}`}
                description={pageDescription}
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
                    {workTitle}
                </Heading>
                <Column fillWidth gap="l">
                    {about.work.experiences.map((exp, i) => (
                        <ExperienceItem key={exp.company} {...exp} />
                    ))}
                </Column>
            </Column>

            {/* Organizational & Volunteer */}
            <Column fillWidth gap="l">
                <Heading as="h2" variant="display-strong-s">
                    {orgTitle}
                </Heading>
                <Column fillWidth gap="l">
                    {orgExperienceList.map((exp, i) => (
                        <ExperienceItem key={exp.company} {...exp} />
                    ))}
                </Column>
            </Column>
        </Column>
    );
}
