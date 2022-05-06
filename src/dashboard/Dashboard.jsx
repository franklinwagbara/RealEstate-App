import LeftDrawer from "./LeftDrawer";
import Navbar from "./Navbar";
import Content from "./Content";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="wrapper-drawer"></div>

      <div className="wrapper-main">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
