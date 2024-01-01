import { Container, H1, H3 } from "@/components";
import data from "@/components/data/dataSkill";
import Image from "next/image";

export function Skill() {
  return (
    <Container>
      <H1>Skills</H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-[16px] mt-[16px] items-center">
          {data.map(({ imageUrl }) => {
            return (
              <Image
                key={imageUrl}
                src={imageUrl}
                alt=""
                height={1000}
                width={1000}
                className="max-w-[200px]"
              />
            );
          })}
        </div>
    </Container>
  );
}

export default Skill;
