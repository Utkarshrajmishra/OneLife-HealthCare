const NavBar = () => {
  return (
    <nav className="w-full bg-primary h-20">
      <div className="container items-center flex h-full justify-between">
        <p>Logo</p>
        <ul className="flex text-sm gap-7 text-stock ">
          <li className="py-1 px-3 hover:bg-zinc-100  hover:bg-opacity-10 rounded-2xl">
            Home
          </li>
          <li className="py-1 px-3 hover:bg-zinc-100 hover:bg-opacity-10 rounded-2xl">
            Space
          </li>
          <li className="py-1 px-3 hover:bg-zinc-100 hover:bg-opacity-10 rounded-2xl">
            About Us
          </li>
          <li className="py-1 px-3 hover:bg-zinc-100 hover:bg-opacity-10 rounded-2xl">
            Contact Us
          </li>
        </ul>
        <button className="py-2 px-4 text-sm rounded-2xl text-stock hover:bg-stock hover:text-primary outline outline-1 outline-stock ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;