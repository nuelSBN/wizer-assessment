import logo from "../../../assets/logo-dark.png";

export default function Header() {
  return (
    <header className="h-[80px] w-full flex justify-between items-center p-4 bg-white border border-[#eee]">
      <img src={logo} alt="" className="w-24" />
      <div className="">
        <p>Welcome</p>
        <h1>Anabanana</h1>
      </div>
    </header>
  );
}
