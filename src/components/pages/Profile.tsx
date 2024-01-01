import Image from "next/image";
import { Container, H2, H3, H4, H5 } from "@/components";
import data from "@/components/data/dataProfile";

export function Profile() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5">
        <Image
          src="/images/Foto Individu_IT_Keamanan_Farrel Amroe Azhari_MIPA 2021.JPG"
          alt="poto"
          height={200}
          width={200}
          className="rounded-full aspect-square object-cover object-top"
        />
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:text-start lg:items-start gap-y-2">
          <H2>Farrel Amroe Azhari</H2>
          <H3>Web Developer</H3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center items-center justify-center gap-y-[64px] text-secondary-200 pt-[32px]">
        {data.map(({ title, text }) => {
          return (
            <div
              className="flex flex-col justify-center lg:justify-start lg:text-start gap-y-[5px]"
              key={title}>
              <H4>{title}</H4>
              <H5 className="bg-primary-200 text-center rounded-[8px] border-1 py-1 px-3 max-w-[100%] lg:max-w-[75%]">
                {text}
              </H5>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Profile;