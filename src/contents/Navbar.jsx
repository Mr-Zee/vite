
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-yellow-300 px-6 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-grey font-bold text-lg">RPF</div>
      </div>

      {/* Profile Icon */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-grey"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 10a4 4 0 100-8 4 4 0 000 8zm5 2a5 5 0 01-5 5H5a5 5 0 01-5-5V9a5 5 0 015-5h5a5 5 0 015 5v3zm-5-7a3 3 0 100 6 3 3 0 000-6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
