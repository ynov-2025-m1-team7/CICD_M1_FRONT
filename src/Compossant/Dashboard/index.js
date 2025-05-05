import MyPieChart from "../Graphics/Pie";
import MyLineChart from "../Graphics/Line";
import AverageFeeling from "../StatsCards/AverageFeeling"; // Correction ici
import PercentageReviews from "../StatsCards/PercentageReviews";
import Cookies from "js-cookie";
import "./style.css";

// Fonction utilitaire pour décoder le JWT si non déjà définie ailleurs
const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch (e) {
        console.error("Erreur de parsing du JWT :", e);
        return null;
    }
};

const Dashboard = () => {
    const token = Cookies.get('jwt_token');

    if (token) {
        console.log("Token JWT :", token);
    } else {
        console.log("Aucun token trouvé");
    }

    const user = token ? parseJwt(token) : null;
    console.log("Utilisateur :", user);

    return (
        <div className="DashboardContainer">
            <h1 className="DashboardTitle">
                Bienvenue {user?.name || "John Doe"}
            </h1>
            <MyPieChart />
            <AverageFeeling />
            <PercentageReviews />
            <MyLineChart />
        </div>
    );
};

export default Dashboard;
