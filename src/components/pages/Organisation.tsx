import { Container, H1, List } from "@/components";
import data from "@/components/data/dataOrganisationalExperiences";


export function Organisation() {
  return (
    <>
      <Container>
        <H1>Organisational Experiences</H1>
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

export default Organisation;
