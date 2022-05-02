import ContentArea from "./ContentArea";
import "./dashboard.scss";
import Navigation from "./Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <ContentArea></ContentArea>
    </div>
  );
};
export default Dashboard;
