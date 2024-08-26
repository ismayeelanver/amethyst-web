import icon from "../assets/icon.png";
export default function Header() {
  return (
    <>
      <img src={icon} alt="logo" className="logo" />
      <div className="app">
        Oppie 404 Page Not Found!
      </div>
      <p className="tail">Happy hacking!</p>
      <a href="/home" className="tail1">Home</a>
    </>
  );
}
