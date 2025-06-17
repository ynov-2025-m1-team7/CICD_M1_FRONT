import React from "react";
import "./style.css";

const NotificationItem = ({ date, message }) => {
  if (!date || !message) {
    throw new Error("Date and message are required for NotificationItem");
  }

  return (
    <div className="item">
      <strong>{date}:</strong> {message}
    </div>
  );
};

export default NotificationItem;