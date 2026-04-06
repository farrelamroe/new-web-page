import { Column, Heading, Meta, Schema, Fade } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { Projects } from "@/components/projects/Projects";
import { getDictionary, getLocale } from "@/app/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { work } = dict;
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { work, person, about } = dict;

  return (
    <Column maxWidth="m" paddingY="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {work.title}
      </Heading>
      <Projects locale={locale} />
    </Column>
  );
}
