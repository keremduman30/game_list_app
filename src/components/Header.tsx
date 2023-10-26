import logo from "../assets/Images/logo.png";
import { HiMoon, HiSun, HiOutlineSearch } from "react-icons/hi";

type HeaderProps = {
  toggle: boolean;
  setToggle(toggle: boolean): void;
};
//https://api.rawg.io/api/games?key=18d8dc115d954615a6fe8522598e8a97

const Header = ({ toggle, setToggle }: HeaderProps) => {
  return (
    <div className="flex items-center p-3 ">
      <img src={logo} width={60} height={60} />
      <div className="flex items-center w-full bg-slate-200 p-4 mx-5 rounded-full">
        <HiOutlineSearch className="text-xl text-slate-600" />
        <input
          type="text"
          placeholder="Search Games"
          className="w-full outline-none bg-transparent px-2 dark:bg-cyan-500  dark:bg-transparent"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon
            onClick={() => {
              setToggle(!toggle);
              localStorage.setItem("theme", "l");
            }}
            className="text-[45px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          />
        ) : (
          <HiSun
            onClick={() => {
              setToggle(!toggle);
              localStorage.setItem("theme", "d");
            }}
            className="text-[45px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
