import { Container, H1, ListPortofolio, TypingAnimation } from "@/components";
import data from "@/components/data/dataPortofolio";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Portofolio() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <div data-aos="fade-left" data-aos-duration="1000">
        <H1>
          <TypingAnimation originalText="Project" delay={300} />
        </H1>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
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
      </div>
    </Container>
  );
}

export default Portofolio;
