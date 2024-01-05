import { Container, H1, List } from "@/components";
import data from "@/components/data/dataEducation";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Education() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Container>
        <div data-aos="fade-left" data-aos-duration="1000">
          <H1>Education</H1>
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

export default Education;
