type Props = {
  src: string;
  alt?: string;
};

export default function HeroImage({ src, alt = "" }: Props) {
  return (
    <div className="image-showcase">

          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

  );
}