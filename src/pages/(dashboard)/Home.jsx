import Navbar from "@/components/ui/Navbar";
import Preview from "@/assets/home-section1.png";
import PreviewDesktop from "@/assets/home-section-desktop.png";
import Arrow from "@/assets/icons/arrowButton.svg";

export default function Home() {
  return (
    <div className="h-full bg-[#ECF2FA]">
      <Navbar />
      <div className="mt-10">
        <img src={Preview} className="lg:hidden" />
        <div className="w-full px-12 xl:w-[65%] xl:mx-auto xl:flex xl:gap-10 xl:justify-around xl:mt-28">
          <div className="max-w-[25rem]">
            <h1 className="font-bold text-[24px] xl:text-[32px] ">
              Elevate Your Messaging Efficiency with Our Innovative Admin Tools
            </h1>
            <p className="my-8 font-medium leading-5 xl:my-6">
              Selamat datang di Fowardit! Pengelolaan pesan Anda menjadi lebih
              mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar
              melalui fitur otomatis, sehingga Anda dapat lebih fokus pada
              interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan
              informasi dengan manajemen konten dan kontak yang praktis.
            </p>
            <div className="flex text-white rounded-md">
              <button className="font-medium bg-black py-3 px-8 rounded-s-md">
                Daftar Sekarang
              </button>
              <div className="bg-black flex justify-center items-center w-10 rounded-e-md">
                <img src={Arrow} />
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden xl:flex">
            <img src={PreviewDesktop} />
          </div>
        </div>
      </div>
    </div>
  );
}
