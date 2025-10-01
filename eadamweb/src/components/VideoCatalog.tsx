import { useState } from "react";
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

export default function VideoCatalog({ items, categories }: Props) {
  const [activeCat, setActiveCat] = useState("Tümü");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filtered =
    activeCat === "Tümü" ? items : items.filter((it) => it.category === activeCat);

  return (
    <div className="vcatalog">
        <h2 className="vcats-title">
            Hangi sektör için bu anasayfa tasarımını istiyorsunuz?
        </h2><br></br>
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
  {filtered.map((it) => (
    <div key={it.id} className="vitem">
      <article className="vcard">
        <div className="vinner">
          <div className="vbadge">
            {it.liveNote ?? `Bu tasarım ${it.id} markada canlıda**`}
          </div>

          <video src={it.videoSrc} muted playsInline preload="metadata" />

      <button
        className="vplay-btn"
        aria-label="Play"
        onClick={() => setActiveVideo(it)}
      >
        {/* <img src="/assets/button.png" alt="Play" /> */}
      </button>

        </div>

        <div className="vmeta">
          <div className="vbrand">
            <span className="vdot">
              <img src={avatar} alt="brand avatar" />
            </span>
            <span className="vbrand-name">{it.brand}</span>
          </div>
          <span className="vright">E-adam</span>
        </div>
      </article>

      <div className="vcat-chip">{it.category}</div>
    </div>
  ))}
</div>


      {activeVideo && (
        <div className="vmodal" onClick={() => setActiveVideo(null)}>
          <div className="vmodal-box" onClick={(e) => e.stopPropagation()}>
          <button className="vmodal-close" onClick={() => setActiveVideo(null)}>
            ✕
          </button>
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
