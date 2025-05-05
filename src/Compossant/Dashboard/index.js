import MyPieChart from "../Graphics/Pie";
import MyLineChart from "../Graphics/Line";
import AvarageFeeling from "../StatsCards/AverageFeeling";
import PercentageReviews from "../StatsCards/PercentageReviews";
import "./style.css";

const Dashboard = () => {
    return (
        <div className="DashboardContainer">
            <h1 className="DashboardTitle">Bienvenue John Doe</h1>
            <MyPieChart/>
            <AvarageFeeling/>
            <PercentageReviews/>
            <MyLineChart/>
        </div>
    );
}

export default Dashboard;