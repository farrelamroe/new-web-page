import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Farrel Amroe",
  lastName: "Azhari",
  name: "Farrel Amroe Azhari",
  role: "Software Engineer",
  avatar: "/images/foto.jpg",
  email: "farrelamroe@gmail.com",
  location: "Asia/Jakarta", // Must be IANA format for timezone rendering
  languages: ["English", "Bahasa Indonesia"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/farrelamroe",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/farrel-amroe-azhari-8b14b5217/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/farrelamroe/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "CV",
    icon: "cv",
    link: "https://drive.google.com/file/d/1mp_1xoAud__fhaJBHaY4VHA3Ym45h7XQ/view?usp=sharing",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/foto.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Situs web portofolio yang menampilkan karya saya sebagai ${person.role}`,
  headline: <>Membangun antarmuka fungsional dan solusi perangkat lunak yang terukur</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AAIL</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/projects/aail-software-engineering",
  },
  subline: (
    <>
      Saya Farrel, seorang software engineer yang berbasis di Kota Surakarta, Jawa Tengah, Indonesia. Saya berspesialisasi dalam <Text as="span" size="xl" weight="strong">Backend Engineering</Text> dan <Text as="span" size="xl" weight="strong">Frontend Development</Text>. Saya membangun aplikasi yang efisien, stabil, dan berpusat pada pengguna.
    </>
  ),
};

const
  about: About = {
    path: "/about",
    label: "Tentang",
    title: `Tentang – ${person.name}`,
    description: `Kenali ${person.name}, ${person.role} dari ${person.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Perkenalan",
      description: (
        <>
          Farrel adalah seorang software engineer yang penuh semangat dalam mengubah tantangan kompleks
          menjadi solusi yang terukur dan elegan. Karyanya mencakup arsitektur backend, pengalaman frontend,
          serta integrasi AI dan data engineering untuk memecahkan masalah nyata. Ia sangat tertarik pada irisan antara rekayasa perangkat lunak
          dan sistem cerdas, mulai dari membangun alat berbasis LLM hingga merancang pipelines
          deep learning untuk tugas pemrosesan bahasa alami (NLP).
        </>
      ),
    },
    work: {
      display: false,
      title: "Pengalaman Kerja",
      experiences: [
        {
          company: "Applied Artificial Intelligence Laboratory (AAIL)",
          timeframe: "Jan 2026 - Sekarang",
          role: "Software Engineer",
          achievements: [
            "Merancang infrastruktur sisi server yang aman dan skalabel untuk Sayo Academy menggunakan Next.js dan Supabase, memungkinkan orientasi yang lancar bagi pengguna internasional di seluruh wilayah bahasa Inggris dan bahasa Mandarin Tradisional.",
            "Mengembangkan kontrol akses berbasis peran (RBAC) yang tangguh melalui Clerk, mengamankan akses untuk 3+ peran pengguna yang berbeda (admin, guru, siswa) di seluruh modul pendidikan.",
            "Menyelesaikan implementasi i18n secara penuh untuk platform Sayo Academy dan Primary Worksheet, memperluas jangkauan pasar produk dengan mendukung 2 bahasa secara menyeluruh.",
            "Melakukan refactoring dan mengoptimalkan 10+ modul frontend dengan Tailwind CSS, memangkas waktu pemuatan navigasi dan meningkatkan responsivitas modal di semua ukuran layar.",
            "Menyelesaikan kendala kritis pada build Next.js yang sebelumnya menghambat deployment CI/CD, menekan tingkat kegagalan build hingga nol dan memperlancar siklus rilis tim.",
          ],
          images: [],
        },
        {
          company: "Turnkey Inside - Remote",
          timeframe: "Jun 2025 - Des 2025",
          role: "Supervisor Pemantauan Data dan Otomasi",
          achievements: [
            "Merancang dashboard pemantauan real-time untuk broker dan Penyedia Likuiditas (LP) menggunakan Python (Streamlit), memungkinkan tim mengambil keputusan lebih cepat berbasis data.",
            "Memimpin tim Pemantauan Data untuk mengotomasi sistem copy-trading, berhasil menghilangkan kesalahan pelacakan manual dan meningkatkan efisiensi operasional sistem secara signifikan.",
            "Menganalisis dan merumuskan strategi trading berdasarkan psikologi trader, memberikan rencana eksekusi dengan probabilitas tinggi untuk entri pasar yang optimal.",
            "Mengoptimalkan infrastruktur server yang memangkas latensi copy-trading hingga 60%, meningkatkan keandalan sistem secara drastis.",
            "Mengembangkan mesin copy proprietary dan melakukan analisis data mendalam menggunakan Python dan SQL.",
          ],
          images: [],
        },
        {
          company: "Direktorat Pendidikan dan Pengajaran UGM - Sleman",
          timeframe: "Jan 2025 - Mei 2025",
          role: "Staf IT (Paruh Waktu)",
          achievements: [
            "Menyederhanakan alur data akademik dan mahasiswa untuk mencapai integritas data 100%, menghasilkan laporan analitik yang akurat bagi pemangku kepentingan tingkat universitas.",
            "Memproduksi konten visual berdampak tinggi di 5+ publikasi resmi dan media sosial, meningkatkan konsistensi brand digital Direktorat.",
            "Berkolaborasi dengan 3 tim administrasi lintas fungsi untuk mengintegrasikan solusi teknis dan desain, mempercepat pelaksanaan 2+ program pendidikan strategis per semester.",
          ],
          images: [],
        },
        {
          company: "Jogjacamp (Idwebhost) - Kota Yogyakarta, D.I. Yogyakarta",
          timeframe: "Sep 2024 - Nov 2024",
          role: "Frontend Developer",
          achievements: [
            "Membangun 10+ komponen UI responsif untuk proyek Chatonomy menggunakan AngularJS, menghasilkan antarmuka berperforma tinggi yang meningkatkan efisiensi agen layanan pelanggan.",
            "Membangun modul penilaian kinerja Customer Service dari awal, memungkinkan penilaian real-time dan mengurangi waktu review manual sekitar 40%.",
            "Mengotomasi sistem perhitungan bonus CS dengan mengintegrasikan metrik kinerja real-time, menghilangkan 100% kesalahan akuntansi manual.",
            "Mengintegrasikan API backend dengan Elasticsearch dan Redis, meningkatkan kecepatan pengambilan data dan mengaktifkan caching real-time sub-detik.",
          ],
          images: [],
        },
        {
          company: "Binar Academy - BSD City, Tangerang, Banten",
          timeframe: "Agu 2023 - Des 2023",
          role: "Frontend Engineer Intern",
          achievements: [
            "Menghasilkan 10+ fitur untuk platform LMS dan CMS yang digunakan ribuan mahasiswa dan instruktur Binar Academy.",
            "Mengintegrasikan RESTful API di codebase React.js (LMS) dan Vue.js (CMS), menunjukkan fleksibilitas full-stack.",
            "Memodernisasi komponen Bootstrap dan SCSS lama di 20+ layar UI, meningkatkan konsistensi visual.",
            "Mencapai responsivitas 100% lintas perangkat untuk semua fitur baru.",
          ],
          images: [],
        },
        {
          company: "Koperasi Mahasiswa UGM - Yogyakarta",
          timeframe: "Feb 2023 - Feb 2024",
          role: "Teknisi IT Support",
          achievements: [
            "Memelihara website berbasis WordPress dan seluruh perangkat keras on-premise (15+ komputer, printer, dan infrastruktur jaringan) tanpa downtime kritis.",
            "Mengadministrasi sistem HRIS yang mengelola integritas data dan catatan 100+ karyawan dan administrator.",
            "Membangun modul aplikasi cuti karyawan menggunakan PHP, HTML, dan CSS, mengurangi waktu pemrosesan cuti manual sekitar 50%.",
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Pendidikan",
      institutions: [
        {
          name: "Universitas Gadjah Mada - Indonesia",
          description: <>Sarjana Ilmu Komputer, IPK 3.81/4.00 (Agu 2021 - Apr 2025)</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Keahlian Teknis",
      skills: [
        {
          title: "Bahasa Pemrograman",
          description: (
            <>Menguasai berbagai paradigma, bahasa skrip, sistem, dan query untuk memilih alat yang tepat di setiap situasi.</>
          ),
          tags: [
            { name: "Python", icon: "python" },
            { name: "JavaScript", icon: "javascript" },
            { name: "C++", icon: "cplusplus" },
            { name: "Java", icon: "java" },
            { name: "SQL", icon: "sql" },
            { name: "Go (Golang)", icon: "golang" },
          ],
          images: [],
        },
        {
          title: "Pengembangan Web",
          description: (
            <>Membangun aplikasi web responsif dan berperforma tinggi dari nol, mengubah desain menjadi pengalaman interaktif yang sempurna.
            </>
          ),
          tags: [
            { name: "Next.js", icon: "nextjs" },
            { name: "React.js", icon: "react" },
            { name: "Vue.js", icon: "vue" },
            { name: "AngularJS", icon: "angular" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "SCSS", icon: "scss" },
            { name: "HTML/CSS", icon: "html" },
          ],
          images: [],
        },
        {
          title: "Data & AI Engineering",
          description: (
            <>Mengintegrasikan LLM dan model deep learning ke dalam sistem produksi, dari dashboard real-time hingga pipeline NLP.</>
          ),
          tags: [
            { name: "Streamlit", icon: "streamlit" },
            { name: "BiLSTM / BiGRU", icon: "tensorflow" },
            { name: "LLM & Gemini API", icon: "google" },
            { name: "Elasticsearch", icon: "elasticsearch" },
            { name: "Redis", icon: "redis" },
            { name: "Python", icon: "python" },
          ],
          images: [],
        },
        {
          title: "Tools & Platform",
          description: (
            <>Terbiasa dengan seluruh rantai alat pengembangan, dari version control dan CI/CD hingga handoff desain dan deployment ke cloud.</>
          ),
          tags: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "GitLab", icon: "gitlab" },
            { name: "Figma", icon: "figma" },
            { name: "MS Excel" },
            { name: "VS Code", icon: "vscode" },
          ],
          images: [],
        },
      ],
    },
    achievements: {
      display: true,
      title: "Penghargaan",
      items: [
        {
          title: "Gold Medal, Inclusivity Award, Top 5 Best Diagnostics Project",
          body: "International Genetically Engineered Machine (iGEM) 2023",
          year: "2023",
        },
        {
          title: "Gold Medal, Grand Prize Winner, Best Presentation, Best Synthetic Biology Project, Best Website",
          body: "Bioinformatics and Synthetic Biology Competition (BIOSCOM) 2024",
          year: "2024",
        },
        {
          title: "Gold Medal",
          body: "International Genetically Engineered Machine (iGEM) 2025",
          year: "2025",
        },
      ],
    },
    orgExperiences: [
      {
        company: "International Genetically Engineered Machine (iGEM) - UGM",
        timeframe: "Jun 2022 - Nov 2025",
        role: "Software Engineer",
        achievements: [
          "Membangun dan meluncurkan website kompetisi internasional resmi secara mandiri dalam tim 3 orang selama 4 siklus kompetisi (2022-2025), berkontribusi langsung pada perolehan beberapa Medali Emas Internasional.",
          "Membangun frontend Next.js + Tailwind CSS berperforma tinggi yang memvisualisasikan temuan biologi sintetis untuk audiens global 1.000+ juri dan peneliti internasional.",
          "Mencapai responsivitas penuh lintas perangkat sehingga wiki dapat diakses di mobile, tablet, dan desktop.",
          "Menyintesis data dari 5+ sub-tim Lab dan Human Practices menjadi konten web terstruktur.",
        ],
        images: [],
      },
      {
        company: "Festival Gadjah Mada - Yogyakarta",
        timeframe: "Jul 2022 - Nov 2022",
        role: "Front End Developer",
        achievements: [
          "Membangun website Festival Gadjah Mada resmi bersama tim 5 orang menggunakan React.js dan Tailwind CSS, melayani ribuan pengunjung selama periode acara.",
          "Mengembangkan UI e-commerce yang mencakup penjualan tiket dan informasi acara untuk 4 kategori konser dan teater.",
          "Menstrukturkan dan menampilkan data 66+ tenant dan 350+ produk untuk pengalaman browsing yang akurat dan cepat.",
        ],
        images: [],
      },
      {
        company: "PPSMB Pionir Gadjah Mada - Yogyakarta",
        timeframe: "Mar 2023 - Agu 2023",
        role: "Software Engineer",
        achievements: [
          "Mengorkestrasi pengembangan end-to-end website resmi PPSMB sebagai pusat informasi bagi 9.500+ pengguna mahasiswa secara bersamaan.",
          "Membangun platform web skalabel menggunakan Next.js dan Tailwind CSS dengan codebase modular.",
          "Memelopori fitur Augmented Reality (AR) berbasis Three.js, memungkinkan ribuan mahasiswa menjelajahi profil fakultas secara interaktif.",
        ],
        images: [],
      },
      {
        company: "Jogja Information Technology Session (JOINTS) - Yogyakarta",
        timeframe: "Jan 2023 - Mei 2023",
        role: "Front End Developer",
        achievements: [
          "Berkolaborasi dalam tim 15 engineer untuk membangun beberapa website acara bertraffic tinggi (Techtalk, Jointscamp, platform kompetisi JOINTS).",
          "Membangun antarmuka berperforma tinggi menggunakan Next.js dan Tailwind CSS untuk platform kompetisi utama.",
          "Memimpin pengembangan sistem autentikasi dan registrasi aman untuk 500+ peserta.",
        ],
        images: [],
      },
      {
        company: "Google Developer Student Club (GDSC) - Yogyakarta",
        timeframe: "Nov 2022 - Okt 2023",
        role: "Hacker - Mobile Developer",
        achievements: [
          "Berkolaborasi dengan tim 4 orang untuk mendesain dan memprototyping aplikasi mobile Flutter untuk Hackathon internal, menghasilkan MVP fungsional dalam 48 jam.",
          "Membangun UI mobile responsif di 10+ ukuran perangkat Android.",
          "Mengintegrasikan autentikasi Firebase untuk 50+ pengguna uji.",
        ],
        images: [],
      },
    ],
  };

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Proyek",
  title: `Proyek – ${person.name}`,
  description: `Proyek desain dan pengembangan oleh ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
