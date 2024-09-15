import Logo from "@/assets/icons/Logo.svg";
import LogoText from "@/assets/icons/Group.svg";
import HamburgerButton from "./HamburgerButton";
import useToggle from "@/hooks/useToggle";

export default function Navbar() {
  const [isOpen, toggleNavbar] = useToggle();

  return (
    <>
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
          <button className="hidden lg:flex text-white font-medium py-2 px-6 rounded-md bg-[#3366FF]">
            Sign In
          </button>
        </div>
        <HamburgerButton onClick={toggleNavbar} isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col w-full items-center justify-center bg-white gap-5 pt-4 pb-8 font-medium px-12 text-sm transition-all duration-500 ">
          <p>Features</p>
          <p>Pricing</p>
          <p>Demo</p>
          <button className="bg-blue-600 text-white py-2 w-full rounded-lg font-normal">
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
