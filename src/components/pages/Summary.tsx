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
            Computer Science graduate from Universitas Gadjah Mada with a proven
            track record in Software Engineering and Data Science. Spearheaded
            the Data Monitoring and Automation team, where I engineered server
            optimizations that slashed latency by 60%. Developed strong
            leadership and analytical problem-solving skills by delivering
            high-traffic platforms for 9,500+ users and securing multiple
            International Gold Medals (iGEM). Expert in building scalable
            applications with Next.js, React.js, Golang, and Python, and
            integrating advanced AI models (BiLSTM/BiGRU) and Gemini LLM APIs to
            solve complex technical challenges. Eager to leverage these
            technical competencies and a data-driven mindset to accelerate
            innovation and operational excellence.
          </H3>
        </div>
        <div
          className="flex flex-row justify-center items-center mt-[56px] gap-[16px] flex-wrap"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
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
