import user from "../assets/images/user-avatar.jpg"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-l from-gray-400 to-gray-400 px-6 py-2">
      <div className="flex items-center">
        <a href="/" className="text-gray-700 font-extrabold text-4xl">RFP</a>
      </div>

      <div className="flex items-center">
        {/* <a href="#" className="text-grey font-semibold mx-4">Dashboard</a>
        <a href="#" className="text-grey font-semibold pe-8">Configs</a> */}
        <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <img src={user} alt="avatar" className="w-10 h-10 rounded-full" />
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
