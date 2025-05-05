import React from "react";
import NotificationItem from "../NotificationItem";
import "./style.css";

const NotificationList = ({ notifications }) => {
  return (
    <div className="notification-list">
        <h2>Notifications</h2>
      {notifications.map((notif) => (
        <NotificationItem key={notif.id} date={notif.date} message={notif.message} />
      ))}
    </div>
  );
};

// const styles = {
//   list: {
//     listStyleType: "none",
//     padding: 0
//   }
// };

export default NotificationList;