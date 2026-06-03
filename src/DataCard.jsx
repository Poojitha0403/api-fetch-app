function DataCard({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        margin: "10px",
        backgroundColor: "#f4f4f4",
        color: "#000",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default DataCard;