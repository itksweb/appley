import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { useSelector } from "react-redux";

const App = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  return (
    <div className="hero">
      {isSidebar && <Sidebar />}
      {!isSidebar && <Main />}
    </div>
  );
};

export default App;
