import MyPieChart from "../Graphics/Pie";
import MyLineChart from "../Graphics/Line";
import AverageFeeling from "../StatsCards/AverageFeeling";
import PercentageReviews from "../StatsCards/PercentageReviews";
import Cookies from "js-cookie";
import axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";

import { SortByDate } from "../ApiData";

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
    const [data, setData] = useState([]); // Données complètes
    const [countByDate, setCountByDate] = useState([]); // Données triées par date
    const [loading, setLoading] = useState(true);
    const [averageScore, setAverageScore] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Récupérer le score moyen
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/feedbacks/average-score`);
            
            // Récupérer les données des feedbacks
            const feedbacksResponse = await axios.get(`${process.env.REACT_APP_API_URL}/feedbacks`);
            
            // Trier et filtrer les données par date
            const { dataByDateArray } = SortByDate(feedbacksResponse.data);

            // Mettre à jour les états
            setData(feedbacksResponse.data); // Toutes les données
            setCountByDate(dataByDateArray); // Données triées
            setAverageScore(response.data.average_score); // Score moyen

            console.log("Données triées par date :", dataByDateArray);
          } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
    }, []);

    const user = token ? parseJwt(token) : null;

    // Si les données sont en train de charger, afficher un message de chargement
    if (loading) {
      return <div>Chargement...</div>;
    }

    // Extraire labels (dates) et data (comptes) à partir de countByDate
    const labels = countByDate.map(item => item.date);
    const dataValues = countByDate.map(item => item.count);

    return (
        <div className="DashboardContainer">
            <h1 className="DashboardTitle">
                Bienvenue {user?.name || "John Doe"}
            </h1>
            
            {/* Passer les labels et data aux graphiques */}
            <MyPieChart />
            <AverageFeeling value={averageScore} />
            <PercentageReviews />
            <MyLineChart labels={labels} values={dataValues} />
        </div>
    );
};

export default Dashboard;
