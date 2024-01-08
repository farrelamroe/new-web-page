import { Container, H1, H3, H5, TypingAnimation } from "@/components";
import data from "@/components/data/dataCertificate";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function Certificate() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <div data-aos="fade-left" data-aos-duration="1000">
        <H1>
          <TypingAnimation originalText="Certificates" delay={300} />
        </H1>
      </div>
      <table className="w-full mt-[16px] border-separate border-spacing-y-6">
        <tr
          className="text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100">
          <td className="max-w-[10vw]">
            <H3>Title</H3>
          </td>
          <td>
            <H3>Year</H3>
          </td>
          <td>
            <H3>URL</H3>
          </td>
        </tr>
        {data.map(({ title, year, url, delay }) => {
          return (
            <tr
              className="text-center border-2 border-secondary-200"
              key={title}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay={delay}>
              <td className="max-w-[10vw] items-center text-start">
                <H5>{title}</H5>
              </td>
              <td>
                <H5>{year}</H5>
              </td>
              <td>
                <H5>
                  <a
                    href={url}
                    className="hover:font-bold duration-300"
                    target="blank">
                    here
                  </a>
                </H5>
              </td>
            </tr>
          );
        })}
      </table>
    </Container>
  );
}

export default Certificate;
