import Image from "next/image";
import { Container } from "./Container";
import { H1, H3 } from "@/components";

export function Summary() {
  return (
    <>
      <Container>
        <H1>Summary</H1>
        <H3 className="text-justify mt-[16px]">
          Mahasiswa S1 Ilmu Komputer Universitas Gadjah Mada dengan pengalaman
          dalam bidang IT seperti web development, mobile development, UI/UX
          designer, dan Software Development selama 2 tahun menjadi mahasiswa.
          Berpengalaman dalam hal lain yang relevan dengan passion seperti
          matematika, pendidikan, serta penelitian. Saya berminat menjadi
          seorang developer.
        </H3>
        <div className="flex flex-row justify-center items-center mt-[56px] gap-x-[5px] flex-wrap">
          
            <Image
              src="/images/summary_1.jpeg"
              alt=""
              height={1000}
              width={1000}
              className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardPalapedia1"
            />
            <Image
              src="/images/summary_2.jpeg"
              alt=""
              height={1000}
              width={1000}
              className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardPalapedia2"
            />
         
          
            <Image
              src="/images/summary_3.jpeg"
              alt=""
              height={1000}
              width={1000}
              className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardPalapedia3"
            />
            <Image
              src="/images/summary_4.jpeg"
              alt=""
              height={1000}
              width={1000}
              className="aspect-square object-cover object-center max-w-[250px] rounded-[8px] cardPalapedia4"
            />
          
        </div>
      </Container>
    </>
  );
}

export default Summary;
