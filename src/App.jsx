import { useEffect, useState } from "react";
import DataCard from "./DataCard";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 async function fetchPosts() {
  try {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  fetchPosts();
}, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>API Fetch App</h1>
      <button
        onClick={fetchPosts}
        style={{
         padding: "10px 15px",
         margin: "10px",
         border: "none",
         borderRadius: "5px",
         backgroundColor: "#4CAF50",
         color: "white",
         cursor: "pointer",
        }}
      >
       Refresh Data
      </button>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    padding: "20px",
  }}
>
  {data &&
    data.slice(0, 6).map((post) => (
      <DataCard
        key={post.id}
        title={post.title}
        body={post.body}
      />
    ))}
</div>
    </div>
  );
}

export default App;