/* eslint-disable @next/next/no-img-element */
import { H5, Text } from "@/components";

const data = [
  {
    title: "AI Productivity and AI API Integration for Developers - Chatbot",
    repositoryUrl: null,
    repositoryText: null,
    children: (
      <>
        <H5>
          Multimodal AI Chatbot (Groq & Llama Vision) Developed a full-stack AI
          chatbot application capable of processing both text and image inputs
          by integrating the Groq API with an Express.js backend. The system
          implements dynamic model switching, utilizing llama-3.3-70b-versatile
          for high-performance text generation and llama-3.2-11b-vision-preview
          for analyzing uploaded images. The frontend was built using vanilla
          JavaScript, HTML, and CSS, featuring a clean chat interface that
          supports file uploads and renders Markdown responses in real-time.
          <ul className="custom-list-disc">
            <li>Backend: Node.js, Express.js, Multer (Memory Storage).</li>
            <li>
              AI & LLM: Groq SDK, Llama 3.3 (Text), Llama 3.2 Vision
              (Multimodal).
            </li>
            <li>
              Frontend: HTML5, CSS3, JavaScript, Marked.js (Markdown Parsing).
            </li>
            <li>Environment: dotenv for API key management.</li>
          </ul>
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/html.svg" alt="" className="max-w-[32px]" />
          <img src="/images/css.png" alt="" className="max-w-[32px]" />
          <img src="/images/javascript.svg" alt="" className="max-w-[32px]" />
          <img src="/images/node.png" alt="" className="max-w-[48px]" />
          <img src="/images/groq.png" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title:
      "LLM-Based Tools and Gemini API Integration for Data Scientists - Dapur Genius",
    repositoryUrl: "https://github.com/farrelamroe/dapur-genius",
    repositoryText: "Github",
    children: (
      <>
        <H5>
          DapurGenius: AI-Powered Zero-Waste Cooking Assistant Developed
          DapurGenius, an interactive AI culinary assistant designed to promote
          zero-waste cooking by generating creative recipes based on
          user-provided leftover ingredients. The application was built using
          Python and Streamlit for a responsive user interface, utilizing
          LangChain to orchestrate conversational flows. It leverages the Groq
          API (specifically the llama-3.3-70b-versatile model) to ensure
          high-speed, low-latency inference, allowing users to customize recipes
          by difficulty level and available cooking time through an engaging AI
          chef persona. Tech Stack & Key Competencies:
          <ul className="custom-list-disc">
            <li>Languages & Frameworks: Python, Streamlit.</li>
            <li>
              AI & LLM: LangChain (Core & Community), Groq API, Llama 3.3.
            </li>
            <li>Environment Management: python-dotenv.</li>
          </ul>
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/python.png" alt="" className="max-w-[32px]" />
          <img src="/images/streamlit.png" alt="" className="max-w-[128px]" />
          <img src="/images/langchain.png" alt="" className="max-w-[32px]" />
          <img src="/images/groq.png" alt="" className="max-w-[64px]" />
        </div>
      </>
    ),
  },
  {
    title: "Undergraduate Thesis",
    repositoryUrl: null,
    repositoryText: null,
    children: (
      <>
        <H5>
          Fake News Detection System using Deep Learning (BiLSTM & BiGRU)
          Developed an automated fake news detection system for Indonesian news
          articles using Deep Learning algorithms, specifically implementing and
          comparing Bidirectional LSTM (BiLSTM) and Bidirectional GRU (BiGRU)
          architectures. The project utilized Python (TensorFlow, Keras,
          Scikit-learn) for model development and TF-IDF for textual feature
          extraction. The study adopted a weakly supervised learning approach,
          resulting in the BiLSTM model achieving the highest performance with
          78% accuracy and 0.85 precision, successfully outperforming
          traditional SVM baselines in capturing complex linguistic patterns.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/python.png" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Backend Engineer Final Project",
    repositoryUrl: "https://github.com/OctavianoRyan25/be-agriculture",
    repositoryText: "Github",
    children: (
      <>
        <H5>
          This project was created as the final project of Alterra
          Academy&rsquo;s “Backend Engineer With Golang” Independent Study MBKM.
          This project contains features that can be used in agriculture such as
          plant watering schedules, weather forecasts, fertilizers, plants, and
          others.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/go.png" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Digistar OCA Blast Telkom",
    repositoryUrl: "https://github.com/farrelamroe/digistar-oca-blast-2024",
    repositoryText: "Github",
    linkUrl: "https://digistar-oca-blast-2024.vercel.app/",
    linkText: "Link",
    children: (
      <>
        <H5>
          This project was created as the final project of Digistar Club By
          Telkom Indonesia. This project contains features that can be used in
          OCA Blast, especially chatbots.
        </H5>
        <Text size="regular" className="font-bold">
          *Note: To enter the chatbot page, please use route /chatai
        </Text>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Website KKN Pakis 2024",
    repositoryUrl: "https://github.com/farrelamroe/kkn-pakis",
    repositoryText: "Github",
    linkUrl: "https://kkn-pakis-2024.vercel.app/",
    linkText: "Link",
    children: (
      <>
        <H5>
          This project was made as one of the work programs in the Pakis 2024
          Community Service Program (KKN). This website contains work programs
          that have been carried out during the KKN activity period. Starting
          from work programs in two villages, Ketundan and Pogalan to work
          programs from each science, social science, agro, medical cluster.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Binar Academy LMS",
    repositoryUrl: null,
    linkUrl: "https://lms.binarian.co/",
    linkText: "Link",
    repositoryText: null,
    children: (
      <>
        <H5>
          This web is one of the group projects during my internship at Binar
          Academy as a Frontend Engineer. This project builds a Learning
          Management System (LMS) that is used by companies for teaching and
          learning purposes at Binar Academy.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/bootstrap.svg" alt="" className="max-w-[32px]" />
          <img src="/images/scss.svg" alt="" className="max-w-[32px]" />
          <img src="/images/go.png" alt="" className="max-w-[32px]" />
          <img src="/images/ruby.png" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Binar Academy CMS",
    repositoryUrl: null,
    linkUrl: "https://dash.binarian.co/",
    linkText: "Link",
    repositoryText: null,
    children: (
      <>
        <H5>
          This web is one of the group projects during my internship at Binar
          Academy as a Frontend Engineer. This project builds a Content
          Management System that is used by companies for teaching and learning
          purposes at Binar Academy.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/vue.png" alt="" className="max-w-[32px]" />
          <img src="/images/bootstrap.svg" alt="" className="max-w-[32px]" />
          <img src="/images/scss.svg" alt="" className="max-w-[32px]" />
          <img src="/images/go.png" alt="" className="max-w-[32px]" />
          <img src="/images/ruby.png" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "PPSMB UGM 2023",
    repositoryUrl: null,
    linkUrl: "https://ppsmb.ugm.ac.id/2023/",
    linkText: "Link",
    repositoryText: null,
    children: (
      <>
        <H5>
          This project is a project of Humpubit division of PPSMB UGM 2023. This
          project creates a website that is used by new students to find out
          more about PPSMB UGM 2023. My position in this project is Software
          Engineer.
        </H5>
        <Text size="regular" className="font-bold">
          *Note: to open the link above, you must use OpenVPN or UGM Wifi to
          access the link.
        </Text>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
          <img src="/images/strapi.png" alt="" className="max-h-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Porsenigama 2022",
    repositoryUrl: "https://github.com/IskanMr/porsenigama-22",
    linkUrl: "https://ukm.ugm.ac.id/2022/porsenigama/",
    linkText: "Link",
    repositoryText: "GitHub",
    figmaUrl:
      "https://www.figma.com/file/ADfbcH358aer1obGJv99JP/Web-Porsenigama-2022?node-id=1%3A2&t=KSN3Z7UlXY0lwcuN-1",
    figmaText: "Figma",
    children: (
      <>
        <H5>
          This project is a committee project organized by UGM. The content of
          this web is info about Porsenigama 2022. I am here as UI/UX Designer.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/react.svg" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
          <img src="/images/figma.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Blasout 2023",
    repositoryUrl: "https://github.com/Bravonoid/blastout-23",
    linkUrl: "https://blastout.balairungklassugm.com",
    linkText: "Link",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is a committee project organized by Balairungklass. The
          content of this web is info about Blastout 2023. I am here as
          Front-End Developer.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Joints UGM",
    repositoryUrl:
      "https://github.com/Jogja-Information-Technology-Session/joints23-web",
    linkUrl: "https://www.jointsugm.id",
    linkText: "Link",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is a committee project organized by Computer Science. The
          content of this web is info about Joints 2023. This project is more
          complex because it uses a lot of Back-End for registration so there is
          fetching between Front-End and Back-End. I am here as a Front-End
          Developer.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
          <img src="/images/node.png" alt="" className="max-h-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "iGEM UGM",
    repositoryUrl: "https://github.com/farrelamroe/wiki-2023",
    linkUrl: "https://2023.igem.wiki/ugm-indonesia/",
    linkText: "Link",
    repositoryText: "GitLab",
    children: (
      <>
        <H5>
          This project was an individual project used for the International
          Genetically Engineered Machine competition held in Paris, France. In
          this competition, I received Gold Medal, Best Inclusivity Awards, and
          Top 5 Best Diagnostic Project.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/next.webp" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "GDSC Assignment",
    repositoryUrl: "https://github.com/farrelamroe/gdsc-assignment",
    linkUrl: "https://gdsc-assignment.vercel.app",
    linkText: "Vercell",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is an assignment for the selection of Google Developer
          Student Club 2022 members. The concept of this project is to clone one
          of Gojek&rsquo;s pages as a requirement of this assignment. My
          participation in this project is a Front-End developer where I clone
          the design that has been provided by Gojek. This project was made
          within 4 days.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/react.svg" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "OmahTI Assignment",
    repositoryUrl: "https://github.com/farrelamroe/omahti",
    linkUrl: "https://omahti.vercel.app",
    linkText: "Vercell",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is an assignment for the selection of OmahTI members of
          the 2022 Front-end division. The concept of this project is a slicing
          design that has been provided by the committee which is a requirement
          in this task. My participation in this project became a Front-End
          developer. This project was made within 4 days.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/react.svg" alt="" className="max-w-[32px]" />
          <img src="/images/tailwind.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Profile Web",
    repositoryUrl: "https://github.com/farrelamroe/landing-page",
    linkUrl: "https://landing-page-ten-orcin.vercel.app",
    linkText: "Vercell",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is a fad project as well as a course assignment for
          coding the front-end class. The content of this project is a personal
          bio.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/html.svg" alt="" className="max-w-[32px]" />
          <img src="/images/css.png" alt="" className="max-w-[32px]" />
          <img src="/images/javascript.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Bookshelf apps",
    repositoryUrl: "https://github.com/farrelamroe/bookself",
    linkUrl: "https://bookself.vercel.app",
    linkText: "Vercell",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          This project is a fad project as well as a course assignment coded in
          the front-end class. This project can record the title, author, and
          year of publication of books that have been read or not. The concept
          is to record books that have been read.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/html.svg" alt="" className="max-w-[32px]" />
          <img src="/images/css.png" alt="" className="max-w-[32px]" />
          <img src="/images/javascript.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Converter",
    repositoryUrl: "https://github.com/farrelamroe/converter",
    linkUrl: "https://converter-ruby.vercel.app",
    linkText: "Vercell",
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          The project is just a fad because it is my small project to fill my
          spare time and my first project after learning HTML, CSS, javascript.
          This project is simple, convert temperature to other units.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/html.svg" alt="" className="max-w-[32px]" />
          <img src="/images/css.png" alt="" className="max-w-[32px]" />
          <img src="/images/javascript.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Bookshelf API",
    repositoryUrl: "https://github.com/farrelamroe/project-back-end",
    linkUrl: null,
    linkText: null,
    repositoryText: "GitHub",
    children: (
      <>
        <H5>
          Just like the previous bookshelf, but this one uses the back-end. This
          project is for course assignment coding. The language used is node.js,
          using the hapi framework.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/node.png" alt="" className="max-h-[32px]" />
          <img src="/images/hapi.png" alt="" className="max-h-[32px]" />
        </div>
      </>
    ),
  },
  {
    title: "Flutter",
    children: (
      <>
        <H5>
          In addition to the website, I also created a small project using
          Flutter. The design I used used the design of previous committee
          projects, such as the Gadjah Mada Festival and Blasout.
        </H5>
        <div className="flex flex-row gap-x-[8px]">
          <img src="/images/flutter.svg" alt="" className="max-w-[32px]" />
          <img src="/images/dart.svg" alt="" className="max-w-[32px]" />
        </div>
      </>
    ),
  },
];

export default data;
