import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { useSelector } from "react-redux";

const App = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  return (
    <div className="w-full min-h-[100vh] text-white flex justify-center items-center bg-hero-gradient py-5">
      {isSidebar && <Sidebar />}
      {!isSidebar && <Main />}
    </div>
  );
};

export default App;
