/* eslint-disable @next/next/no-img-element */
import { Container, H2, H3, H4, H5, TypingAnimation } from "@/components";
import data from "@/components/data/dataProfile";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container background="/images/background-profile.jpeg">
      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-x-5"
        data-aos="fade-left"
        data-aos-duration="1000">
        <img
          src="/images/foto.jpg"
          alt="poto"
          height={200}
          width={200}
          className="rounded-full aspect-square object-cover object-center"
        />
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:text-start lg:items-start gap-y-2">
          <H2>
            <TypingAnimation originalText="Farrel Amroe Azhari" delay={1000} />
          </H2>
          <H3>
            <TypingAnimation originalText="Web Developer" delay={1000} />
          </H3>
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 text-center items-center justify-center gap-y-[32px] text-secondary-200 pt-[32px]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300">
        {data.map(({ title, text, href }: any) => {
          return (
            <div
              className="flex flex-col justify-center lg:justify-start lg:text-start gap-y-[5px]"
              key={title}>
              <H4>{title}:</H4>
              <H5
                className={`bg-primary-200 text-center rounded-[8px] border-1 py-1 px-3 max-w-[100%] lg:max-w-[75%] ${
                  href == "" ? "" : "hover:font-bold duration-300"
                }`}>
                <a href={href} target="blank">
                  {text}
                </a>
              </H5>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Profile;
