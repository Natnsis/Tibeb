import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Sun02Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex gap-1">
        <div className="h-10 w-15">
          <img src="/logo.png" alt="logo-img" className="w-full h-full" />
        </div>
        <nav className="flex gap-4 mt-1">
          <a href="#">Docs</a>
          <a href="#">Components</a>
          <a href="#">Templates</a>
          <a href="#">Blog</a>
          <a href="#">Custom</a>
        </nav>
      </div>

      <div className="flex gap-5 items-center">
        <input
          type="text"
          placeholder="Search"
          className="border-1 rounded-lg h-7 px-2 w-[20vw]"
        />
        <button className="flex gap-1 items-center">
          <HugeiconsIcon icon={GithubIcon} size={20} />
          <p className="text-text-secondary">123k</p>
        </button>
        <button>
          <HugeiconsIcon icon={Sun02Icon} />
        </button>
        <button className="flex items-center bg-primary rounded-lg px-2 py-1">
          <HugeiconsIcon icon={PlusSignIcon} size={15} />
          <p className="text-sm">Create</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
