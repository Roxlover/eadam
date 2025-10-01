import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "./ui/VideoCarouselMobil.css";

type MediaItem =
  | { type: "video"; src: string; poster?: string; alt?: string }
  | { type: "image"; src: string; alt?: string };

type Props = { items: MediaItem[]; className?: string };

export default function VideoCarouselMobil({ items, className = "" }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const setVideoRef = (i: number) => (el: HTMLVideoElement | null): void => {
    videoRefs.current[i] = el;
  };

  const playActive = (idx: number) =>
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) v.play().catch(() => {});
      else { v.pause(); v.currentTime = 0; }
    });

  const slides = useMemo(
    () =>
      items.map((it, idx) => (
        <SwiperSlide key={idx} className="video-slide">
          <div className="vframe vframe-m">
            <div className="vinner vinner-m">
              {it.type === "image" ? (
                <img className="media" src={it.src} alt={it.alt || ""} />
              ) : (
                <video
                  ref={setVideoRef(idx)}
                  className="media"
                  src={it.src}
                  poster={"poster" in it ? it.poster : undefined}
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  controls={false}
                />
              )}
            </div>
          </div>
        </SwiperSlide>
      )),
    [items]
  );

  return (
    <div className={`video-carousel-mobil ${className}`}>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        grabCursor
        slidesPerView={"auto"}
        spaceBetween={0}
        loop
        loopAdditionalSlides={3} 
        loopPreventsSliding={false}
        watchSlidesProgress

        coverflowEffect={{
          rotate: 26,
          depth: 300,
          stretch: -6,
          modifier: 1.22,
          slideShadows: false,
        }}
        onAfterInit={(sw) => playActive(sw.realIndex)}
        onSlideChange={(sw) => playActive(sw.realIndex)}
      >
        {slides}
      </Swiper>
    </div>
  );
}
