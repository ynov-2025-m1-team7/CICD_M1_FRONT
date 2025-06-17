import React from "react";
import NotificationItem from "../NotificationItem";
import "./style.css";

const NotificationList = ({ notifications }) => {
  if (!notifications || !Array.isArray(notifications)) {
    throw new Error("Notifications must be an array");
  }

  return (
    <div className="notification-list">
        <h2>Notifications</h2>
      {notifications.map((notif) => (
        <NotificationItem key={notif.id} date={notif.date} message={notif.message} />
      ))}
    </div>
  );
};



export default NotificationList;