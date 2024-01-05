import { Container, H1 } from "@/components";
import data from "@/components/data/dataSkill";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Skill() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <div data-aos="fade-left" data-aos-duration="1000">
        <H1>Work Experiences</H1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-[16px] mt-[16px] items-center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300">
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
