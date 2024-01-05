import Image from "next/image";
import { Container } from "../template/Container";
import { H1, H3 } from "@/components";
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
          <H1>Summary</H1>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <H3 className="text-justify mt-[16px]">
            Mahasiswa S1 Ilmu Komputer Universitas Gadjah Mada dengan pengalaman
            dalam bidang IT seperti web development, mobile development, UI/UX
            designer, dan Software Development selama 2 tahun menjadi mahasiswa.
            Berpengalaman dalam hal lain yang relevan dengan passion seperti
            matematika, pendidikan, serta penelitian. Saya berminat menjadi
            seorang developer.
          </H3>
        </div>
        <div
          className="flex flex-row justify-center items-center mt-[56px] gap-[16px] flex-wrap"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600">
          <Image
            src="/images/summary_1.jpeg"
            alt=""
            height={1000}
            width={1000}
            className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardSummary1"
          />
          <Image
            src="/images/summary_2.jpeg"
            alt=""
            height={1000}
            width={1000}
            className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardSummary2"
          />

          <Image
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
