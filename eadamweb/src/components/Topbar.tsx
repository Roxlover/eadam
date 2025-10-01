export default function Topbar() {
  const logoSrc ="/assets/logo.jpg";
  return (
    <div className="topline">
      <img className="logo" src={logoSrc} alt="e-adam" />
      <span className="times">×</span>
      <span className="lib">Tema Kütüphanesi</span>
    </div>
  );
}
