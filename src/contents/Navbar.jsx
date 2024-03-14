
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-yellow-300 px-6 py-2">
      <div className="flex items-center">
      <a href="/" className="text-grey font-extrabold text-lg">RFP</a>
      </div>

      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-grey"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 10a4 4 0 100-8 4 4 0 000 8zm5 2a5 5 0 01-5 5H5a5 5 0 01-5-5V9a5"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
