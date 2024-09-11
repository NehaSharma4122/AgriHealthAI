import React from "react";
import "./Blog.css";
import { useEffect, useState } from "react";

const Blog = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://pure-encouragement-production.up.railway.app/news"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setNews(data); // Store the fetched data in state
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        setError(error.message); // Handle any errors
        setLoading(false);
      }
    };

    fetchNews(); // Call the function
  }, []); // Empty dependency array means it runs once after the component mounts

  // Display loading, error, or the news data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="Blog">
      <h1 className="heading">LATEST NEWS</h1>
      <hr/>
      <ul>
        {news.map((item) => (
          <li className="topic" key={item.id}>
            <h2 className="topic-name">{item.title}</h2>
            <p className="topic-desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
