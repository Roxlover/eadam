import "./index.css";
import TopbandImage from "./components/TopbandImage";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import VideoCatalog from "./components/VideoCatalog";
import FooterBand from "./components/FooterBand";
import HeroImage from "./components/HeroImage";
import VideoCarouselMobil from "./components/VideoCarouselMobil";

export default function App() {
  const categories = [
    "Ayakkabı & Çanta",
    "Bebek & Çocuk",
    "Ev&Yaşam",
    "Gıda",
    "İç Giyim",
    "Kozmetik",
    "Pazaryeri",
    "Takı",
    "Tekstil"
  ];

  const items = [

  { id: 1, title: 'Bebek & Çocuk 1', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/sQAMmnWEcZBa6dXo2GbsDp-1080.mp4' },
  { id: 2, title: 'Bebek & Çocuk 2', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2KUWkTJHsccR9kRaV9VHRX-1080.mp4' },
  { id: 3, title: 'Bebek & Çocuk 3', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/jHKzArCFdwMH8NNcMb7GhG-1080.mp4' },
  { id: 4, title: 'Bebek & Çocuk 4', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/8xu6GokWk7oQHBh9p7BDUx-1080.mp4' },
  { id: 5, title: 'Bebek & Çocuk 5', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/vdtMhEpbDHSDkaG1zxeRnW-1080.mp4' },
  { id: 6, title: 'Bebek & Çocuk 6', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/pBYmTV7Lr56Wg6xQT6Htap-1080.mp4' },
  { id: 7, title: 'Bebek & Çocuk 7', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/4YrfKne3yp5w9jRJTDbf2r-1080.mp4' },
  { id: 8, title: 'Bebek & Çocuk 8', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2dFPVEWXXenpH6bNBzs7wD-1080.mp4' },
  { id: 9, title: 'Bebek & Çocuk 9', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/nDzM7vhvWC238YYmckgY98-1080.mp4' },
  { id: 10, title: 'Bebek & Çocuk 10', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/5jDznFJ7dN1dGDMedsccbN-1080.mp4' },
  { id: 11, title: 'Bebek & Çocuk 11', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/kjV1c27uGyxPhqj6q1R55Y-1080.mp4' },
  { id: 12, title: 'Bebek & Çocuk 12', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/1s461pfZSxjjoVhDhbP3hs-1080.mp4' },
  { id: 13, title: 'Bebek & Çocuk 13', category: 'Bebek & Çocuk', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/pRk9KT5uwfZ7YxUAuFSWQ7-1080.mp4' },

  { id: 14, title: 'Tekstil 1', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/gQeGPunDpnpy81yB6hPxJe-1080.mp4' },
  { id: 15, title: 'Tekstil 2', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/4MYFVBsJUpLEriRfHzZWtD-1080.mp4' },
  { id: 16, title: 'Tekstil 3', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/1jgcXPy4VCn9WbEJLZhfeP-1080.mp4' },
  { id: 17, title: 'Tekstil 4', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/6syGa8hPGfMWeNY6mkoVEnV-1080.mp4' },
  { id: 18, title: 'Tekstil 5', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/6FN89HnwqFYaBnbgDt8xGF-1080.mp4' },
  { id: 19, title: 'Tekstil 6', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/a67qwpnvmwujbpKNEgzgx3-1080.mp4' },
  { id: 20, title: 'Tekstil 7', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/ormUd5pndwMsm9noEKesXN-1080.mp4' },
  { id: 21, title: 'Tekstil 8', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/heZTM8GkgCBGqQKHpQUhWr-1080.mp4' },
  { id: 22, title: 'Tekstil 9', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/9XK75nGYwmUQyLH9kZSu28-1080.mp4' },
  { id: 23, title: 'Tekstil 10', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/92gfAepg62cE3FACrur72J-1080.mp4' },
  { id: 24, title: 'Tekstil 11', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/nsfa5vvkqJSPaRdtJR8NKh-1080.mp4' },
  { id: 25, title: 'Tekstil 12', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/3kmoK5KeHLnUuozfbnw3gZ-1080.mp4' },
  { id: 26, title: 'Tekstil 13', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/qqf3eDvA48j32aEveZmWYT-1080.mp4' },
  { id: 27, title: 'Tekstil 14', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/peZGGpPy1ordWm2UvKuPSc-1080.mp4' },
  { id: 28, title: 'Tekstil 15', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/55xUJfP9oRzkf4R21XUCpF-1080.mp4' },
  { id: 29, title: 'Tekstil 16', category: 'Tekstil', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/pZQbjKPfnXcDeWbFhhdHvw-1080.mp4' },
{ id: 30, title: 'Takı 1', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/g6S5QtMEixWAUf4wJGVVA5-1080.mp4' },
{ id: 31, title: 'Takı 2', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/sQrL8SePRGQesxYtQArnPM-1080.mp4' },
{ id: 32, title: 'Takı 3', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2LcFK2qL39faZXhA7pnbjo-1080.mp4' },
{ id: 33, title: 'Takı 4', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2t7m8cMARYmPqXUCLqNHc8-1080.mp4' },
{ id: 34, title: 'Takı 5', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/kMLtb1wdMPEVvUSKj2rrXz-1080.mp4' },
{ id: 35, title: 'Takı 6', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/t8qt8nCPmvqXb199s4jHsF-1080.mp4' },
{ id: 36, title: 'Takı 7', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/sTiE8UuLRbHf5shCijLLzk-1080.mp4' },
{ id: 37, title: 'Takı 8', category: 'Takı', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/pGcx6e5HD7DKiRN7EVYwJb-1080.mp4' },

{ id: 38, title: 'Pazaryeri 1', category: 'Pazaryeri', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/daUVK61vCNGSqBfRmzjX3d-1080.mp4' },
{ id: 39, title: 'Pazaryeri 2', category: 'Pazaryeri', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/ugbVyiSUn6Ahs1jos29cvg-1080.mp4' },
{ id: 40, title: 'Pazaryeri 3', category: 'Pazaryeri', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/7YPbo6rUWRe2Qg4pjxFxfs-1080.mp4' },

{ id: 41, title: 'Kozmetik 1', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/mw3V9EYdJ7qCuXphiJD4TP-1080.mp4' },
{ id: 42, title: 'Kozmetik 2', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/fiWBz4iYpDFYDD7NMHetqW-1080.mp4' },
{ id: 43, title: 'Kozmetik 3', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/n3Xkq2DFvKQnTpA6rpio9c-1080.mp4' },
{ id: 44, title: 'Kozmetik 4', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/n3ipqjBdj7iQz4ETQDSmV6-1080.mp4' },
{ id: 45, title: 'Kozmetik 5', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/d45ztNVxAb1w4iwDUeGjMQ-1080.mp4' },
{ id: 46, title: 'Kozmetik 6', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/bzhkNin9xBGAh7fzUt5CCG-1080.mp4' },
{ id: 47, title: 'Kozmetik 7', category: 'Kozmetik', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/p6AQEGzGExS2X57ZRw8xGZ-1080.mp4' },

{ id: 48, title: 'İç Giyim 1', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/turKy3Dh54P4cFveX1v9Xv-1080.mp4' },
{ id: 49, title: 'İç Giyim 2', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/upACMbnCScEEj9NWXZvGYW-1080.mp4' },
{ id: 50, title: 'İç Giyim 3', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/6w6YpqPYdq195NCwS6es1M-1080.mp4' },
{ id: 51, title: 'İç Giyim 4', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/qqk797oREBJCFTjhdLcTEc-1080.mp4' },
{ id: 52, title: 'İç Giyim 5', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/tmKQ2cHedMDKHejcUyvAAJ-1080.mp4' },
{ id: 53, title: 'İç Giyim 6', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/pEwS3UQVExyHMg1zCkyXtr-1080.mp4' },
{ id: 54, title: 'İç Giyim 7', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/buyZsYLr7YnjXFpJxzuQo2-1080.mp4' },
{ id: 55, title: 'İç Giyim 8', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2wY5QxVfMQjqnm48xiDER6-1080.mp4' },
{ id: 56, title: 'İç Giyim 9', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/jSnMPekMXgBFsBPtc57MGQ-1080.mp4' },
{ id: 57, title: 'İç Giyim 10', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/u7XSaxYT1X7jvVRmXwnAbq-1080.mp4' },
{ id: 58, title: 'İç Giyim 11', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/x6xKeeziC7VneQEGNjN8RJ-1080.mp4' },
{ id: 59, title: 'İç Giyim 12', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/opxw7KL76NVPc4gJ9AiZgr-1080.mp4' },
{ id: 60, title: 'İç Giyim 13', category: 'İç Giyim', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/eyQe1ryNEVSzpybZScu1b2-1080.mp4' },

{ id: 61, title: 'Gıda 1', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/gjuCqohiumyLzX3LUUEGDf-1080.mp4' },
{ id: 62, title: 'Gıda 2', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/4YcF4pwwrvzfuLobzCwQm9-1080.mp4' },
{ id: 63, title: 'Gıda 3', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/duKjoCsBk8YDZn6y1QxSva-1080.mp4' },
{ id: 64, title: 'Gıda 4', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/sS5MG5fd9LaYXfdRXKfAp4-1080.mp4' },
{ id: 65, title: 'Gıda 5', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/2wiGH7xiJUQFQ66UTRQRxj-1080.mp4' },
{ id: 66, title: 'Gıda 6', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/dvg7zQwzSLfeVyzbDQ46re-1080.mp4' },
{ id: 67, title: 'Gıda 7', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/iVV8WBZCoGwoe19jyPwREn-1080.mp4' },
{ id: 68, title: 'Gıda 8', category: 'Gıda', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/6Qceoj83stu182gMgdsFi6-1080.mp4' },

{ id: 69, title: 'Ev&Yaşam 1', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/wyfzf89heVXVPgM4UqN1eF-1080.mp4' },
{ id: 70, title: 'Ev&Yaşam 2', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/5HX4ZpHBkZkVKnCwq9a2Pn-1080.mp4' },
{ id: 71, title: 'Ev&Yaşam 3', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/tGeUCM8jtBTRtehZfPquF1-1080.mp4' },
{ id: 72, title: 'Ev&Yaşam 4', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/6rX3utBry8u6WJ3E49f8uw-1080.mp4' },
{ id: 73, title: 'Ev&Yaşam 5', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/m93RDXck2S56BDUdx8gzto-1080.mp4' },
{ id: 74, title: 'Ev&Yaşam 6', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/ugBp8f2xoRJwxcvXkJ3yvp-1080.mp4' },
{ id: 75, title: 'Ev&Yaşam 7', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/p8ifwBRGrgsMWyWtn64Jz6-1080.mp4' },
{ id: 76, title: 'Ev&Yaşam 8', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/eHKsw5oKEsnwM1ngb4FJw6-1080.mp4' },
{ id: 77, title: 'Ev&Yaşam 9', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/xecTQacqr7GiSx3HPCCqFu-1080.mp4' },
{ id: 78, title: 'Ev&Yaşam 10', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/mNerXZZZEgyijvCHNTe4Ks-1080.mp4' },
{ id: 79, title: 'Ev&Yaşam 11', category: 'Ev&Yaşam', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/5SoHghjD9puaZHqJrANb4T-1080.mp4' },

{ id: 80, title: 'Ayakkabı & Çanta 1', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/4dLTb85KKDugnPhPEzTXNf-1080.mp4' },
{ id: 81, title: 'Ayakkabı & Çanta 2', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/nuWahCeW8FmtFWvM5LxkWN-1080.mp4' },
{ id: 82, title: 'Ayakkabı & Çanta 3', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/hSwkEkWAWxeeba34hgDDTs-1080.mp4' },
{ id: 83, title: 'Ayakkabı & Çanta 4', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/bHzGjEcmFaUvExSgFykVVx-1080.mp4' },
{ id: 84, title: 'Ayakkabı & Çanta 5', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/1biFzbpoCKiV55mGZZP5rz-1080.mp4' },
{ id: 85, title: 'Ayakkabı & Çanta 6', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/nQ2gbuFBVwqeCGqKr2eitj-1080.mp4' },
{ id: 86, title: 'Ayakkabı & Çanta 7', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/qT3siQw7D2wRngDMe8ktus-1080.mp4' },
{ id: 87, title: 'Ayakkabı & Çanta 8', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/aBxBuBjaeuZsBkNDbAHRFd-1080.mp4' },
{ id: 88, title: 'Ayakkabı & Çanta 9', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/a5HjXLMLLPppYfX35tswBC-1080.mp4' },
{ id: 89, title: 'Ayakkabı & Çanta 10', category: 'Ayakkabı & Çanta', brand: 'E-adam', videoSrc: 'https://video.e-adam.net/download/web-videos/52SHHJznbCj5Wemz4VtB8g-1080.mp4' },
  ];


  const mobileMedia = items.map((x) => ({
    type: "video" as const,
    src: x.videoSrc,
    alt: x.title,
  }));
  return (
    <main className="page">
      <section className="section narrow">
        <TopbandImage />
      </section>

      <Hero />

      <div className="only-desktop">
        <HeroImage src="/assets/Group 26868.jpg" alt="Ana görsel" />
      </div>

      <div className="only-mobile">
        <VideoCarouselMobil items={mobileMedia} />
      </div>

      <StatsStrip />
      <FooterBand />

      <section className="section">
        <VideoCatalog items={items} categories={categories} />
      </section>
    </main>
  );
}
