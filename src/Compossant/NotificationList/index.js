import React from "react";
import NotificationItem from "../NotificationItem";
import "./style.css";
import * as Sentry from "@sentry/react";

const NotificationList = ({ notifications }) => {
  const currentPath = window.location.pathname;
  
  if (!notifications || !Array.isArray(notifications)) {
    Sentry.captureMessage("Notifications must be an array", {
      level: "error",
      tags: {
        route: currentPath,
      },
    });
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