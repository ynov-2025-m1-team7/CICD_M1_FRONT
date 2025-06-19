import React from "react";
import "./style.css";
import * as Sentry from "@sentry/react";

const NotificationItem = ({ date, message }) => {
  const currentPath = window.location.pathname;

  if (!date || !message) {
    Sentry.captureMessage("Date and message are required for NotificationItem", {
      level: "error",
      tags: {
        route: currentPath,
      },
    });
  }

  return (
    <div className="item">
      <strong>{date}:</strong> {message}
    </div>
  );
};

export default NotificationItem;