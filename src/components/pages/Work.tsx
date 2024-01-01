import { Container, H1, H5, List } from "@/components";
import data from "@/components/data/dataWorkExperiences"

export function Work() {
  return (
    <>
      <Container>
        <H1>Work Experiences</H1>
        {data.map(({ title, time, position, achievement }) => {
          return (
            <List title={title} time={time} position={position} key={title}>
              {achievement}
            </List>
          );
        })}
      </Container>
    </>
  );
}

export default Work;
