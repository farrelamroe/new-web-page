import { Container, H1, ListPortofolio } from "@/components";
import data from "@/components/data/dataPortofolio";

export function Portofolio() {
  return (
    <Container>
      <H1>Portofolio</H1>
      {data.map(
        ({
          title,
          children,
          repositoryUrl,
          repositoryText,
          linkUrl,
          linkText,
          figmaUrl,
          figmaText,
        }) => {
          return (
            <ListPortofolio
              title={title}
              key={title}
              repositoryUrl={repositoryUrl}
              repositoryText={repositoryText}
              linkUrl={linkUrl}
              linkText={linkText}
              figmaUrl={figmaUrl}
              figmaText={figmaText}>
              {children}
            </ListPortofolio>
          );
        }
      )}
    </Container>
  );
}

export default Portofolio;
