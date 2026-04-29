"use client";

const FetchError = ({ message = " " }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <h2 className="heading-2">Something went wrong...</h2>
      <p className="text-body">{message}</p>
      <button className="btn" onClick={() => window.location.reload()}>
        <span className="text-button">Refresh page</span>
      </button>
    </div>
  );
};

export default FetchError;
