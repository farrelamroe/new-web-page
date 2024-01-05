import { Container, H1, H5, List } from "@/components";
import data from "@/components/data/dataWorkExperiences";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Work() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Container>
        <div data-aos="fade-left" data-aos-duration="1000">
          <H1>Work Experiences</H1>
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

export default Work;
