import Image from "next/image";
import { Container, H3, H5 } from "@/components";

export function Profile() {
  const data = [
    {
      title: "Name",
      text: "Farrel",
    },
    {
      title: "Full Name",
      text: "Farrel Amroe Azhari",
    },
    {
      title: "Email Address",
      text: "farrelamroe@gmail.com",
    },
    {
      title: "Phone Number",
      text: "+6289506144788",
    },
    {
      title: "Location",
      text: "Surakarta City, Central Java, Indonesia",
    },
  ];
  return (
    <Container>
      <div className="flex flex-row justify-center items-center gap-x-5">
        <Image
          src="/images/Foto Individu_IT_Keamanan_Farrel Amroe Azhari_MIPA 2021.JPG"
          alt="poto"
          height={200}
          width={200}
          className="rounded-full aspect-square object-cover object-top"
        />
        <div className="flex flex-col justify-start items-start gap-y-2">
          <H3>Farrel Amroe Azhari</H3>
          <H3>Web Developer</H3>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-y-[64px] text-secondary-200">
        {data.map(({ title, text }) => {
          return (
            <div
              className="flex flex-col justify-start gap-y-[5px]"
              key={title}>
              <H5>{title}</H5>
              <H5 className="bg-primary-200 text-center rounded-[8px] border-1 py-1 px-3 max-w-[75%]">
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
