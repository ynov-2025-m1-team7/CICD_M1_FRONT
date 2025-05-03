import MyPieChart from "../Graphics/Pie";
import MyLineChart from "../Graphics/Line";
import "./style.css";

const Dashboard = () => {
    return (
        <div className="DashboardContainer">
            <h1 className="DashboardTitle">Bienvenue John Doe</h1>
            <MyPieChart/>
            <MyLineChart/>
        </div>
    );
}

export default Dashboard;