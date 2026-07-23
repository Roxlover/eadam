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

  { id: 1, title: 'Bebek & Çocuk 1', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 1', videoSrc: 'https://video.e-adam.net/static/web-videos/df3d6c48-5e87-4f18-9882-d4b36a525bed-1080.mp4' },
  { id: 2, title: 'Bebek & Çocuk 2', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 2', videoSrc: 'https://video.e-adam.net/static/web-videos/83e54c31-7a6c-4213-a142-855699936cee-1080.mp4' },
  { id: 3, title: 'Bebek & Çocuk 3', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 3', videoSrc: 'https://video.e-adam.net/static/web-videos/ee91af5e-55c0-4d36-9709-6544e38d0f51-1080.mp4' },
  { id: 4, title: 'Bebek & Çocuk 4', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 4', videoSrc: 'https://video.e-adam.net/static/web-videos/14f1df05-535e-42a1-9b9b-ca4687ff24be-1080.mp4' },
  { id: 5, title: 'Bebek & Çocuk 5', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 5', videoSrc: 'https://video.e-adam.net/static/web-videos/93fb9fd3-371c-4e10-b04f-c46dedb2f80e-1080.mp4' },
  { id: 6, title: 'Bebek & Çocuk 6', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 6', videoSrc: 'https://video.e-adam.net/static/web-videos/9d7d4247-2eb2-45eb-a242-59aecb1a4bd2-1080.mp4' },
  { id: 7, title: 'Bebek & Çocuk 7', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 7', videoSrc: 'https://video.e-adam.net/static/web-videos/13697030-634f-460c-898f-0d4ecda5c535-1080.mp4' },
  { id: 8, title: 'Bebek & Çocuk 8', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 8', videoSrc: 'https://video.e-adam.net/static/web-videos/39440525-2133-48d3-bfc6-60c1c184bc12-1080.mp4' },
  { id: 9, title: 'Bebek & Çocuk 9', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 9', videoSrc: 'https://video.e-adam.net/static/web-videos/337035b6-515d-462c-862d-987631f52c21-1080.mp4' },
  { id: 10, title: 'Bebek & Çocuk 10', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 10', videoSrc: 'https://video.e-adam.net/static/web-videos/770a0b9c-1dd9-42b3-a294-e1025daf60fe-1080.mp4' },
  { id: 11, title: 'Bebek & Çocuk 11', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 11', videoSrc: 'https://video.e-adam.net/static/web-videos/d6ce097c-0fe6-4c30-98ad-32c842893b7a-1080.mp4' },
  { id: 12, title: 'Bebek & Çocuk 12', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 12', videoSrc: 'https://video.e-adam.net/static/web-videos/4228c26a-64d5-42f7-b113-676ae562e035-1080.mp4' },
  { id: 13, title: 'Bebek & Çocuk 13', category: 'Bebek & Çocuk', brand: 'Bebek & Çocuk 13', videoSrc: 'https://video.e-adam.net/static/web-videos/5fb98e95-afc1-4a2d-a204-7c683336a53c-1080.mp4' },

  { id: 14, title: 'Tekstil 1', category: 'Tekstil', brand: 'Tekstil 1', videoSrc: 'https://video.e-adam.net/static/web-videos/61592584-aed4-4239-acb4-4b523d22a1ca-1080.mp4' },
  { id: 15, title: 'Tekstil 2', category: 'Tekstil', brand: 'Tekstil 2', videoSrc: 'https://video.e-adam.net/static/web-videos/a600c244-ce9a-4cc9-acf5-cde1c42c5023-1080.mp4' },
  { id: 16, title: 'Tekstil 3', category: 'Tekstil', brand: 'Tekstil 3', videoSrc: 'https://video.e-adam.net/static/web-videos/2d5d91d1-4fd0-4412-8f78-9db7db23f9e7-1080.mp4' },
  { id: 17, title: 'Tekstil 4', category: 'Tekstil', brand: 'Tekstil 4', videoSrc: 'https://video.e-adam.net/static/web-videos/c1a21577-49fb-42e6-99f7-e07c40cdadc0-1080.mp4' },
  { id: 18, title: 'Tekstil 5', category: 'Tekstil', brand: 'Tekstil 5', videoSrc: 'https://video.e-adam.net/static/web-videos/ff48f561-c7f8-40f7-8929-c3d560289629-1080.mp4' },
  { id: 19, title: 'Tekstil 6', category: 'Tekstil', brand: 'Tekstil 6', videoSrc: 'https://video.e-adam.net/static/web-videos/dbfecadb-0693-45a4-92dd-943a59e8e12b-1080.mp4' },
  { id: 20, title: 'Tekstil 7', category: 'Tekstil', brand: 'Tekstil 7', videoSrc: 'https://video.e-adam.net/static/web-videos/863a904f-ed5b-4c4e-88d1-5f3e4f8daa96-1080.mp4' },
  { id: 21, title: 'Tekstil 8', category: 'Tekstil', brand: 'Tekstil 8', videoSrc: 'https://video.e-adam.net/static/web-videos/5f73c19e-75a1-49d9-8886-26b964f4e70c-1080.mp4' },
  { id: 22, title: 'Tekstil 9', category: 'Tekstil', brand: 'Tekstil 9', videoSrc: 'https://video.e-adam.net/static/web-videos/a1dad3dc-e154-46dc-932a-7405ab964215-1080.mp4' },
  { id: 23, title: 'Tekstil 10', category: 'Tekstil', brand: 'Tekstil 10', videoSrc: 'https://video.e-adam.net/static/web-videos/16dc7eae-2fbe-4d99-b83b-9e41a40eb209-1080.mp4' },
  { id: 24, title: 'Tekstil 11', category: 'Tekstil', brand: 'Tekstil 11', videoSrc: 'https://video.e-adam.net/static/web-videos/9418e4b9-b713-48d3-a9ec-a04e6af5c7a9-1080.mp4' },
  { id: 25, title: 'Tekstil 12', category: 'Tekstil', brand: 'Tekstil 12', videoSrc: 'https://video.e-adam.net/static/web-videos/e268c032-d185-4b86-b3d9-f41bef67bfb5-1080.mp4' },
  { id: 26, title: 'Tekstil 13', category: 'Tekstil', brand: 'Tekstil 13', videoSrc: 'https://video.e-adam.net/static/web-videos/173ba845-f3d7-4e7a-a67c-259672517b1e-1080.mp4' },
  { id: 27, title: 'Tekstil 14', category: 'Tekstil', brand: 'Tekstil 14', videoSrc: 'https://video.e-adam.net/static/web-videos/ae40ddd0-9e83-41d4-a434-d7e0c0ede33a-1080.mp4' },
  { id: 28, title: 'Tekstil 15', category: 'Tekstil', brand: 'Tekstil 15', videoSrc: 'https://video.e-adam.net/static/web-videos/85bdd2a5-3446-4c94-a739-99e528563eae-1080.mp4' },
  { id: 29, title: 'Tekstil 16', category: 'Tekstil', brand: 'Tekstil 16', videoSrc: 'https://video.e-adam.net/static/web-videos/31024575-8749-42fe-a9d5-913d4cef653c-1080.mp4' },
{ id: 30, title: 'Takı 1', category: 'Takı', brand: 'Takı 1', videoSrc: 'https://video.e-adam.net/static/web-videos/232eeba7-5a54-4f5e-968d-f717721020d3-1080.mp4' },
{ id: 31, title: 'Takı 2', category: 'Takı', brand: 'Takı 2', videoSrc: 'https://video.e-adam.net/static/web-videos/e9581455-dd68-4f7f-8470-d62d4a7e519e-1080.mp4' },
{ id: 32, title: 'Takı 3', category: 'Takı', brand: 'Takı 3', videoSrc: 'https://video.e-adam.net/static/web-videos/bdbbbe3c-03f1-479e-bedd-b8b42b07a8d7-1080.mp4' },
{ id: 33, title: 'Takı 4', category: 'Takı', brand: 'Takı 4', videoSrc: 'https://video.e-adam.net/static/web-videos/0440ab46-cee3-448d-8939-adfadad3d30a-1080.mp4' },
{ id: 34, title: 'Takı 5', category: 'Takı', brand: 'Takı 5', videoSrc: 'https://video.e-adam.net/static/web-videos/2c9eab4e-7088-4884-ac5e-e6fd8090862b-1080.mp4' },
{ id: 35, title: 'Takı 6', category: 'Takı', brand: 'Takı 6', videoSrc: 'https://video.e-adam.net/static/web-videos/7ad24fb2-db82-45e8-a469-3a82621690f6-1080.mp4' },
{ id: 36, title: 'Takı 7', category: 'Takı', brand: 'Takı 7', videoSrc: 'https://video.e-adam.net/static/web-videos/21e5246f-8343-4b69-a9f0-78266316117e-1080.mp4' },
{ id: 37, title: 'Takı 8', category: 'Takı', brand: 'Takı 8', videoSrc: 'https://video.e-adam.net/static/web-videos/a002b187-235d-4c4a-b37b-11cad6a2f14a-1080.mp4' },

{ id: 38, title: 'Pazaryeri 1', category: 'Pazaryeri', brand: 'Pazaryeri 1', videoSrc: 'https://video.e-adam.net/static/web-videos/96354921-675d-4688-86d7-6c50eaf2aa37-1080.mp4' },
{ id: 39, title: 'Pazaryeri 2', category: 'Pazaryeri', brand: 'Pazaryeri 2', videoSrc: 'https://video.e-adam.net/static/web-videos/9a0f9b31-a6f3-4beb-9651-b22970ddf317-1080.mp4' },
{ id: 40, title: 'Pazaryeri 3', category: 'Pazaryeri', brand: 'Pazaryeri 3', videoSrc: 'https://video.e-adam.net/static/web-videos/5eb2c166-7733-4297-930a-d156c5437fe7-1080.mp4' },

{ id: 41, title: 'Kozmetik 1', category: 'Kozmetik', brand: 'Kozmetik 1', videoSrc: 'https://video.e-adam.net/static/web-videos/8c4de2bd-1cf6-4628-bca7-2ee4a8366e81-1080.mp4' },
  { id: 42, title: 'Kozmetik 2', category: 'Kozmetik', brand: 'Kozmetik 2', videoSrc: 'https://video.e-adam.net/static/web-videos/5377cf94-37e2-4fd9-871e-35ff0bceda83-1080.mp4' },
  { id: 43, title: 'Kozmetik 3', category: 'Kozmetik', brand: 'Kozmetik 3', videoSrc: 'https://video.e-adam.net/static/web-videos/c76a6276-6383-476b-ad78-e949f29c3097-1080.mp4' },
  { id: 44, title: 'Kozmetik 4', category: 'Kozmetik', brand: 'Kozmetik 4', videoSrc: 'https://video.e-adam.net/static/web-videos/a984b3ef-513c-4a51-b4d0-0df64f214fc4-1080.mp4' },
  { id: 45, title: 'Kozmetik 5', category: 'Kozmetik', brand: 'Kozmetik 5', videoSrc: 'https://video.e-adam.net/static/web-videos/830a83fb-316a-49d1-ab4e-3a6ad4ff2707-1080.mp4' },
  { id: 46, title: 'Kozmetik 6', category: 'Kozmetik', brand: 'Kozmetik 6', videoSrc: 'https://video.e-adam.net/static/web-videos/ca9da344-a92e-4f14-84b7-5c342a2a64c0-1080.mp4' },
  { id: 47, title: 'Kozmetik 7', category: 'Kozmetik', brand: 'Kozmetik 7', videoSrc: 'https://video.e-adam.net/static/web-videos/7aa01425-1a23-4ea7-92ae-84af23234792-1080.mp4' },

  { id: 48, title: 'İç Giyim 1', category: 'İç Giyim', brand: 'İç Giyim 1', videoSrc: 'https://video.e-adam.net/static/web-videos/09076a28-c3d1-4255-b613-a3173b37c440-1080.mp4' },
  { id: 49, title: 'İç Giyim 2', category: 'İç Giyim', brand: 'İç Giyim 2', videoSrc: 'https://video.e-adam.net/static/web-videos/3b67dbae-9df1-46a1-ae59-4f791d6f152b-1080.mp4' },
  { id: 50, title: 'İç Giyim 3', category: 'İç Giyim', brand: 'İç Giyim 3', videoSrc: 'https://video.e-adam.net/static/web-videos/e0c5709b-1cee-4954-b8f8-9c18a0a301d4-1080.mp4' },
  { id: 51, title: 'İç Giyim 4', category: 'İç Giyim', brand: 'İç Giyim 4', videoSrc: 'https://video.e-adam.net/static/web-videos/8085505d-cb64-4019-9ff0-70550f4f76c3-1080.mp4' },
  { id: 52, title: 'İç Giyim 5', category: 'İç Giyim', brand: 'İç Giyim 5', videoSrc: 'https://video.e-adam.net/static/web-videos/87c377c7-dd1c-4f47-9ac6-a452605bf4a8-1080.mp4' },
  { id: 53, title: 'İç Giyim 6', category: 'İç Giyim', brand: 'İç Giyim 6', videoSrc: 'https://video.e-adam.net/static/web-videos/4ff56036-e331-4b57-be38-7e2efad14002-1080.mp4' },
  { id: 54, title: 'İç Giyim 7', category: 'İç Giyim', brand: 'İç Giyim 7', videoSrc: 'https://video.e-adam.net/static/web-videos/50fa7d7b-cdb7-4eb7-8dc7-27c74f971832-1080.mp4' },
  { id: 55, title: 'İç Giyim 8', category: 'İç Giyim', brand: 'İç Giyim 8', videoSrc: 'https://video.e-adam.net/static/web-videos/28ca971e-f95e-4237-b0e1-460f292fc42d-1080.mp4' },
  { id: 56, title: 'İç Giyim 9', category: 'İç Giyim', brand: 'İç Giyim 9', videoSrc: 'https://video.e-adam.net/static/web-videos/56a98f5d-4ec6-49a9-8f83-0494ae98325a-1080.mp4' },
  { id: 57, title: 'İç Giyim 10', category: 'İç Giyim', brand: 'İç Giyim 10', videoSrc: 'https://video.e-adam.net/static/web-videos/1f258f15-a65c-404a-b4a5-0cf69e1aec86-1080.mp4' },
  { id: 58, title: 'İç Giyim 11', category: 'İç Giyim', brand: 'İç Giyim 11', videoSrc: 'https://video.e-adam.net/static/web-videos/4a5fe5d2-755e-442e-8328-edb660858ea2-1080.mp4' },
  { id: 59, title: 'İç Giyim 12', category: 'İç Giyim', brand: 'İç Giyim 12', videoSrc: 'https://video.e-adam.net/static/web-videos/189c1f40-94ec-4598-bb9f-a8251b957d70-1080.mp4' },
  { id: 60, title: 'İç Giyim 13', category: 'İç Giyim', brand: 'İç Giyim 13', videoSrc: 'https://video.e-adam.net/static/web-videos/3cc888f2-943a-495f-874d-25ca0ff5e89d-1080.mp4' },

  { id: 61, title: 'Gıda 1', category: 'Gıda', brand: 'Gıda 1', videoSrc: 'https://video.e-adam.net/static/web-videos/166cc42c-db7b-4aea-a0c1-b3bbbca1f7d7-1080.mp4' },
  { id: 62, title: 'Gıda 2', category: 'Gıda', brand: 'Gıda 2', videoSrc: 'https://video.e-adam.net/static/web-videos/e8eff455-515b-482b-bfd3-c3f0b8cd67c1-1080.mp4' },
  { id: 63, title: 'Gıda 3', category: 'Gıda', brand: 'Gıda 3', videoSrc: 'https://video.e-adam.net/static/web-videos/01a5a453-dd94-4941-a117-72526be3a00d-1080.mp4' },
  { id: 64, title: 'Gıda 4', category: 'Gıda', brand: 'Gıda 4', videoSrc: 'https://video.e-adam.net/static/web-videos/728bdcf1-6b62-4d79-bf8c-8c4e837bed68-1080.mp4' },
  { id: 65, title: 'Gıda 5', category: 'Gıda', brand: 'Gıda 5', videoSrc: 'https://video.e-adam.net/static/web-videos/0d391648-10f4-4cbb-962f-41059b902a9b-1080.mp4' },
  { id: 66, title: 'Gıda 6', category: 'Gıda', brand: 'Gıda 6', videoSrc: 'https://video.e-adam.net/static/web-videos/7acb3994-5b2f-49cc-80be-a16a03c79163-1080.mp4' },
  { id: 67, title: 'Gıda 7', category: 'Gıda', brand: 'Gıda 7', videoSrc: 'https://video.e-adam.net/static/web-videos/fa065634-86a4-4393-ba3d-11ce52d6ba66-1080.mp4' },
  { id: 68, title: 'Gıda 8', category: 'Gıda', brand: 'Gıda 8', videoSrc: 'https://video.e-adam.net/static/web-videos/024a8d9d-1063-4118-9fc1-3ad1a85a7dc4-1080.mp4' },

  { id: 69, title: 'Ev&Yaşam 1', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 1', videoSrc: 'https://video.e-adam.net/static/web-videos/9f67e8cb-8322-419f-813f-e783dda4b897-1080.mp4' },
  { id: 70, title: 'Ev&Yaşam 2', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 2', videoSrc: 'https://video.e-adam.net/static/web-videos/d51f1548-9bba-4b5a-98d4-18e61cd71ebd-1080.mp4' },
  { id: 71, title: 'Ev&Yaşam 3', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 3', videoSrc: 'https://video.e-adam.net/static/web-videos/55689695-a7df-4313-9a12-b7c1db4432c1-1080.mp4' },
  { id: 72, title: 'Ev&Yaşam 4', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 4', videoSrc: 'https://video.e-adam.net/static/web-videos/b43be54a-1ff8-4d12-9c47-5f3afefa70cd-1080.mp4' },
  { id: 73, title: 'Ev&Yaşam 5', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 5', videoSrc: 'https://video.e-adam.net/static/web-videos/e5c544eb-82b0-440a-ae5e-a861e1304f10-1080.mp4' },
  { id: 74, title: 'Ev&Yaşam 6', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 6', videoSrc: 'https://video.e-adam.net/static/web-videos/f2773ee1-4c57-4cb0-9ed4-d14c430437f1-1080.mp4' },
  { id: 75, title: 'Ev&Yaşam 7', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 7', videoSrc: 'https://video.e-adam.net/static/web-videos/87082587-df3f-4d9e-b76c-0c7d0e220b34-1080.mp4' },
  { id: 76, title: 'Ev&Yaşam 8', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 8', videoSrc: 'https://video.e-adam.net/static/web-videos/02de0da2-7ecd-4928-8c24-45f07b481836-1080.mp4' },
  { id: 77, title: 'Ev&Yaşam 9', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 9', videoSrc: 'https://video.e-adam.net/static/web-videos/9a0e2f0d-9480-453e-90ae-faca13a6ba88-1080.mp4' },
  { id: 78, title: 'Ev&Yaşam 10', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 10', videoSrc: 'https://video.e-adam.net/static/web-videos/3e61f360-46ba-4d32-b933-2d925770ea7d-1080.mp4' },
  { id: 79, title: 'Ev&Yaşam 11', category: 'Ev&Yaşam', brand: 'Ev&Yaşam 11', videoSrc: 'https://video.e-adam.net/static/web-videos/2afe8cb4-3a3c-4695-a501-796e9ad41c82-1080.mp4' },

  { id: 80, title: 'Ayakkabı & Çanta 1', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 1', videoSrc: 'https://video.e-adam.net/static/web-videos/9bae3826-0eec-47f0-8745-948827e67a60-1080.mp4' },
  { id: 81, title: 'Ayakkabı & Çanta 2', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 2', videoSrc: 'https://video.e-adam.net/static/web-videos/6bdf884f-47b8-4878-812f-fe7dbb8516ba-1080.mp4' },
  { id: 82, title: 'Ayakkabı & Çanta 3', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 3', videoSrc: 'https://video.e-adam.net/static/web-videos/c4f0aaa1-5698-4daf-9d37-d809d098ce63-1080.mp4' },
  { id: 83, title: 'Ayakkabı & Çanta 4', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 4', videoSrc: 'https://video.e-adam.net/static/web-videos/e79d3a27-47d3-4c06-94e9-9b0bc6b1b65e-1080.mp4' },
  { id: 84, title: 'Ayakkabı & Çanta 5', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 5', videoSrc: 'https://video.e-adam.net/static/web-videos/dd618886-4c5e-4f77-b58b-4b97272524e7-1080.mp4' },
  { id: 85, title: 'Ayakkabı & Çanta 6', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 6', videoSrc: 'https://video.e-adam.net/static/web-videos/f7ecc688-efbe-48eb-a125-5cea376c5db8-1080.mp4' },
  { id: 86, title: 'Ayakkabı & Çanta 7', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 7', videoSrc: 'https://video.e-adam.net/static/web-videos/830e5119-a73f-45cd-9d25-15262b3f3a8e-1080.mp4' },
  { id: 87, title: 'Ayakkabı & Çanta 8', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 8', videoSrc: 'https://video.e-adam.net/static/web-videos/ef3639c9-4df1-43ef-aa1f-29fae418e2e8-1080.mp4' },
  { id: 88, title: 'Ayakkabı & Çanta 9', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 9', videoSrc: 'https://video.e-adam.net/static/web-videos/80d8cb97-a94d-469a-b056-fca4d2374fbf-1080.mp4' },
  { id: 89, title: 'Ayakkabı & Çanta 10', category: 'Ayakkabı & Çanta', brand: 'Ayakkabı & Çanta 10', videoSrc: 'https://video.e-adam.net/static/web-videos/9684d734-3399-4da7-a05a-9cb6df75b94f-1080.mp4' }
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
