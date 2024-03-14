import AppContent  from "../components/AppContent";
import NavBar from "../contents/Navbar";


const DefaultLayout = () => {
  return (
    <div>
      <div className="body flex-grow-1">
        <NavBar />
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
