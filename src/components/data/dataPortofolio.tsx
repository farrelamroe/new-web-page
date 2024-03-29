/* eslint-disable @next/next/no-img-element */
import { H5, Text } from "@/components";

const data = [
  {
    title: "Binar Academy LMS",
    repositoryUrl: null,
    linkUrl: "https://lms.binarian.co/",
    linkText: "Link",
    repositoryText: null,
    children: (
      <>
        <H5>
          Web ini merupakan salah satu proyek kelompok pada saat Intern di Binar
          Academy sebagai Frontend Engineer. Proyek ini membangun Learning
          Management System (LMS) yang digunakan perusahaan untuk kepentingan
          belajar mengajar di Binar Academy.
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
          Web ini merupakan salah satu proyek kelompok pada saat Intern di Binar
          Academy sebagai Frontend Engineer. Proyek ini membangun Content
          Management System yang digunakan perusahaan untuk kepentingan belajar
          mengajar di Binar Academy.
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
          Proyek ini merupakan proyek divisi Humpubit PPSMB UGM 2023. Proyek ini
          membuat website yang digunakan mahasiswa baru untuk mengetahui lebih
          lanjut tentang PPSMB UGM 2023. Posisi saya dalam proyek ini sebagai
          Frontend Developer.
        </H5>
        <Text size="regular" className="font-bold">
          *Note: untuk membuka link diatas, harus menggunakan OpenVPN atau Wifi
          UGM agar bisa mengakses
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
          Project ini merupakan project kepanitiaan yang diadakan oleh UGM. Isi
          dari web ini berupa info seputar Porsenigama 2022. Saya disini sebagai
          UI/UX Designer.
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
          Project ini merupakan project kepanitiaan yang diadakan oleh
          Balairungklass. Isi dari web ini berupa info seputar Blastout 2023.
          Saya disini sebagai Front-End Developer.
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
          Project ini merupakan project kepanitiaan yang diadakan oleh Ilmu
          Komputer. Isi dari web ini berupa info seputar Joints 2023. Project
          ini lebih kompleks karena banyak menggunakan Back-End untuk
          pendaftaran sehingga ada fetching antara Front-End dan Back-End. Saya
          disini sebagai Front-End Developer.
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
          Project ini merupakan project individu yang digunakan untuk kompetisi
          International Genetically Engineered Machine yang diadakan di Paris,
          Perancis. Dalam kompetisi ini, saya mendapatkan Gold Medal, Best
          Inclusivity Awards, dan Top 5 Best Diagnostic Project.
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
          Project ini merupakan tugas untuk seleksi penerimaan anggota Google
          Developer Student Club 2022. Konsep project ini adalah meng-clone
          salah satu laman Gojek sebagai syarat dari tugas ini. Partisipasi saya
          dalam project ini menjadi Front-End developer dimana saya meng-clone
          design yang sudah disediakan Gojek. Project ini dibuat dalam waktu 4
          hari.
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
          Project ini merupakan tugas untuk seleksi penerimaan anggota OmahTI
          divisi Front-end 2022. Konsep project ini adalah slicing design yang
          sudah disediakan oleh panitia yang menjadi syarat dalam tugas ini.
          Partisipasi saya dalam project ini menjadi Front-End developer.
          Project ini dibuat dalam waktu 4 hari.
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
          Project ini merupakan project iseng sekaligus untuk penugasan course
          dicoding pada kelas front-end. Isi dari project ini adalah biodata
          diri.
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
          Project ini merupakan project iseng sekaligus untuk penugasan course
          dicoding pada kelas front-end. Project ini bisa mencatat judul,
          penulis, dan tahun terbit buku yang sudah dibaca atau belum. Konsepnya
          adalah pencatatan buku yang sudah dibaca.
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
          Project hanya iseng saja karena merupakan project kecil saya untuk
          mengisi waktu luang serta project pertama saya setelah belajar HTML,
          CSS, javascript. Project ini sederhana, mengkonvert suhu ke satuan
          yang lain.
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
          Sama seperti bookshelf yang sebelumnya, namun ini menggunakan
          back-end. Project ini untuk penugasan course dicoding. Bahasa yang
          digunakan adalah node.js, menggunakan framework hapi.
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
          Selain website, saya juga membuat project kecil menggunakan flutter.
          Design yang saya gunakan menggunakan design project kepanitiaan
          sebelumnya, seperti Festival Gadjah Mada dan Blasout.
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
