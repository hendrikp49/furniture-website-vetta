import Experience from "./components/Experience Section";
import FooterSection from "./components/Footer";
import Material from "./components/Material Section";
import LandingPage from "./components/Landing Page";
import Product from "./components/Product Section";
import Review from "./components/Review Section";
import Vetta from "./components/Vetta Section";

function App() {
  const loginPage = [
    {
      label: "Full Name",
      tipe: "text",
      placeholder: "Input Your Name",
    },
    {
      label: "Password",
      tipe: "password",
      placeholder: "*****",
    },
  ];
  const logo = "Vetta";
  const navLink = ["Home", "Furniture", "Shop", "About Us", "Contact"];
  const navFooter = [
    {
      judul: "Services",
      navigasi: [
        { nav1: "Email Marketing", nav2: "Campaign", nav3: "Branding" },
      ],
    },
    {
      judul: "Furniture",
      navigasi: [{ nav1: "Beds", nav2: "Chair", nav3: "All" }],
    },
    {
      judul: "Legal",
      navigasi: [{ nav1: "Privacy Policy", nav2: "Terms & Condition" }],
    },
  ];

  const panah = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="inline ml-2 size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );

  const advantages = [
    {
      judul: "Luxury Facilities",
      keterangan:
        "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
      judul: "Affordable Price",
      keterangan:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      judul: "Many Choices",
      keterangan:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  const produkUnggulan = [
    {
      gambar: "./img/kursi1.png",
      jenis: "Chair",
      nama: "Skena Chair",
      alt: "Kursi Anak Skena",
      harga: "Rp. 1.500",
    },
    {
      gambar: "./img/kursi2.png",
      jenis: "Chair",
      nama: "Senja Chair",
      alt: "Kursi Anak Senja",
      harga: "Rp. 1.150",
    },
    {
      gambar: "./img/kursi3.png",
      jenis: "Chair",
      nama: "Anjay Chair",
      alt: "Kursi Vincent",
      harga: "Rp. 1.755",
    },
    {
      gambar: "./img/kursi4.png",
      jenis: "Chair",
      nama: "Nyantuy Chair",
      alt: "Kursi Untuk Santai",
      harga: "Rp. 1.625",
    },
  ];

  const tigaSection = [
    {
      divisi: "Experiences",
      judul: "We Provide You The Best Experience",
      keterangan:
        "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.",
      gambar: "./img/experience.webp",
      alt: "Sofa Hijau Panjang",
    },
    {
      divisi: "Materials",
      judul: "Very Serious Material For Making Furniture",
      keterangan:
        "Because vetta was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.",
      gambar1: "./img/material2.webp",
      alt1: "Kumpulan Kursi dan Sofa",
      gambar2: "./img/material1.webp",
      alt2: "Kumpulan Kursi Kuning",
      gambar3: "./img/material3.webp",
      alt3: "Sofa Cream dengan Bantal",
    },
    {
      divisi: "Testimonial",
      judul: "Our Client Review",
      reviewer: [
        {
          nama: "El Kecepatan",
          pekerjaan: "Youtuber",
          review:
            "“Terimakasih banyak, sekarang ruanganku menjadi lebih mewah dan elegan“",
          gambar: "./img/client1.png",
          alt: "Ruangan Minimalis",
        },
        {
          nama: "Bernadya",
          pekerjaan: "Penyanyi",
          review:
            "“Makasih Vetta, materialnya berkualitas dan detailnya presisi banget“",
          gambar: "./img/client2.png",
          alt: "Kursi Nyantai",
        },
        {
          nama: "Fufufafa",
          pekerjaan: "?????",
          review:
            "“Sangat terjangkau untuk kantong saya yang tidak terlalu tebal“",
          gambar: "./img/client3.png",
          alt: "Ruangan Minimalis dan Elegan",
        },
      ],
    },
  ];

  return (
    <div>
      <LandingPage navLink={navLink} logo={logo} loginPage={loginPage} />

      <main>
        <Vetta advantage={advantages} arrow={panah} />
        <Product produk={produkUnggulan} arrow={panah} />
        <Experience tigaSection={tigaSection} arrow={panah} />
        <Material tigaSection={tigaSection} arrow={panah} />
        <Review tigaSection={tigaSection} />
        <FooterSection logo={logo} navFooter={navFooter} />
      </main>
    </div>
  );
}

export default App;
