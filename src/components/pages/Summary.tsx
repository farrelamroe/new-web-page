/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Container, H1, H3, TypingAnimation } from "@/components";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export function Summary() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Container>
        <div data-aos="fade-left" data-aos-duration="1000">
          <H1>
            <TypingAnimation originalText="Summary" delay={300} />
          </H1>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <H3 className="text-justify mt-[16px]">
            I am a Computer Science student at Universitas Gadjah Mada, with a
            strong background in Software Engineering and Data. Throughout my
            journey, I have built valuable experience working in the education
            management industry, where I honed my skills and deepened my passion
            for continuous learning. Beyond my academic interests, I am excited
            by opportunities that allow me to grow in AI an Machine Learning. I
            believe in making a positive impact through both knowledge-sharing
            and collaboration, always striving to bring excellence into every
            project I take on.
          </H3>
        </div>
        <div
          className="flex flex-row justify-center items-center mt-[56px] gap-[16px] flex-wrap"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600">
          <img
            src="/images/summary_1.jpeg"
            alt=""
            height={1000}
            width={1000}
            className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardSummary1"
          />
          <img
            src="/images/summary_2.jpeg"
            alt=""
            height={1000}
            width={1000}
            className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardSummary2"
          />

          <img
            src="/images/summary_3.jpeg"
            alt=""
            height={1000}
            width={1000}
            className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardSummary3"
          />
        </div>
      </Container>
    </>
  );
}

export default Summary;
