import { Container, H1, List } from "@/components";
import data from "@/components/data/dataEducation"

export function Education() {
  return (
    <>
      <Container>
        <H1>Education</H1>
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

export default Education;
