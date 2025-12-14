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
            Computer Science graduate from Universitas Gadjah Mada with a strong
            foundation in Software Engineering and Data Science. Proven track
            record in developing high-performance web applications using Next.js
            and React.js, with recent professional experience leading Data
            Monitoring and Automation teams using Python. Skilled in integrating
            AI models (BiLSTM/BiGRU) and LLM-based tools into practical
            solutions. An international Gold Medalist (iGEM) committed to
            leveraging technology for data-driven innovation.
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
