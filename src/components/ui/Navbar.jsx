import Logo from "@/assets/icons/Logo.svg";
import LogoText from "@/assets/icons/Group.svg";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  return (
    <div className="w-screen bg-white py-4 px-8 flex justify-between items-center relative lg:top-10 lg:w-[35%] lg:mx-auto lg:rounded-xl lg:py-3">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-4">
          <img src={Logo} />
          <img src={LogoText} />
        </div>
        <div className="hidden lg:flex gap-4 font-medium">
          <p>Features</p>
          <p>Pricing</p>
          <p>Demo</p>
          <p>Blog</p>
        </div>
        <button className="hidden  lg:flex text-white font-medium py-2 px-6 rounded-md bg-[#3366FF]">
          Sign In
        </button>
      </div>
      <HamburgerButton />
    </div>
  );
}
