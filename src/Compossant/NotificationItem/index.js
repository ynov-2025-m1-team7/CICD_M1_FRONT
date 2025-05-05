import React from "react";

const NotificationItem = ({ date, message }) => {
  return (
    <div style={styles.item}>
      <strong>{date}:</strong> {message}
    </div>
  );
};

const styles = {
  item: {
    background: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)"
  }
};

export default NotificationItem;