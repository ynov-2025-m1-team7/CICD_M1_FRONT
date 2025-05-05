import React from "react";
import "./style.css";

const NotificationItem = ({ date, message }) => {
  return (
    <div className="item">
      <strong>{date}:</strong> {message}
    </div>
  );
};

export default NotificationItem;