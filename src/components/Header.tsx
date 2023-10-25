import logo from "../assets/Images/logo.png";
import { HiMoon, HiSun, HiOutlineSearch } from "react-icons/hi";

type HeaderProps = {
  toggle: boolean;
  setToggle(toggle: boolean): void;
};

const Header = ({ toggle, setToggle }: HeaderProps) => {
  return (
    <div className="flex items-center p-3 ">
      <img src={logo} width={60} height={60} />
      <div className="flex items-center w-full bg-slate-200 p-4 mx-5 rounded-full">
        <HiOutlineSearch className="text-xl text-slate-600" />
        <input
          type="text"
          placeholder="Search Games"
          className="w-full outline-none bg-transparent px-2 dark:bg-cyan-500 "
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon
            onClick={() => setToggle(!toggle)}
            className="text-[60px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          />
        ) : (
          <HiSun
            onClick={() => setToggle(!toggle)}
            className="text-[60px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
