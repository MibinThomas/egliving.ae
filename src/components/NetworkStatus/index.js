import React, { useState, useEffect } from "react";
import { Signal, SignalLow } from "lucide-react";

const NetworkStatus = () => {
  const [status, setStatus] = useState("online");
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const retryInterval = 60000; // 60 seconds for reconnection attempts

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial check for network status
      const checkNetworkStatus = () => {
        if (navigator.onLine) {
          setStatus("online");
          setRetryCount(0); // Reset retry count on success
        } else {
          setStatus("offline");
          if (retryCount < maxRetries) {
            setRetryCount(retryCount + 1);
          }
        }
      };

      // Check network status on initial load
      checkNetworkStatus();

      // Event listeners for online/offline changes
      window.addEventListener("online", checkNetworkStatus);
      window.addEventListener("offline", checkNetworkStatus);

      // Retry logic: Retry immediately first, then every 1 minute
      const retryTimeout = setTimeout(
        () => {
          if (status === "offline" && retryCount < maxRetries) {
            checkNetworkStatus();
          }
        },
        retryCount === 0 ? 0 : retryInterval
      ); // Retry immediately on first offline, then every minute

      // After 3 failed attempts, show "Check your internet connection"
      const failureTimeout = setTimeout(() => {
        if (retryCount >= maxRetries && status === "offline") {
          setStatus("check-connection");
        }
      }, retryInterval * maxRetries);

      // Cleanup listeners and timeouts
      return () => {
        clearTimeout(retryTimeout);
        clearTimeout(failureTimeout);
        window.removeEventListener("online", checkNetworkStatus);
        window.removeEventListener("offline", checkNetworkStatus);
      };
    }
  }, [status, retryCount]);

  return (
    <div
      className={`network-status ${status}`}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "90px",
        zIndex: 9999,
      }}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {status === "online" ? (
          <Signal size={14} stroke="#4cb753" />
        ) : (
          <SignalLow size={14} stroke="#4cb753" />
        )}
        {status === "offline"
          ? `Trying to reconnect (${retryCount}/${maxRetries})`
          : status === "check-connection"
          ? "Check your internet connection"
          : "Stable"}
      </p>
    </div>
  );
};

export default NetworkStatus;
