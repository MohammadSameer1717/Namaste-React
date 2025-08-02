import React from "react";
import { MdWifiOff } from "react-icons/md"; 

const OfflineMessage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <MdWifiOff size={100} color="#dc3545" />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#343a40" }}>
        You are offline
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
        Please check your internet connection and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.2rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
    </div>
  );
};

export default OfflineMessage;