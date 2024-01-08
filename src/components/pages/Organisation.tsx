import { Container, H1, List, TypingAnimation } from "@/components";
import data from "@/components/data/dataOrganisationalExperiences";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Organisation() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Container>
        <div data-aos="fade-left" data-aos-duration="1000">
          <H1>
            <TypingAnimation
              originalText="Organisational Experiences"
              delay={300}
            />
          </H1>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          {data.map(({ title, time, position, achievement }) => {
            return (
              <List title={title} time={time} position={position} key={title}>
                {achievement}
              </List>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Organisation;
