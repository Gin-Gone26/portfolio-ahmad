export const profileData = {
  name: "Ahmad Akbar Ginanjar",
  brand: "A2G.",
  role: "Web Developer, IT Support & Data Analyst",
  headline:
    "Membangun aplikasi web fungsional, menjaga keandalan sistem IT, dan mengolah data menjadi insight terukur.",
  about:
    "Lulusan S1 Teknik Informatika dari STMIK Mardira Indonesia (IPK 3,46/4,00) dengan pengalaman di bidang pengembangan aplikasi berbasis web (Frontend & Backend), pengelolaan basis data, dan dukungan teknis IT. Pengalaman sebagai Instruktur Teknisi Komputer serta pekerja lepas melatih saya memecahkan masalah teknis secara sistematis dan berkomunikasi secara efektif dengan berbagai kalangan.",
  avatarUrl: "/images/foto-profil.jpeg",
  email: "ginanjarahmad54@gmail.com",
  linkedin: "https://linkedin.com/in/ahmad-akbar-ginanjar",
  github: "https://github.com/Gin-Gone26",
  cvUrl: "/docs/CV_Ahmad_Akbar_Ginanjar.pdf",
};

export const projectsData = [
  {
    id: 1,
    title: "Dashboard Evaluasi Penerimaan BEBEONG Banjar SuperApps",
    category: "Web App & Data Analytics",
    tags: ["Python", "Streamlit", "MySQL", "TAM & DSRM", "Jamovi"],
    image: "/images/dashboardevaluasi.png",
    shortDesc:
      "Aplikasi dashboard evaluasi berbasis web untuk mengukur tingkat penerimaan ASN Kota Banjar terhadap aplikasi layanan publik.",
    problem:
      "Pemerintah Kota Banjar membutuhkan pemetaan objektif dan sistem pemantauan terpusat untuk mengevaluasi kesiapan serta penerimaan Aparatur Sipil Negara (ASN) dalam mengadopsi aplikasi BEBEONG Banjar SuperApps.",
    method:
      "Mengembangkan aplikasi web menggunakan Python Streamlit dan MySQL (Aiven) dengan pendekatan Design Science Research Methodology (DSRM). Mengimplementasikan fitur manajemen kuesioner, rekap responden, analisis statistik deskriptif, ekspor data, serta pengujian jalur TAM pada 121 responden menggunakan Jamovi.",
    result:
      "Menghasilkan dashboard interaktif dengan determinasi penerimaan (BI) sebesar 66,1% (R² = 0,661) dan tingkat kelayakan pengguna akhir (UAT) mencapai 85,83% (kategori Sangat Baik).",
  },
  {
    id: 2,
    title: "Pengembangan Aplikasi Web Full-Stack",
    category: "Web Development",
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
    image: "/images/web-project.png",
    shortDesc:
      "Perancangan dan pembangunan komponen aplikasi web dinamis dari sisi antarmuka (Frontend) hingga logika server (Backend).",
    problem:
      "Kebutuhan pengelolaan data terstruktur dalam proyek akademik dan praktik pengembangan perangkat lunak memerlukan arsitektur web yang responsif, aman, dan terintegrasi dengan basis data relasional.",
    method:
      "Membangun antarmuka responsif menggunakan HTML, CSS, Bootstrap, dan JavaScript, serta mengimplementasikan logika backend menggunakan PHP dan framework Laravel dengan pengelolaan basis data MySQL dan kontrol versi Git/GitHub.",
    result:
      "Menghasilkan modul aplikasi web fungsional dengan operasi pengelolaan data (CRUD) yang terstruktur serta repositori kode yang terdokumentasi rapi di GitHub.",
  },
  {
    id: 3,
    title: "Pemodelan Arsitektur Sistem & Basis Data",
    category: "System Design",
    tags: ["UML", "ERD", "Visual Paradigm", "SQL"],
    image: "/images/erd.png",
    shortDesc:
      "Penyusunan cetak biru (blueprint) perangkat lunak dan desain relasi basis data sebelum tahap implementasi kode.",
    problem:
      "Alur proses sistem dan struktur tabel database berisiko mengalami ketidaksesuaian logika apabila tidak dimodelkan secara standar sebelum pengembangan dimulai.",
    method:
      "Merancang Use Case Diagram, Activity Diagram, Sequence Diagram (UML), serta Entity Relationship Diagram (ERD) menggunakan Visual Paradigm.",
    result:
      "Menghasilkan spesifikasi teknis dan struktur relasi database yang terstandar sebagai acuan utama dalam pengembangan aplikasi web.",
  },
];

export const experiencesData = [
  {
    id: 1,
    role: "Instruktur Teknisi Komputer",
    organization: "LPK Kurnia • Banjar, Jawa Barat",
    period: "Jan 2022 – Des 2022",
    description:
      "Membantu pelaksanaan pelatihan praktik perawatan komputer dan laptop dalam Program Pendidikan Kecakapan Kerja (PKK), serta membimbing peserta mengenali dan menangani masalah dasar perangkat keras maupun perangkat lunak.",
  },
  {
    id: 2,
    role: "Pembantu Mekanik (Mechanic Helper)",
    organization: "Pekerjaan Sementara (Proyek Pabrik)",
    period: "2024 (± 3 Minggu)",
    description:
      "Membantu proses kalibrasi, pengaturan, dan penyesuaian teknis mesin sekam di lingkungan pabrik serta mendukung pemeliharaan operasional sesuai arahan teknisi.",
  },
  {
    id: 3,
    role: "Penghibur Acara & Pekerja Lepas",
    organization: "Freelance • Ciamis, Jawa Barat",
    period: "2021 – Sekarang",
    description:
      "Menyediakan layanan hiburan untuk acara perayaan dan berinteraksi aktif dengan audiens serta penyelenggara untuk memastikan kelancaran acara, melatih kemampuan komunikasi interpersonal dan adaptasi di lapangan.",
  },
];

export const publicationsData = [
  {
    id: 1,
    type: "Artikel Ilmiah & Tugas Akhir • Jurnal Computech & Bisnis",
    year: "2026",
    title:
      "Dashboard Evaluasi Penerimaan ASN Terhadap Aplikasi BEBEONG Banjar SuperApps Kota Banjar Menggunakan Technology Acceptance Model (TAM) dan DSRM",
    summary:
      "Merancang dan mengimplementasikan dashboard evaluasi berbasis web (Streamlit & MySQL) menggunakan pendekatan DSRM pada 121 responden ASN. Menganalisis jalur struktural TAM (PEOU → PU, PEOU → BI, PU → BI) dengan kontribusi 66,1% (R² = 0,661) terhadap Behavioral Intention serta mencapai skor UAT 85,83%.",
  },
];

export const skillsData = [
  {
    category: "Pengembangan Web (Frontend & Backend)",
    items: [
      "HTML, CSS & Bootstrap",
      "JavaScript (Dasar & Back-End Pemula)",
      "PHP & Framework Laravel",
      "Python & Streamlit",
      "Git & GitHub Version Control",
    ],
  },
  {
    category: "Basis Data & Analisis Data",
    items: [
      "MySQL, SQLite & SQL",
      "Uji Statistik & Hipotesis (Jamovi)",
      "Evaluasi Sistem (TAM & DSRM)",
      "Pemodelan Sistem (UML & ERD)",
      "Pengolahan Dokumen (Microsoft Office)",
    ],
  },
  {
    category: "IT Support & Kompetensi Profesional",
    items: [
      "Troubleshooting Hardware & Software",
      "Perawatan Komputer & Laptop",
      "Dasar-dasar Jaringan Komputer",
      "Pelatihan & Penyampaian Informasi",
      "Komunikasi & Pemecahan Masalah",
    ],
  },
];

export const certificationsData = [
  {
    id: 1,
    program: "Program Accenture Asah – Dicoding Indonesia",
    period: "2025 – 2026",
    issuer: "Dicoding & Accenture",
    description:
      "Menyelesaikan rangkaian pelatihan intensif pengembangan web modern, pemrograman JavaScript, dasar Cloud & Generative AI di AWS, serta pengelolaan versi kode menggunakan Git dan GitHub.",
    courses: [
      "Belajar Dasar Cloud dan Generative AI di AWS",
      "Belajar Back-End Pemula dengan JavaScript",
      "Belajar Dasar AI",
      "Belajar Web Intermediate",
      "Belajar Fundamental Front-End Web Development",
      "Belajar Front-End Web untuk Pemula",
      "Belajar Dasar Pemrograman JavaScript",
      "Belajar Git dan GitHub",
    ],
  },
  {
    id: 2,
    program: "Pelatihan Teknisi Komputer",
    period: "2021",
    issuer: "LPK Kurnia • Banjar, Jawa Barat",
    description:
      "Mengikuti pelatihan praktik terkait perakitan, perawatan berkala, instalasi perangkat lunak, serta identifikasi dan penanganan troubleshooting perangkat keras komputer.",
    courses: [
      "Perakitan & Perawatan Perangkat Keras Komputer",
      "Troubleshooting Hardware & Sistem Operasi",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Sarjana Komputer (S.Kom.) – Teknik Informatika",
    institution: "STMIK Mardira Indonesia",
    location: "Bandung, Jawa Barat",
    period: "Ags 2022 – Okt 2026",
    score: "IPK: 3,46 / 4,00",
    description:
      "Fokus pada pengembangan aplikasi berbasis web, basis data relasional, analisis data statistik, serta rekayasa perangkat lunak. Menyelesaikan tugas akhir berupa perancangan dan implementasi dashboard evaluasi penerimaan ASN menggunakan metode TAM dan DSRM.",
  },
  {
    id: 2,
    degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    institution: "SMAN 1 Cisaga",
    location: "Ciamis, Jawa Barat",
    period: "Jul 2017 – Jun 2020",
    score: "Nilai Akhir: 81",
    description:
      "Menyelesaikan pendidikan menengah atas pada peminatan MIPA dengan dasar penalaran logis, matematika, dan ilmu komputer dasar.",
  },
];