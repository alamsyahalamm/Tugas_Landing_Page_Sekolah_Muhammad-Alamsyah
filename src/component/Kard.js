import { Card, Button } from "flowbite-react";

function Kard() {
  return (
    <div className="container mx-auto">
      <Card className="mt-[-100px] z-10">
        <div class="grid grid-cols-3 gap-4">
          <div class="...">
            <Card className="w-full" imgSrc="/gambar/logo.png" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div class="...">
            <Card className="w-full" imgSrc="/gambar/logo.png" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div class="...">
            {" "}
            <Card className="w-full" imgSrc="/gambar/logo.png" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        <div className="mt-5"></div>
        <Card href="#" className="">
          <h5 className="text-3xl  font-bold tracking-tight text-gray-900 dark:text-white">
            Islamic Boarding School SMK TI BAZMA
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <div className="mt-3"></div>
            Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
            merupakan sekolah unggulan berasrama yang diperuntukkan bagi
            anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun
            operasional didanai dari hasil pengelolaan wakaf dan sumber dana
            sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
            <div className="mt-3"></div>
            SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
            selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah
            di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan
            dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan
            kombinasi kurikulum berbasis asrama.
          </p>
          <div>
            <Button>
              Selengkapnya
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </Card>
        <div className="mt-1"></div>

        <h5 className="text-3xl  font-bold tracking-tight text-gray-900 dark:text-white">
            Fasilitas Sekolah
        </h5>
        <div className="mt-1"></div>

        <div class="grid grid-cols-4 gap-4">
          <div class="...">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/gambar/kelas.jpg"
            >
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Ruang Kelas & Lab
              </h5>
            </Card>
          </div>
          <div class="...">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/gambar/masjid.jpg"
            >
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Masjid & Aula
              </h5>
            </Card>
          </div>
          <div class="...">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/gambar/asrama.jpg"
            >
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Gedung Asrama
              </h5>
            </Card>
          </div>
          <div class="...">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/gambar/lapangan.jpg"
            >
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Lapangan Olahraga
              </h5>
            </Card>
          </div>
        </div>
      </Card>
      <div className="mt-5"></div>
    </div>

  );
}
export default Kard;
