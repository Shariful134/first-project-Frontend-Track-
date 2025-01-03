import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="w-full  flex items-center ">
        <Logo></Logo>
        <span className="font-bold ml-2">Task</span>Master
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
        <div className="ml-auto border-2 border-red-500">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
