import React, { useState } from "react";
import NotificationList from "../../Compossant/NotificationList";
import PageContainer from "../../Compossant/PageContainer";
import "./style.css";
import Header from "../../Compossant/Header";


const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, date: "Aujourd’hui", message: "Mise à jour disponible !" },
    { id: 2, date: "Aujourd’hui", message: "Nouveau commentaire sur votre rapport." },
    { id: 3, date: "Cette semaine", message: "Votre dernière analyse de données est prête." },
  ]);

  return (
    <div className="notification-page">
      <Header />
      <PageContainer component={<NotificationList notifications={notifications} />} />
    </div>
  );
};

export default NotificationsPage;