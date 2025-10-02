import { useState, useMemo, useEffect } from "react";
import "./ui/VideoCatalog.css";
import avatar from "/assets/avatar.jpg";

type VideoItem = {
  id: number;
  title: string;
  category: string;
  brand: string;
  videoSrc: string;
  liveNote?: string;
};

type Props = {
  items: VideoItem[];
  categories: string[];
};

const LIVE_POOL = [3, 5, 6, 7, 8];
function hashInt(input: number | string) {
  const s = String(input);
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
function pickLiveCountById(id: number | string) {
  const h = hashInt(id);
  return LIVE_POOL[h % LIVE_POOL.length];
}

export default function VideoCatalog({ items, categories }: Props) {
  const [activeCat, setActiveCat] = useState("Tümü");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const [pageSize, setPageSize] = useState(20);
  useEffect(() => {
    const setByWidth = () => {
      if (typeof window === "undefined") return;
      setPageSize(window.matchMedia("(max-width: 768px)").matches ? 10 : 20);
    };
    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);

  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [activeCat, pageSize]);

  const filtered =
    activeCat === "Tümü" ? items : items.filter((it) => it.category === activeCat);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  const goPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const liveCountMap = useMemo(() => {
    const m = new Map<number, number>();
    items.forEach((it) => m.set(it.id, pickLiveCountById(it.id)));
    return m;
  }, [items]);

  return (
    <div className="vcatalog">
      <h2 className="vcats-title">Hangi sektör için bu anasayfa tasarımını istiyorsunuz?</h2>
      <br />
      <div className="vcats">
        {["Tümü", ...categories].map((c) => (
          <button
            key={c}
            className={`vcat-btn ${c === activeCat ? "active" : ""}`}
            onClick={() => setActiveCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <br /><br />

      <div className="vgrid">
        {pageItems.map((it) => (
          <div key={it.id} className="vitem">
            <article className="vcard">
              <div className="vinner">
                <div className="vbadge">
                  {it.liveNote ?? `Bu tasarım ${liveCountMap.get(it.id)} markada canlıda**`}
                </div>

                <video src={it.videoSrc} muted playsInline preload="metadata" />

                <button
                  className="vplay-btn"
                  aria-label="Play"
                  onClick={() => setActiveVideo(it)}
                />
              </div>

              <div className="vmeta">
                <div className="vbrand">
                  <span className="vdot"><img src={avatar} alt="brand avatar" /></span>
                  <span className="vbrand-name">{it.brand}</span>
                </div>
                <span className="vright">E-adam</span>
              </div>
            </article>

            <div className="vcat-chip">{it.category}</div>
          </div>
        ))}
      </div>

      <div className="vpager">
        <button className="vpager-btn" disabled={page === 1} onClick={() => goPage(page - 1)}>
          Önceki
        </button>
        <span className="vpager-info">{page} / {totalPages}</span>
        <button className="vpager-btn" disabled={page === totalPages} onClick={() => goPage(page + 1)}>
          Sonraki
        </button>
      </div>

      {activeVideo && (
        <div className="vmodal" onClick={() => setActiveVideo(null)}>
          <div className="vmodal-box" onClick={(e) => e.stopPropagation()}>
            <button className="vmodal-close" onClick={() => setActiveVideo(null)}>✕</button>
            <video
              src={activeVideo.videoSrc}
              controls
              autoPlay
              playsInline
              className="vmodal-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
